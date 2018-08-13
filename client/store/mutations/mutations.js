export default {
  // mutations里面的方法是不允许有第三个参数的，官方规定了第二个参数是一个对象，所有如果你需要传三个参数，那么需要把两个参数包装成一个对象传到第二个参数来
  // vue推荐对state的所有修改都在mutations里面
  updateCount(state, {num, num2}) {
    console.log(num2)
    state.count = num
  }
}
