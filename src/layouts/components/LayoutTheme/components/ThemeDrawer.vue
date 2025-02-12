<script lang="ts" setup>
import { CircleCheckFilled, CircleCloseFilled, Moon, Sunny } from '@element-plus/icons-vue'
import { translateTitle } from '@/utils'
import { t } from "@/composables"

const $sub: any = inject('$sub')
const $unsub: any = inject('$unsub')

const settingsStore = useSettingsStore()
const { theme, device, language } = storeToRefs(settingsStore)
const { saveTheme, resetTheme, updateTheme, toggleCollapse } = settingsStore

/** 系统主题色 */
const systemColor = reactive([
  '#1684fc',
  'rgb(64, 158, 255)',
  'rgb(45, 140, 240)',
  'rgb(0, 122, 255)',
  'rgb(90, 200, 250)',
  'rgb(88, 86, 214)',
  'rgb(83, 109, 254)',
  'rgb(156, 39, 176)',
  'rgb(175, 82, 222)',
  'rgb(0, 150, 199)',
  'rgb(52, 199, 89)',
  'rgb(192, 202, 51)',
  'rgb(229, 57, 53)',
])

const state = reactive({
  drawerVisible: false,
})

function handleOpenTheme() {
  state.drawerVisible = true
}

async function setDefaultTheme() {
  toggleCollapse(false)
  resetTheme()
  updateTheme()
  state.drawerVisible = false
}

function shuffle(val: string | boolean, list: (string | boolean)[]) {
  return list.filter(_ => _ !== val)[(Math.random() * (list.length - 1)) | 0]
}

async function randomTheme() {
  // 随机换肤重置移除主题，防止代码更新影响样式
  resetTheme()

  theme.value.themeName = shuffle(theme.value.themeName, [
    'blue-black',
    'blue-white',
    'ocean',
    'green-black',
    'green-white',
    'purple-black',
    'purple-white',
    'red-black',
    'red-white',
  ])
  theme.value.columnStyle = shuffle(theme.value.columnStyle, [
    'vertical',
    'horizontal',
    'card',
    'arrow',
  ])

  theme.value.tabsBarStyle = shuffle(theme.value.tabsBarStyle, ['card', 'smart', 'smooth'])
  theme.value.menuBarStyle = shuffle(theme.value.menuBarStyle, ['dark', 'light'])
  theme.value.showTabsIcon = shuffle(theme.value.showTabsIcon, [true, false])
  theme.value.layout
    = device.value === 'desktop'
      ? shuffle(theme.value.layout, [
        'horizontal',
        'vertical',
        'column',
        'comprehensive',
        'common',
        'float',
      ])
      : 'vertical'

  updateTheme()
  saveTheme()
}

/** 清除缓存 */
function removeLocalStorage() {
  localStorage.clear()
  location.reload()
}

$sub('theme', () => {
  handleOpenTheme()
})
$sub('random-theme', () => {
  randomTheme()
})

onBeforeUnmount(() => {
  $unsub('theme')
  $unsub('random-theme')
})

/** 布局切换 */
async function hanldeLayoutChange(type: 'vertical' | 'column' | 'horizontal') {
  theme.value.layout = type
  const el = ref<any>(null)
  if (theme.value.layout === 'vertical' || theme.value.layout === 'column') {
    if (language.value === 'en-US')
      useCssVar('--sjzy-left-menu-width', el).value = '260px'
    else useCssVar('--sjzy-left-menu-width', el).value = '220px'
  }

  toggleCollapse(false)

  saveTheme()
}

/** 系统主题色切换 */
function handleChangeColor(item: string) {
  theme.value.primaryColor = item
  settingsStore.changeColor()
}
</script>

<template>
  <ElDrawer
    v-model="state.drawerVisible"
    append-to-body
    class="sjzy-drawer"
    size="330px"
    :title="translateTitle('主题配置')"
    :show-close="false"
  >
    <ElScrollbar height="88vh">
      <ElDivider>
        <span class="text-14px"> {{ t('主题模式') }}</span>
      </ElDivider>
      <div class="text-14px">
        <div class="flex items-center justify-between">
          <span>{{ t('深色模式') }}</span>
          <ElSwitch
            v-model="theme.isDark"
            :value="theme.isDark"
            inline-prompt
            :active-icon="Sunny"
            :inactive-icon="Moon"
            size="large"
            style="

--el-switch-on-color: #000; --el-switch-off-color: #000"
            @change="() => settingsStore.changeDark()"
          />
        </div>
        <div class="flex items-center justify-between">
          <span>{{ t('跟随系统') }}</span>
          <ElSwitch
            v-model="theme.isSystem"
            inline-prompt
            :active-icon="CircleCheckFilled"
            :inactive-icon="CircleCloseFilled"
            size="large"
            style="

