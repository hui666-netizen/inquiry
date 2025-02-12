const fs = {
  getFsAppConfig: (type: boolean) => {
    return {
      fsAppid: !type ? 'cli_a4ef33aab971d00b' : 'cli_a4eb53de76fed00e',
      fsAppSecret: !type ? 'VW9QjTxNqliSPXwIyVJ6hh1PEZVanEjy' : 'NGTwez6ZJT4YMoPr3PDRtdrkILC0BBoh',
    }
  },
}
export default fs
