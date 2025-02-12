<script lang="ts" setup>
import packageApp from '~/package.json'

defineOptions({
  name: 'HandleCache',
})

defineSlots<{
  default: (isLoading: boolean, isLatestVersionAvailable: boolean) => any
}>()
const isLoading = ref(true)
const isLatestVersionAvailable = ref(false)
const appVersion = ref(packageApp.version)

function clearCacheAndReload() {
  console.log('Clearing cache and hard reloading...')
  if (caches) {
    caches.keys().then((names) => {
      for (const name of names) caches.delete(name)
    })
  }
  window.location.reload()
}

function checkVersionMismatch(latestVersion: any, currentVersion: any) {
  const latestVersionArray = latestVersion.split(/\./g)
  const currentVersionArray = currentVersion.split(/\./g)
  while (latestVersionArray.length || currentVersionArray.length) {
    const a = Number(latestVersionArray.shift())
    const b = Number(currentVersionArray.shift())
    if (a === b)
      continue
    return a > b || Number.isNaN(b)
  }
  return false
}

onMounted(() => {
  fetch(`/meta.json?${new Date().getTime()}`, { cache: 'no-cache' })
    .then(response => response.json())
    .then((meta) => {
      const latestVersion = meta.version
      const currentVersion = appVersion.value
      const shouldForceRefresh = checkVersionMismatch(latestVersion, currentVersion)
      if (shouldForceRefresh) {
        console.log(`New version - ${latestVersion}. Available, need to force refresh`)
        isLoading.value = false
        isLatestVersionAvailable.value = false
      }
      else {
        console.log(`Already latest version - ${latestVersion}. No refresh required.`)
        isLoading.value = false
        isLatestVersionAvailable.value = true
      }
    })
})

defineExpose({
  clearCacheAndReload,
})
</script>

<template>
  <div class="h-100%">
    <slot :is-loading="isLoading" :is-latest-version-available="isLatestVersionAvailable" />
  </div>
</template>
