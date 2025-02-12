export default {
  prefix: 'devops',
  namespace: '',
  url: '',
  list: {
    devops: {
      json: 'http://127.0.0.1:4523/export/openapi/5?version=3.1',
      routes: [],
    },
  },
  apifox: true,
  hook: {
    customFunctionName(data: { path: string, method: string }) {
      function toUpperFirstLetter(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1)
      }
      const path = data.path
        .split('/')
        .map((str) => {
          /**
           * 兼容错误命名如 /user/:id/:name
           * 因为是typeName，所以直接进行转换
           */
          let s = str.replace(/:/g, '')
          if (s.includes('-')) {
            s = s.replace(/(-\w)+/g, (_match: string, p1) => p1?.slice(1).toUpperCase())
          }
          return toUpperFirstLetter(s)
        })
        .join('')

      return toUpperFirstLetter(data.method) + path
    },
  },
}
