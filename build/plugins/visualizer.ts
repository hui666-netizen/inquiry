import { visualizer } from 'rollup-plugin-visualizer'

export default visualizer({
  filename: '../..//node_modules/.cache/visualizer/stats.html',
  open: true,
  gzipSize: true,
  brotliSize: true,
})
