import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRole = defineStore('role', () => {
  const isRoleName = ref(false)
  const getRoleName = (data: any) => {
    if (data[0].meta && data[0].meta.title === '业务员') {
      isRoleName.value = true
    }
    else {
      isRoleName.value = false
    }
  }
  return {
    isRoleName,
    getRoleName,
  }
})
