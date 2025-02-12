/* eslint-disable complexity */
/* eslint-disable ts/ban-types */
import type { ComponentOptions } from 'vue'
import { h, resolveComponent } from 'vue'
import XEUtils from 'xe-utils'
import type {
  VxeColumnPropTypes,
  VxeGlobalInterceptorHandles,
  VxeGlobalRendererHandles,
  VxeTableDefines,
  VxeUIExport,
} from 'vxe-table'
import dayjs from 'dayjs'

let vxetable: VxeUIExport

function isEmptyValue(cellValue: any) {
  return cellValue === null || cellValue === undefined || cellValue === ''
}

function getOnName(type: string) {
  return `on${type.substring(0, 1).toLocaleUpperCase()}${type.substring(1)}`
}

function getModelProp(_renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions) {
  return 'modelValue'
}

function getModelEvent(_renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions) {
  return 'update:modelValue'
}

function getChangeEvent(renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions) {
  let type = 'change'
  switch (renderOpts.name) {
    case 'ElAutocomplete':
      type = 'select'
      break
    case 'ElInput':
    case 'ElInputNumber':
      type = 'input'
      break
  }
  return type
}

function toDayStringDate(value: any, format: string) {
  return dayjs(value, format).date
}

function toDayDateString(date: any, format: string) {
  return dayjs(date).format(format)
}

function parseDate(value: any, props: { [key: string]: any }) {
  return value && props.valueFormat ? toDayStringDate(value, props.valueFormat) : value
}

function getFormatDate(value: any, props: { [key: string]: any }, defaultFormat: string) {
  return value ? toDayDateString(parseDate(value, props), props.format || defaultFormat) : value
}

function getFormatDates(
  values: any[],
  props: { [key: string]: any },
  separator: string,
  defaultFormat: string,
) {
  return XEUtils.map(values, (date: any) => getFormatDate(date, props, defaultFormat)).join(
    separator,
  )
}

function equalDaterange(
  cellValue: any,
  data: any,
  props: { [key: string]: any },
  defaultFormat: string,
) {
  cellValue = getFormatDate(cellValue, props, defaultFormat)
  return (
    cellValue >= getFormatDate(data[0], props, defaultFormat)
    && cellValue <= getFormatDate(data[1], props, defaultFormat)
  )
}

function getCellEditFilterProps(
  renderOpts: any,
  _params:
    | VxeGlobalRendererHandles.RenderTableEditParams
    | VxeGlobalRendererHandles.RenderTableFilterParams,
  value: any,
  defaultProps?: { [prop: string]: any },
) {
  return XEUtils.assign({}, defaultProps, renderOpts.props, { [getModelProp(renderOpts)]: value })
}

function getItemProps(
  renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions,
  _params: any,
  value: any,
  defaultProps?: { [prop: string]: any },
) {
  return XEUtils.assign({}, defaultProps, renderOpts.props, { [getModelProp(renderOpts)]: value })
}

function formatText(cellValue: any) {
  return `${isEmptyValue(cellValue) ? '' : cellValue}`
}

function getCellLabelVNs(
  renderOpts: VxeColumnPropTypes.EditRender,
  _params: VxeGlobalRendererHandles.RenderTableCellParams,
  cellLabel: any,
) {
  const { placeholder } = renderOpts
  return [
    h(
      'span',
      {
        class: 'vxe-cell--label',
      },
      placeholder && isEmptyValue(cellLabel)
        ? [
            h(
              'span',
              {
                class: 'vxe-cell--placeholder',
              },
              formatText(vxetable._t(placeholder)),
            ),
          ]
        : formatText(cellLabel),
    ),
  ]
}

