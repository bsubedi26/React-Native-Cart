export default (timer) => {
  return new Promise(resolve => setTimeout(resolve, timer))
}