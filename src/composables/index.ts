// useFormSlot
// import { useFormSlot } from './form/useFormSlot'

// // useFormat
// import { useFormat } from './form/useFormat'

import { useClearDirty, useFormDirty, useGetPagesFormDirty, useIsDirty } from './form/useFormDirty'

// useContentHeight
import { useContentHeight, useLayoutHeight } from './table/useContentHeight'
import { useResetData } from './table/useResetData'
import { useTableSlot } from './table/useTableSlot'
import { useDriver } from './table/useDriver'

// useWindowSizeFn
import { useWindowSizeFn } from './event/useWindowSizeFn'

// onMountedOrActivated
import { onMountedOrActivated } from './core/useMountedOrActived'

// $baseMessage
import { $baseConfirm, $baseMessage, $baseNotify } from './core/useMessage'

// useDesign
import { useDesign } from './web/useDesign'
import { useOrderCopy } from './web/useOrderCopy'
// import { usePrinter } from './web/usePrinter'

// useTabs
import { useTabs } from './web/useTabs'
import { useIsScroll } from './web/useIsScroll'

// form 验证
// import { useFormValidator } from './form/useFormValidator'

// 字典
import { useDict, useDictGroup, useDictTree } from './dict/useDict'

// 多语言
import { useFlowLayout } from './web/useLayout'
import { translateTitle } from '@/utils'
import { setDownTemplateName } from '@/utils/file/download'

const t = translateTitle

export {
  // useFormSlot,
  useContentHeight,
  useWindowSizeFn,
  onMountedOrActivated,
  useLayoutHeight,
  $baseConfirm,
  $baseMessage,
  $baseNotify,
  useDesign,
  // useFormat,
  // useFormValidator,
  useTableSlot,
  useResetData,
  useOrderCopy,
  useIsScroll,
  // usePrinter,
  t,
  useTabs,
  useDict,
  useDictGroup,
  useDictTree,
  useDriver,
  setDownTemplateName,
  useIsDirty,
  useClearDirty,
  useFormDirty,
  useGetPagesFormDirty,
  useFlowLayout,
}