function getOns(
  renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions,
  params: any,
  inputFunc?: Function,
  changeFunc?: Function,
) {
  const { events } = renderOpts
  const modelEvent = getModelEvent(renderOpts)
  const changeEvent = getChangeEvent(renderOpts)
  const isSameEvent = changeEvent === modelEvent
  const ons: { [type: string]: Function } = {}
  XEUtils.objectEach(events, (func: Function, key: string) => {
    ons[getOnName(key)] = function (...args: any[]) {
      func(params, ...args)
    }
  })
  if (inputFunc) {
    ons[getOnName(modelEvent)] = function (targetEvnt: any) {
      inputFunc(targetEvnt)
      if (events && events[modelEvent]) {
        events[modelEvent](params, targetEvnt)
      }
      if (isSameEvent && changeFunc) {
        changeFunc(targetEvnt)
      }
    }
  }
  if (!isSameEvent && changeFunc) {
    ons[getOnName(changeEvent)] = function (...args: any[]) {
      changeFunc(...args)
      if (events && events[changeEvent]) {
        events[changeEvent](params, ...args)
      }
    }
  }
  return ons
}

function getEditOns(
  renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions,
  params: VxeGlobalRendererHandles.RenderTableEditParams<any>,
) {
  const { $table, row, column } = params
  return getOns(
    renderOpts,
    params,
    (value: any) => {
      // 处理 model 值双向绑定
      XEUtils.set(row, column.field, value)
    },
    () => {
      // 处理 change 事件相关逻辑
      $table.updateStatus(params)
    },
  )
}

function getFilterOns(
  renderOpts: any,
  params: VxeGlobalRendererHandles.RenderTableFilterParams,
  option: VxeTableDefines.FilterOption,
  changeFunc: Function,
) {
  return getOns(
    renderOpts,
    params,
    (value: any) => {
      // 处理 model 值双向绑定
      option.data = value
    },
    changeFunc,
  )
}

function getItemOns(renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions, params: any) {
  const { $form, data, field } = params
  return getOns(
    renderOpts,
    params,
    (value: any) => {
      // 处理 model 值双向绑定
      XEUtils.set(data, field, value)
    },
    () => {
      // 处理 change 事件相关逻辑
      $form.updateStatus(params)
    },
  )
}

function matchCascaderData(index: number, list: any[], values: any[], labels: any[]) {
  const val = values[index]
  if (list && values.length > index) {
    XEUtils.each(list, (item) => {
      if (item.value === val) {
        labels.push(item.label)
        matchCascaderData(++index, item.children, values, labels)
      }
    })
  }
}

function getSelectCellValue(
  renderOpts: VxeColumnPropTypes.EditRender,
  params: VxeGlobalRendererHandles.RenderTableCellParams,
) {
  const {
    options = [],
    optionGroups,
    props = {},
    optionProps = {},
    optionGroupProps = {},
  } = renderOpts
  const { $table, rowid, row, column } = params
  const { filterable, multiple } = props
  const labelProp = optionProps.label || 'label'
  const valueProp = optionProps.value || 'value'
  const groupOptions = optionGroupProps.options || 'options'
  const cellValue = XEUtils.get(row, column.field)
  const colid = column.id
  let cellData: any
  if (filterable) {
    const { internalData } = $table
    const { fullAllDataRowIdData } = internalData
    const rest: any = fullAllDataRowIdData[rowid]
    if (rest) {
      cellData = rest.cellData
      if (!cellData) {
        cellData = rest.cellData = {}
      }
    }
    if (rest && cellData[colid] && cellData[colid].value === cellValue) {
      return cellData[colid].label
    }
  }
  if (!isEmptyValue(cellValue)) {
    const selectlabel = XEUtils.map(
      multiple ? cellValue : [cellValue],
      optionGroups
        ? (value) => {
            let selectItem: any
            for (let index = 0; index < optionGroups.length; index++) {
              selectItem = XEUtils.find(
                optionGroups[index][groupOptions],
                item => item[valueProp] === value,
              )
              if (selectItem) {
                break
              }
            }
            return selectItem ? selectItem[labelProp] : value
          }
        : (value) => {
            const selectItem = XEUtils.find(options, item => item[valueProp] === value)
            return selectItem ? selectItem[labelProp] : value
          },
    ).join(', ')
    if (cellData && options && options.length) {
      cellData[colid] = { value: cellValue, label: selectlabel }
    }
    return selectlabel
  }
  return ''
}

