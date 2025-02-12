import axios from 'axios'
import { GetOssPolicy } from '@/api/devops/tongyong'
import proxyConfig from '@/config/proxy.config'

/** osss上传 */
export async function ossUpload(file: File): Promise<{ fileUrl: string }> {
  return new Promise((resolve, reject) => {
    GetOssPolicy()
      .then(({ data }: any) => {
        const key = `${data.dir}/${file.lastModified}-${file.name}`
        const formdata = new FormData()
        formdata.append('key', key)
        formdata.append('OSSAccessKeyId', data.accessid)
        formdata.append('policy', data.policy)
        formdata.append('signature', data.signature)
        formdata.append('success_action_status', '200')
        formdata.append('file', file)

        // const fileUrl = `${data.host}/${key}`
        const fileUrl = `${proxyConfig.ossresoure}/ossresoure/${key}`

        axios
          .post(data.host, formdata)
          .then(() => {
            resolve({ fileUrl })
          })
          .catch((err) => {
            reject(err)
          })
      })
      .catch((err) => {
        reject(err)
      })
  })
}
