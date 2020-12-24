import SvgIcon from '@/components/svgIcon/index.vue'// svg component

const req = require.context('../assets/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map((key) => {
  return requireContext(key);
})
requireAll(req)

export default SvgIcon