function getCascaderCellValue(
  renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions,
  params: VxeGlobalRendererHandles.RenderTableCellParams,
) {
  const { props = {} } = renderOpts
  const { row, column } = params
  const cellValue = XEUtils.get(row, column.field)
  const values: any[] = cellValue || []
  const labels: any[] = []
  matchCascaderData(0, props.options, values, labels)
  return (
    props.showAllLevels === false ? labels.slice(labels.length - 1, labels.length) : labels
  ).join(` ${props.separator || '/'} `)
}

function getDatePickerCellValue(
  renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions,
  params:
    | VxeGlobalRendererHandles.RenderTableCellParams
    | VxeGlobalRendererHandles.ExportMethodParams,
) {
  const { props = {} } = renderOpts
  const { row, column } = params
  const { rangeSeparator = '-' } = props
  let cellValue = XEUtils.get(row, column.field)
  switch (props.type) {
    case 'week':
      cellValue = getFormatDate(cellValue, props, 'YYYYwWW')
      break
    case 'month':
      cellValue = getFormatDate(cellValue, props, 'YYYY-MM')
      break
    case 'year':
      cellValue = getFormatDate(cellValue, props, 'YYYY')
      break
    case 'dates':
      cellValue = getFormatDates(cellValue, props, ', ', 'YYYY-MM-DD')
      break
    case 'daterange':
      cellValue = getFormatDates(cellValue, props, ` ${rangeSeparator} `, 'YYYY-MM-DD')
      break
    case 'datetimerange':
      cellValue = getFormatDates(cellValue, props, ` ${rangeSeparator} `, 'YYYY-MM-DD HH:ss:mm')
      break
    case 'monthrange':
      cellValue = getFormatDates(cellValue, props, ` ${rangeSeparator} `, 'YYYY-MM')
      break
    default:
      cellValue = getFormatDate(cellValue, props, 'YYYY-MM-DD')
  }
  return cellValue
}

function getTimePickerCellValue(
  renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions,
  params:
    | VxeGlobalRendererHandles.RenderTableCellParams
    | VxeGlobalRendererHandles.RenderTableEditParams,
) {
  const { props = {} } = renderOpts
  const { row, column } = params
  const { isRange, format = 'hh:mm:ss', rangeSeparator = '-' } = props
  let cellValue = XEUtils.get(row, column.field)
  if (cellValue && isRange) {
    cellValue = XEUtils.map(cellValue, date =>
      toDayDateString(parseDate(date, props), format)).join(` ${rangeSeparator} `)
  }
  return toDayDateString(parseDate(cellValue, props), format)
}

function createEditRender(defaultProps?: { [key: string]: any }) {
  return function (
    renderOpts: VxeColumnPropTypes.EditRender & { name: string },
    params: VxeGlobalRendererHandles.RenderTableEditParams,
  ) {
    const { row, column } = params
    const { name, attrs } = renderOpts
    const cellValue = XEUtils.get(row, column.field)
    return [
      h(resolveComponent(name), {
        ...attrs,
        ...getCellEditFilterProps(renderOpts, params, cellValue, defaultProps),
        ...getEditOns(renderOpts, params),
      }),
    ]
  }
}

function defaultButtonEditRender(
  renderOpts: VxeColumnPropTypes.EditRender,
  params: VxeGlobalRendererHandles.RenderTableEditParams,
) {
  const { attrs } = renderOpts
  return [
    h(
      resolveComponent('el-button'),
      {
        ...attrs,
        ...getCellEditFilterProps(renderOpts, params, null),
        ...getOns(renderOpts, params),
      },
      cellText(renderOpts.content),
    ),
  ]
}

