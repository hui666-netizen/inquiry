import { driver } from 'driver.js'
import { onBeforeUnmount } from 'vue'

export const driverObj = driver()

export function useDriver() {
  onBeforeUnmount(() => {
    driverObj.refresh()
  })
  return { driverObj }
}
