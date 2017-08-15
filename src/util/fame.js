/**
 * 通用工具类
 */

export default {
  randomColorType () {
    let colorType = [
      '', 'gray', 'primary', 'success', 'warning', 'danger'
    ]
    return colorType[Math.floor(Math.random() * colorType.length)]
  }
}