function defaultButtonsEditRender(
  renderOpts: VxeColumnPropTypes.EditRender,
  params: VxeGlobalRendererHandles.RenderTableEditParams,
) {
  const { children } = renderOpts
  if (children) {
    return children.map(
      (childRenderOpts: VxeColumnPropTypes.EditRender) =>
        defaultButtonEditRender(childRenderOpts, params)[0],
    )
  }
  return []
}

function createFilterRender(defaultProps?: { [key: string]: any }) {
  return function (
    renderOpts: VxeGlobalRendererHandles.RenderTableFilterOptions & { name: string },
    params: VxeGlobalRendererHandles.RenderTableFilterParams,
  ) {
    const { column } = params
    const { name, attrs } = renderOpts
    return [
      h(
        'div',
        {
          class: 'vxe-table--filter-element-wrapper',
        },
        column.filters.map((option, oIndex) => {
          const optionValue = option.data
          return h(resolveComponent(name), {
            key: oIndex,
            ...attrs,
            ...getCellEditFilterProps(renderOpts, params, optionValue, defaultProps),
            ...getFilterOns(renderOpts, params, option, () => {
              // 处理 change 事件相关逻辑
              handleConfirmFilter(params, !!option.data, option)
            }),
          })
        }),
      ),
    ]
  }
}

function handleConfirmFilter(
  params: VxeGlobalRendererHandles.RenderTableFilterParams,
  checked: boolean,
  option: VxeTableDefines.FilterOption,
) {
  const { $panel } = params
  $panel.changeOption(null, checked, option)
}

/**
 * 模糊匹配
 * @param params
 */
function defaultFuzzyFilterMethod(params: VxeGlobalRendererHandles.TableFilterMethodParams) {
  const { option, row, column } = params
  const { data } = option
  const cellValue = XEUtils.get(row, column.field)
  return XEUtils.toValueString(cellValue).includes(data)
}

/**
 * 精确匹配
 * @param params
 */
function defaultExactFilterMethod(params: VxeGlobalRendererHandles.TableFilterMethodParams) {
  const { option, row, column } = params
  const { data } = option
  const cellValue = XEUtils.get(row, column.field)

  return cellValue === data
}

function RenderTableFilterOptions(
  options: any[],
  optionProps: VxeGlobalRendererHandles.RenderOptionProps,
) {
  const labelProp = optionProps.label || 'label'
  const valueProp = optionProps.value || 'value'
  return XEUtils.map(options, (item, oIndex) => {
    return h(resolveComponent('el-option'), {
      key: oIndex,
      value: item[valueProp],
      label: item[labelProp],
      disabled: item.disabled,
    })
  })
}

function cellText(cellValue: any): string[] {
  return [formatText(cellValue)]
}

function createFormItemRender(defaultProps?: { [key: string]: any }) {
  return function (
    renderOpts: VxeGlobalRendererHandles.RenderFormItemContentOptions & { name: string },
    params: any,
  ) {
    const { data, field } = params
    const { name } = renderOpts
    const { attrs } = renderOpts
    const itemValue = XEUtils.get(data, field)
    return [
      h(resolveComponent(name), {
        ...attrs,
        ...getItemProps(renderOpts, params, itemValue, defaultProps),
        ...getItemOns(renderOpts, params),
      }),
    ]
  }
}

function defaultButtonItemRender(
  renderOpts: VxeGlobalRendererHandles.RenderFormItemContentOptions,
  params: any,
) {
  const { attrs } = renderOpts
  const props = getItemProps(renderOpts, params, null)
  return [
    h(
      resolveComponent('el-button') as ComponentOptions,
      {
        ...attrs,
        ...props,
        ...getOns(renderOpts, params),
      },
      {
        default: () => cellText(renderOpts.content || props.content),
      },
    ),
  ]
}

