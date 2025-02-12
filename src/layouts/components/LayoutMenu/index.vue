<script lang="ts">
/* 防止偶发性自动导入失败 */
import { storeToRefs } from 'pinia'
import { computed, defineComponent } from 'vue'

const imports = import.meta.glob('./components/*.vue', { eager: true }) as any
const Components: {
  [key: string]: any
} = {}
Object.keys(imports)
  .filter(key => key !== './index.vue')
  .forEach((key) => {
    Components[key.replace(/(components\/|\.|vue|\/)/g, '')] = imports[key].default
  })

export default defineComponent({
  name: 'LayoutMenu',
  components: Components,
  props: {
    item: {
      type: Object,
      required: true,
    },
    layout: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const settingsStore = useSettingsStore()
    const { collapse } = storeToRefs(settingsStore)

    const menuComponent = computed(() =>
      props.item.children
      && props.item.children.some((_route: any) => {
        return _route.meta.hidden !== true
      })
        ? 'SubMenu'
        : 'MenuItem',
    )

    return {
      collapse,
      menuComponent,
    }
  },
})
</script>

<template>
  <Component :is="menuComponent" v-if="!item.meta.hidden" :item-or-menu="item">
    <template v-if="item.children && item.children.length">
      <ElScrollbar
        v-if="
          (layout === 'horizontal' && item.children.length > 18)
            || (layout !== 'horizontal' && collapse && item.children.length > 18)
        "
      >
        <LayoutMenu
          v-for="route in item.children"
          :key="route.path"
          :item="route"
          :class="route.meta.icon ? '' : 'level2'"
        />
      </ElScrollbar>
      <template v-else>
        <LayoutMenu
          v-for="route in item.children"
          :key="route.path"
          :item="route"
          :class="route.meta.icon ? '' : 'level2'"
        />
      </template>
    </template>
  </Component>
</template>

<style lang="scss" scoped>
.sjzy-menu-children-height {
  height: 60vh !important;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>

<style lang="scss">
.el-popper.is-light {
  border: 0 !important;
}
</style>
