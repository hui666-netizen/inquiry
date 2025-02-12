import config from './config'
import net from './net.config'
import setting from './setting.config'
import theme from './theme.config'
import fs from './fs.config'

const data = {
  ...config,
  ...setting,
  ...theme,
  ...net,
  ...fs,
}

export default data
