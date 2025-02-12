import { ref } from 'vue'
import { getLodop } from './CLodop/LodopFuncs'

export function usePrinter() {
  const priterList = ref<string[]>([])
  const printSize = [
    {
      width: 1000,
      height: 1000,
    },
    {
      width: 1000,
      height: 1500,
    },
  ]
  let LODOP: any
  setTimeout(() => {
    LODOP = getLodop()
    const count = LODOP.GET_PRINTER_COUNT()
    for (let i = 0; i < count; i++) priterList.value.push(LODOP.GET_PRINTER_NAME(i))
  }, 1000)
  const selectCh = (val: string) => {
    LODOP.SET_PRINTER_INDEX(val)
  }
  const print = async (sizeType: number, url: string) => {
    if (sizeType !== 3)
      LODOP.SET_PRINT_PAGESIZE(1, printSize[sizeType - 1].width, printSize[sizeType - 1].height)
    else LODOP.SET_PRINT_PAGESIZE(1, 0, 0, 'A4')

    LODOP.ADD_PRINT_PDF(0, 0, '100%', '100%', url)
    LODOP.PRINT()
  }
  return {
    priterList,
    print,
    selectCh,
  }
}
