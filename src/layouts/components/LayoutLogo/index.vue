<script lang="ts" setup>
import logo_large from '@/assets/logo_images/logo_large.png'
import logo_large_primary from '@/assets/logo_images/logo_large_primary.png'
import logo_small from '@/assets/logo_images/logo_small.png'
import logo_small_primary from '@/assets/logo_images/logo_small_primary.png'
import { translateTitle as t } from '@/utils'

const logoRef = ref<HTMLDivElement>()

const settingsStore = useSettingsStore()
const { setHeaderHeight } = useLayoutHeight()
const routesStore = useRoutesStore()

const { getTabMenu: tabMenu } = storeToRefs(routesStore)

const { theme, collapse } = storeToRefs(settingsStore)
nextTick(() => {
  setHeaderHeight(unref(logoRef)?.offsetHeight || 0)
})
</script>

<template>
  <div
    ref="logoRef"
    class="logo-container"
    :class="{
      [`logo-container-${theme.layout}`]: true,
    }"
  >
    <div v-if="theme.layout === 'column'">
      <span class="logo">
        <img class="h-34px" :src="logo_small" alt="">
      </span>
      <div class="title" :class="{ 'hidden-xs-only': theme.layout === 'horizontal' }">
        {{ t(tabMenu?.meta.title || '无标题') }}
      </div>
    </div>
    <div v-else>
      <div v-if="!collapse">
        <img
          class="h-35px"
          :src="theme.menuBarStyle === 'dark' || theme.isDark ? logo_large : logo_large_primary"
          alt="logo"
        >
      </div>
      <div v-else>
        <img
          class="h-35px"
          :src="theme.menuBarStyle === 'dark' || theme.isDark ? logo_small : logo_small_primary"
          alt="logo"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin container {
  position: relative;
  height: var(--sjzy-nav-height);
  padding-bottom: 2px;
  overflow: hidden;
  line-height: var(--sjzy-nav-height);
  background: var(--sjzy-menu-background);
}

@mixin logo {
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  fill: currentcolor;
}

@mixin title {
  display: inline-block;
  width: 100%;
  margin-top: -11px;
  margin-left: 5px;
  overflow: hidden;
  font-size: 14px;
  line-height: 50px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  background: var(--sjzy-menu-column-background);
  border-bottom: 1px dashed #d2d9dd;
}

.logo-container {
  &-horizontal {
    @include container;
    width: 100px;
    height: 100%;

    .logo {
      svg,
      img {
        @include logo;
      }
    }

    .title {
      @include title;
    }
  }

  &-vertical {
    justify-content: center;
  }

  &-vertical,
  &-column {
    @include container;
    display: flex;
    align-items: center;
    text-align: center;

    .logo {
      svg,
      img {
        @include logo;
      }
    }

    .title {
      @include title;
      max-width: calc(var(--sjzy-left-menu-width) - 60px);
    }
  }

  &-column {
    .logo {
      position: fixed;
      top: 0;
      display: block;
      width: var(--sjzy-column-collapse-width);
      height: var(--sjzy-nav-height);
      margin: 0;
      background: var(--sjzy-menu-background);
    }

    .title {
      padding-right: 15px;
      padding-left: 15px;
      margin-top: -5px !important;
      margin-left: var(--sjzy-column-collapse-width) !important;

      @include title;
    }
  }
}
</style>
