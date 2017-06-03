import bus from './bus'

const baseUrl = ''

/**
 * 发送HTTP请求
 * @param ctx
 * @param operation String
 * @param fakeUrl String
 * @param form object
 * @constructor
 */
const CRUD = (ctx, operation, fakeUrl, form) => {
  const url = baseUrl + '/api/' + fakeUrl

  const handleResponse = res => {
    if (res.body && res.body.status === '0') {
      return Promise.reject(res)
    }
    return Promise.resolve(res)
  }

  if (['get', 'delete'].indexOf(operation) !== -1) {
    return ctx.$http[operation](url)
      .then(handleResponse)
  } else if (['put', 'post'].indexOf(operation) !== -1) {
    return ctx.$http[operation](url, form)
      .then(handleResponse)
  }
}

const User = {
  login (ctx, user) {
    return CRUD(ctx, 'post', 'user/login', user)
  },

  logout (ctx) {
    return CRUD(ctx, 'get', `user/logout`)
  },

  register (ctx, user) {
    return CRUD(ctx, 'post', 'user/register', user)
  }
}

const HTTPErrHandler = (ctx, err) => {
  if (err.status === 401) {
    bus.$emit('notify', '会话已过期，请重新登录')
    // 1秒后跳转到登录页面
    setTimeout(() => {
      ctx.$router.push({name: 'login'})
    }, 1000)
  } else if (err.status === 200) {
    bus.$emit('notify', err.body.msg)
  } else {
    bus.$emit('notify', '网络错误')
  }
}

export {
  User,
  HTTPErrHandler
}