--el-switch-on-color: #000; --el-switch-off-color: #000"
          />
        </div>
      </div>

      <ElDivider>
        <span class="text-14px"> {{ t('布局模式') }}</span>
      </ElDivider>
      <div class="flex flex-wrap justify-center gap-col-20px gap-row-8px">
        <div class="max-w-100%" @click="hanldeLayoutChange('vertical')">
          <ElTooltip
            v-if="theme.showFullScreen"
            effect="dark"
            :content="t('纵向布局')"
            placement="bottom"
          >
            <div
              :class="{ 'border-[var(--el-color-primary)]!': theme.layout === 'vertical' }"
              class="cursor-pointer border-2px border-transparent rounded-6px border-solid hover:border-[var(--el-color-primary)]"
            >
              <div
                class="layout-checkbox__shadow relative h-48px w-56px overflow-hidden rounded-4px bg-white"
              >
                <div class="absolute left-0 top-0 h-full w-1/4 bg-[#273352]" /><div
                  class="absolute bottom-0 right-0 h-3/4 w-2/3 bg-[#f0f2f5]"
                />
              </div>
            </div>
          </ElTooltip>
        </div>
        <div class="max-w-100%" @click="hanldeLayoutChange('column')">
          <ElTooltip
            v-if="theme.showFullScreen"
            effect="dark"
            :content="t('分栏布局')"
            placement="bottom"
          >
            <div
              :class="{ 'border-[var(--el-color-primary)]!': theme.layout === 'column' }"
              class="cursor-pointer border-2px border-transparent rounded-6px border-solid hover:border-[var(--el-color-primary)]"
            >
              <div
                class="layout-checkbox__shadow relative h-48px w-56px overflow-hidden rounded-4px bg-white"
              >
                <div class="absolute left-0 top-0 h-full w-1/3 bg-[#273352]" /><div
                  class="absolute bottom-0 right-0 h-3/4 w-2/3 bg-[#f0f2f5]"
                />
              </div>
            </div>
          </ElTooltip>
        </div>
        <div class="max-w-100%" @click="hanldeLayoutChange('horizontal')">
          <ElTooltip
            v-if="theme.showFullScreen"
            effect="dark"
            :content="t('横向布局')"
            placement="bottom"
          >
            <div
              :class="{ 'border-[var(--el-color-primary)]!': theme.layout === 'horizontal' }"
              class="cursor-pointer border-2px border-transparent rounded-6px border-solid hover:border-[var(--el-color-primary)]"
            >
              <div
                class="layout-checkbox__shadow relative h-48px w-56px overflow-hidden rounded-4px bg-white"
              >
                <div class="absolute left-0 top-0 h-1/4 w-full bg-[#273352]" /><div
                  class="absolute bottom-0 right-0 h-3/4 w-full bg-[#f0f2f5]"
                />
              </div>
            </div>
          </ElTooltip>
        </div>
      </div>

      <ElDivider>
        <span class="text-14px"> {{ t('系统主题') }}</span>
      </ElDivider>
      <div
        class="sys-primary-color grid w-100%"
        style="grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 12px 8px"
      >
        <div
          v-for="item in systemColor"
          :key="item"
          class="flex-x-center"
          style="grid-column: span 1 / span 1"
          @click="handleChangeColor(item)"
        >
          <div
            class="h-20px w-20px flex cursor-pointer items-center justify-center rounded-2px shadow"
            :style="{ backgroundColor: item }"
          >
            <SjzyIcon
              v-if="item === theme.primaryColor"
              color="#fff"
              icon-font="icon-a-xuanzhong42"
              :size="8"
            />
          </div>
        </div>
      </div>

      <ElDivider>
        <span class="text-14px"> {{ t('界面显示') }}</span>
      </ElDivider>
      <div>
        <div class="flex items-center justify-between">
          <span>{{ t('标签风格') }}</span>
          <ElSelect
            v-model="theme.tabsBarStyle"
            class="w-120px"
            :disabled="!theme.showTabs"
            @change="saveTheme()"
          >
            <ElOption key="card" :label="translateTitle('卡片')" value="card" />
            <ElOption key="smart" :label="translateTitle('灵动')" value="smart" />
            <ElOption key="smooth" :label="translateTitle('圆滑')" value="smooth" />
          </ElSelect>
        </div>
      </div>
      <div class="m-t-10px">
        <div class="flex items-center justify-between">
          <span>{{ t('菜单栏配色') }}</span>
          <ElSelect
            v-model="theme.menuBarStyle"
            class="w-120px"
            :disabled="!theme.showMenu"
            @change="() => settingsStore.changeMenu()"
          >
            <ElOption key="dark" :label="translateTitle('深色')" value="dark" />
            <ElOption key="light" :label="translateTitle('浅白')" value="light" />
          </ElSelect>
        </div>
      </div>

      <ElDivider>
        <span class="text-14px"> {{ t('工具栏') }}</span>
      </ElDivider>
      <div>
        <ElButton class="w-100% rounded-2px" type="primary" @click="removeLocalStorage">
          {{ t('清理缓存') }}
        </ElButton>
        <ElButton
          class="m-t-10px w-100% rounded-2px m-l-0!"
          type="warning"
          @click="setDefaultTheme"
        >
          {{ t('恢复默认') }}
        </ElButton>
      </div>
    </ElScrollbar>
  </ElDrawer>
</template>

<style lang="scss">
@use 'sass:math';

.sjzy-drawer {
  .el-drawer__header {
    padding: var(--sjzy-base-padding);
    margin-bottom: 0;
    border-bottom: var(--el-border);
  }

  .el-drawer__body {
    padding-right: 0;

    .el-scrollbar__wrap {
      height: calc(100vh - 80px);
      padding: 0 var(--sjzy-base-padding);

      .el-divider--horizontal {
        margin: 20 * 2 0 20 * 2 0;
      }
    }
  }

  .el-drawer__footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
    padding: #{math.div(12px, 2)};
    background: var(--el-color-white);
    border-top: 1px solid var(--sjzy-base-border-color);
  }

  .layout-checkbox__shadow {
    box-shadow: 0 1px 2.5px #0000002e;
  }
}
</style>
