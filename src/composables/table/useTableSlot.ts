import { computed } from 'vue'
import type { Slots } from 'vue'

export function useTableSlot(slots: Slots) {
  const getTableSlotKeys = computed(() => {
    console.log(slots, 'slots')
    const keys = Object.keys(slots)
    return keys.map(item => (item.startsWith(`t-`) ? item : null)).filter(Boolean)
  })

  const replaceTableSlotKey = (key: string | null) => {
    if (!key)
      return ''
    return key?.replace?.(/t-/, '') ?? ''
  }

  return {
    getTableSlotKeys,
    replaceTableSlotKey,
  }
}
