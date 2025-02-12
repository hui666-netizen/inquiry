import SjzyEditor, { type TranslationArgs } from '@sjzy/editor'
import i18n from '@/i18n'
import '@sjzy/editor/dist/style.css'
import './monacoWorker.js'
import { ossUpload } from '@/utils/file'

export function setupSjzyEditor() {
  SjzyEditor.setup({
    i18n: (key: string, args?: TranslationArgs) => (i18n as any).global.t(key, args),
    uploadApi: (file) => {
      return new Promise((resolve, reject) => {
        ossUpload(file)
          .then(({ fileUrl }) => {
            resolve({
              code: '200',
              data: {
                value: fileUrl,
              },
            })
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  })
}