function defaultButtonsItemRender(
  renderOpts: VxeGlobalRendererHandles.RenderFormItemContentOptions,
  params: any,
) {
  const { children } = renderOpts
  if (children) {
    return children.map(
      (childRenderOpts: VxeGlobalRendererHandles.RenderFormItemContentOptions) =>
        defaultButtonItemRender(childRenderOpts, params)[0],
    )
  }
  return []
}

function createExportMethod(getExportCellValue: Function) {
  return function (params: VxeGlobalRendererHandles.ExportMethodParams) {
    const { row, column, options } = params
    return options && options.original
      ? XEUtils.get(row, column.field)
      : getExportCellValue(column.editRender || column.cellRender, params)
  }
}

function createFormItemRadioAndCheckboxRender() {
  return function (
    renderOpts: VxeGlobalRendererHandles.RenderFormItemContentOptions & { name: string },
    params: any,
  ) {
    const { name, options = [], optionProps = {}, attrs } = renderOpts
    const { data, field } = params
    const labelProp = optionProps.label || 'label'
    const valueProp = optionProps.value || 'value'
    const itemValue = XEUtils.get(data, field)
    return [
      h(
        resolveComponent(`${name}Group`) as ComponentOptions,
        {
          ...attrs,
          ...getItemProps(renderOpts, params, itemValue),
          ...getItemOns(renderOpts, params),
        },
        {
          default: () => {
            return options.map((option, oIndex) => {
              return h(
                resolveComponent(name) as ComponentOptions,
                {
                  key: oIndex,
                  label: option[valueProp],
                  disabled: option.disabled,
                },
                {
                  default: () => cellText(option[labelProp]),
                },
              )
            })
          },
        },
      ),
    ]
  }
}

/**
 * 检查触发源是否属于目标节点
 */
function getEventTargetNode(evnt: any, container: HTMLElement, className: string) {
  let targetElem
  let target = evnt.target
  while (target && target.nodeType && target !== document) {
    if (
      className
      && target.className
      && target.className.split
      && target.className.split(' ').includes(className)
    ) {
      targetElem = target
    }
    else if (target === container) {
      return { flag: className ? !!targetElem : true, container, targetElem }
    }
    target = target.parentNode
  }
  return { flag: false }
}

/**
 * 事件兼容性处理
 */
function handleClearEvent(
  params:
    | VxeGlobalInterceptorHandles.InterceptorClearFilterParams
    | VxeGlobalInterceptorHandles.InterceptorClearEditParams
    | VxeGlobalInterceptorHandles.InterceptorClearAreasParams,
) {
  const { $event } = params
  const bodyElem = document.body
  if (
    // 远程搜索
    getEventTargetNode($event, bodyElem, 'el-autocomplete-suggestion').flag
    // 下拉框
    || getEventTargetNode($event, bodyElem, 'el-select-dropdown').flag
    // 级联
    || getEventTargetNode($event, bodyElem, 'el-cascader__dropdown').flag
    || getEventTargetNode($event, bodyElem, 'el-cascader-menus').flag
    // 日期
    || getEventTargetNode($event, bodyElem, 'el-time-panel').flag
    || getEventTargetNode($event, bodyElem, 'el-picker-panel').flag
    // 颜色
    || getEventTargetNode($event, bodyElem, 'el-color-dropdown').flag
  ) {
    return false
  }
}

/**
 * 基于 vxe-table 的表格适配插件，用于兼容 element-ui 组件库
 */
