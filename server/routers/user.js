const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'sheldon' && user.password === '123123') {
    // 设置session，使用中间件koa-session
    ctx.session.user = {
      username: 'sheldon'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'sheldon'
      }
    }
  } else {
    ctx.stauts = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter