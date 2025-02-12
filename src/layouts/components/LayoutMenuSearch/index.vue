<script setup lang="ts">
import type { Ref } from 'vue'
import Fuse from 'fuse.js'
import { useRouter } from 'vue-router'
import type { RouteRecord } from '@/types/router'

type FeOptions = {
  item: {
    name: string
    title: string[]
  }
  refIndex: number
  value?: Ref
}

type FeMenuData = (menus: RouteRecord[], prefixTitle?: string[]) => any

const { routes } = useRoutesStore()

const router = useRouter()

const searchValue = ref('')

const fuse = ref<Fuse<any>>()

const options = ref<FeOptions[] | undefined>([])

const handleMenuData: FeMenuData = (menus, prefixTitle = []) => {
  let results: any[] = []

  for (const router of menus) {
    const data: { name: string, title: string[] } = {
      name: router.name,
      title: [...prefixTitle],
    }

    if (router.meta && router.meta.title && !router.meta.hidden) {
      data.title = [...data.title, router.meta.title]

      results.push(data)
    }

    // recursive child routes
    if (router.children) {
      const tempRoutes: any[] = handleMenuData(router.children, data.title)
      if (tempRoutes.length >= 1)
        results = [...results, ...tempRoutes]
    }
  }
  return results
}

function setRoutes(): RouteRecord[] {
  /** 不需要进行查询的路由 */
  const noSearchRoutes: string[] = [
    'systemLogin',
    'tLogin',
    'ExportOrderDetail',
    '403',
    '404',
    'Root',
    'Error',
    'NotFound',
  ]

  const list = routes.filter((r: RouteRecord) => {
    return !noSearchRoutes.includes(r.name)
  })

  return handleMenuData(list)
}

function initFuse(list: RouteRecord[]) {
  const option = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      {
        name: 'title',
        weight: 0.7,
      },
      {
        name: 'name',
        weight: 0.3,
      },
    ],
  }
  fuse.value = new Fuse(list, option)
}

function menuSearch(query: any) {
  if (query)
    options.value = fuse.value?.search(query).filter((i: any) => i.item.title.length > 1)
  else options.value = []
  console.log(options.value, 'options.value')
}

function handleChange(name: string) {
  router.push({ name })
  options.value = []
  searchValue.value = ''
}

onMounted(() => {
  initFuse(setRoutes())
})
</script>

<template>
  <div class="sjzy-menu-search">
    <span class="title">干线询报价系统</span>
    <ElSelect
      v-model="searchValue"
      filterable
      remote
      default-first-option
      :remote-method="menuSearch"
      placeholder="输入菜单关键字搜索"
      @change="handleChange"
    >
      <ElOption
        v-for="({ item }, index) in options"
        :key="index"
        :label="item.title.join(' > ')"
        :value="item.name"
      />
    </ElSelect>
  </div>
</template>

<style scoped lang="scss">
.sjzy-menu-search {
  position: relative;
  padding: 0 20px;
  margin-top: 15px;
  color: var(--sjzy-menu-color);
  text-align: center;

  :deep(.el-select) {
    margin-top: 10px;

    .el-select__wrapper {
      padding-left: 30px !important;
      background-color: var(--sjzy-menu-search-bg);
      border-radius: 20px !important;
      box-shadow: none !important;

      .el-select__inner {
        color: var(--sjzy-menu-color);
        text-indent: 18px;
      }

      .el-select__input {
        color: var(--sjzy-menu-color);
      }
    }

    .el-select__wrapper .is-focus {
      box-shadow: none !important;
    }
  }

  .el-icon {
    position: absolute !important;
    top: 50% !important;
    left: 32px !important;
    transform: translateY(-50%);
  }
}
</style>