export const VXETablePluginElement = {
  install(vxetable: VxeUIExport) {
    console.log(vxetable, 'vxetable')
    // 检查版本
    if (!/^4\./.test(vxetable.version)) {
      console.error('[vxe-table-plugin-element 4.x] Version vxe-table 4.x is required')
    }

    vxetable.renderer.mixin({
      ElAutocomplete: {
        tableAutoFocus: 'input.el-input__inner',
        renderTableDefault: createEditRender(),
        renderTableEdit: createEditRender(),
        renderTableFilter: createFilterRender(),
        defaultTableFilterMethod: defaultExactFilterMethod,
        renderFormItemContent: createFormItemRender(),
      },
      ElInput: {
        tableAutoFocus: 'input.el-input__inner',
        renderTableDefault: createEditRender(),
        renderTableEdit: createEditRender(),
        renderTableFilter: createFilterRender(),
        defaultTableFilterMethod: defaultFuzzyFilterMethod,
        renderFormItemContent: createFormItemRender(),
      },
      ElInputNumber: {
        tableAutoFocus: 'input.el-input__inner',
        renderTableDefault: createEditRender(),
        renderTableEdit: createEditRender(),
        renderTableFilter: createFilterRender(),
        defaultTableFilterMethod: defaultFuzzyFilterMethod,
        renderFormItemContent: createFormItemRender(),
      },
      ElSelect: {
        renderTableEdit(renderOpts, params) {
          const { options = [], optionGroups, optionProps = {}, optionGroupProps = {} } = renderOpts
          const { row, column } = params
          const { attrs } = renderOpts
          const cellValue = XEUtils.get(row, column.field)
          const props = getCellEditFilterProps(renderOpts, params, cellValue)
          const ons = getEditOns(renderOpts, params)
          if (optionGroups) {
            const groupOptions = optionGroupProps.options || 'options'
            const groupLabel = optionGroupProps.label || 'label'
            return [
              h(
                resolveComponent('el-select') as ComponentOptions,
                {
                  ...attrs,
                  ...props,
                  ...ons,
                },
                {
                  default: () => {
                    return XEUtils.map(optionGroups, (group, gIndex) => {
                      return h(
                        resolveComponent('el-option-group') as ComponentOptions,
                        {
                          key: gIndex,
                          label: group[groupLabel],
                        },
                        {
                          default: () => RenderTableFilterOptions(group[groupOptions], optionProps),
                        },
                      )
                    })
                  },
                },
              ),
            ]
          }
          return [
            h(
              resolveComponent('el-select') as ComponentOptions,
              {
                ...props,
                ...attrs,
                ...ons,
              },
              {
                default: () => RenderTableFilterOptions(options, optionProps),
              },
            ),
          ]
        },
        renderTableCell(renderOpts, params) {
          return getCellLabelVNs(renderOpts, params, getSelectCellValue(renderOpts, params))
        },
        renderTableFilter(renderOpts, params) {
          const { options = [], optionGroups, optionProps = {}, optionGroupProps = {} } = renderOpts
          const groupOptions = optionGroupProps.options || 'options'
          const groupLabel = optionGroupProps.label || 'label'
          const { column } = params
          const { attrs } = renderOpts
          return [
            h(
              'div',
              {
                class: 'vxe-table--filter-element-wrapper',
              },
              optionGroups
                ? column.filters.map((option, oIndex) => {
                  const optionValue = option.data
                  const props = getCellEditFilterProps(renderOpts, params, optionValue)
                  return h(
                    resolveComponent('el-select') as ComponentOptions,
                    {
                      key: oIndex,
                      ...attrs,
                      ...props,
                      ...getFilterOns(renderOpts, params, option, () => {
                        // 处理 change 事件相关逻辑
                        handleConfirmFilter(
                          params,
                          props.multiple
                            ? option.data && option.data.length > 0
                            : !XEUtils.eqNull(option.data),
                          option,
                        )
                      }),
                    },
                    {
                      default: () => {
                        return XEUtils.map(optionGroups, (group, gIndex) => {
                          return h(
                            resolveComponent('el-option-group') as ComponentOptions,
                            {
                              key: gIndex,
                              label: group[groupLabel],
                            },
                            {
                              default: () =>
                                RenderTableFilterOptions(group[groupOptions], optionProps),
                            },
                          )
                        })
                      },
                    },
                  )
                })
                : column.filters.map((option, oIndex) => {
                  const optionValue = option.data
                  const props = getCellEditFilterProps(renderOpts, params, optionValue)
                  return h(
                    resolveComponent('el-select') as ComponentOptions,
                    {
                      key: oIndex,
                      ...attrs,
                      ...props,
                      ...getFilterOns(renderOpts, params, option, () => {
                        // 处理 change 事件相关逻辑
                        handleConfirmFilter(
                          params,
                          props.multiple
                            ? option.data && option.data.length > 0
                            : !XEUtils.eqNull(option.data),
                          option,
                        )
                      }),
                    },
                    {
                      default: () => RenderTableFilterOptions(options, optionProps),
                    },
                  )
                }),
            ),
          ]
        },
        defaultTableFilterMethod(params) {
          const { option, row, column } = params
          const { data } = option
          const { field, filterRender: renderOpts } = column
          const { props = {} } = renderOpts
          const cellValue = XEUtils.get(row, field)
          if (props.multiple) {
            if (XEUtils.isArray(cellValue)) {
              return XEUtils.includeArrays(cellValue, data)
            }
            return data.includes(cellValue)
          }
          /* eslint-disable eqeqeq */
          return cellValue == data
        },
        renderItemContent(renderOpts, params) {
          const { options = [], optionGroups, optionProps = {}, optionGroupProps = {} } = renderOpts
          const { data, field } = params
          const { attrs } = renderOpts
          const itemValue = XEUtils.get(data, field)
          const props = getItemProps(renderOpts, params, itemValue)
          const ons = getItemOns(renderOpts, params)
          if (optionGroups) {
            const groupOptions = optionGroupProps.options || 'options'
            const groupLabel = optionGroupProps.label || 'label'
            return [
              h(
                resolveComponent('el-select') as ComponentOptions,
                {
                  ...attrs,
                  ...props,
                  ...ons,
                },
                {
                  default: () => {
                    return XEUtils.map(optionGroups, (group, gIndex) => {
                      return h(
                        resolveComponent('el-option-group') as ComponentOptions,
                        {
                          label: group[groupLabel],
                          key: gIndex,
                        },
                        {
                          default: () => RenderTableFilterOptions(group[groupOptions], optionProps),
                        },
                      )
                    })
                  },
                },
              ),
            ]
          }
          return [
            h(
              resolveComponent('el-select') as ComponentOptions,
              {
                ...attrs,
                ...props,
                ...ons,
              },
              {
                default: () => RenderTableFilterOptions(options, optionProps),
              },
            ),
          ]
        },
        tableExportMethod: createExportMethod(getSelectCellValue),
      },
      ElCascader: {
        renderTableEdit: createEditRender(),
        renderTableCell(renderOpts, params) {
          return getCellLabelVNs(renderOpts, params, getCascaderCellValue(renderOpts, params))
        },
        renderFormItemContent: createFormItemRender(),
        tableExportMethod: createExportMethod(getCascaderCellValue),
      },
      ElDatePicker: {
        renderTableEdit: createEditRender(),
        renderTableCell(renderOpts, params) {
          return getCellLabelVNs(renderOpts, params, getDatePickerCellValue(renderOpts, params))
        },
        renderTableFilter(renderOpts, params) {
          const { column } = params
          const { name, attrs } = renderOpts
          return [
            h(
              'div',
              {
                class: 'vxe-table--filter-element-wrapper',
              },
              column.filters.map((option, oIndex) => {
                const optionValue = option.data
                return h(resolveComponent(name as string), {
                  key: oIndex,
                  ...attrs,
                  ...getCellEditFilterProps(renderOpts, params, optionValue),
                  ...getFilterOns(renderOpts, params, option, () => {
                    // 处理 change 事件相关逻辑
                    handleConfirmFilter(params, !!option.data, option)
                  }),
                })
              }),
            ),
          ]
        },
        defaultTableFilterMethod(params) {
          const { option, row, column } = params
          const { data } = option
          const { filterRender: renderOpts } = column
          const { props = {} } = renderOpts
          const cellValue = XEUtils.get(row, column.field)
          if (data) {
            switch (props.type) {
              case 'daterange':
                return equalDaterange(cellValue, data, props, 'YYYY-MM-DD')
              case 'datetimerange':
                return equalDaterange(cellValue, data, props, 'YYYY-MM-DD HH:ss:mm')
              case 'monthrange':
                return equalDaterange(cellValue, data, props, 'YYYY-MM')
              default:
                return cellValue === data
            }
          }
          return false
        },
        renderFormItemContent: createFormItemRender(),
        tableExportMethod: createExportMethod(getDatePickerCellValue),
      },
      ElTimePicker: {
        renderTableEdit: createEditRender(),
        renderTableCell(renderOpts, params) {
          return getCellLabelVNs(renderOpts, params, getTimePickerCellValue(renderOpts, params))
        },
        renderFormItemContent: createFormItemRender(),
        tableExportMethod: createExportMethod(getTimePickerCellValue),
      },
      ElTimeSelect: {
        renderTableEdit: createEditRender(),
        renderFormItemContent: createFormItemRender(),
      },
      ElRate: {
        renderTableDefault: createEditRender(),
        renderTableEdit: createEditRender(),
        renderTableFilter: createFilterRender(),
        defaultTableFilterMethod: defaultExactFilterMethod,
        renderFormItemContent: createFormItemRender(),
      },
      ElSwitch: {
        renderTableDefault: createEditRender(),
        renderTableEdit: createEditRender(),
        renderTableFilter(renderOpts, params) {
          const { column } = params
          const { name, attrs } = renderOpts
          return [
            h(
              'div',
              {
                class: 'vxe-table--filter-element-wrapper',
              },
              column.filters.map((option, oIndex) => {
                const optionValue = option.data
                return h(resolveComponent(name as string), {
                  key: oIndex,
                  ...attrs,
                  ...getCellEditFilterProps(renderOpts, params, optionValue),
                  ...getFilterOns(renderOpts, params, option, () => {
                    // 处理 change 事件相关逻辑
                    handleConfirmFilter(params, XEUtils.isBoolean(option.data), option)
                  }),
                })
              }),
            ),
          ]
        },
        defaultTableFilterMethod: defaultExactFilterMethod,
        renderFormItemContent: createFormItemRender(),
      },
      ElSlider: {
        renderTableDefault: createEditRender(),
        renderTableEdit: createEditRender(),
        renderTableFilter: createFilterRender(),
        defaultTableFilterMethod: defaultExactFilterMethod,
        renderFormItemContent: createFormItemRender(),
      },
      ElRadio: {
        renderFormItemContent: createFormItemRadioAndCheckboxRender(),
      },
      ElCheckbox: {
        renderFormItemContent: createFormItemRadioAndCheckboxRender(),
      },
      ElButton: {
        renderTableDefault: defaultButtonEditRender,
        renderFormItemContent: defaultButtonItemRender,
      },
      ElButtons: {
        renderTableDefault: defaultButtonsEditRender,
        renderFormItemContent: defaultButtonsItemRender,
      },
    })

    vxetable.interceptor.add('event.clearFilter', handleClearEvent)
    vxetable.interceptor.add('event.clearEdit', handleClearEvent)
    vxetable.interceptor.add('event.clearAreas', handleClearEvent)
    // 兼容老版本
    vxetable.interceptor.add('event.clearActived', handleClearEvent)
  },
}

if (typeof window !== 'undefined' && window.VXETable && window.VXETable.use) {
  window.VXETable.use(VXETablePluginElement)
}

export default VXETablePluginElement
