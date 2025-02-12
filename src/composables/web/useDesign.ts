export function useDesign(scope: string) {
  const values = {
    prefixCls: 'sjzy',
  }

  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls,
  }
}
