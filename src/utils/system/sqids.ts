import Sqids from 'sqids'

const sqids = new Sqids({
  minLength: 5,
})

// 短码封装
export function encode(val: number) {
  return sqids.encode([val])
}

// 短码解析
export function decode(val: string) {
  return sqids.decode(val)
}
