import { createHtmlPlugin } from 'vite-plugin-html'

export default function setupVitePwa() {
  return createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        echartsscript:
          '<script src="https://ylw-common.oss-cn-shenzhen.aliyuncs.com/echarts@5.4.2.js"></script>',
        g6script:
          '<script src="https://gw.alipayobjects.com/os/lib/antv/g6/4.8.9/dist/g6.min.js"></script>',
        // '<script src="https://ylw-common.oss-cn-shenzhen.aliyuncs.com/g6@4.8.9.js"></script>',
      },
    },
  })
}
