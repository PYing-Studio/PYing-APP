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
  const url = baseUrl + '/api' + fakeUrl

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
    return ctx.$http[operation](url, form, {emulateJSON: true})
      .then(handleResponse)
  }
}

const User = {
  login (ctx, user) {
    return CRUD(ctx, 'post', '/user/login', user)
  },

  logout (ctx) {
    return CRUD(ctx, 'get', `/user/logout`)
  },

  register (ctx, user) {
    return CRUD(ctx, 'post', '/user/register', user)
  }
}

const Movie = {
  fetch (ctx) {
    return CRUD(ctx, 'get', '/movie/?offset=0&limit=1000')
  },

  fetchOne (ctx, id) {
    return CRUD(ctx, 'get', `/movie/${id}`)
  },

  fetchCinema (ctx) {
    return CRUD(ctx, 'get', '/cinema?city=广州&area=')
  }
}

const Order = {
  fetch (ctx) {
    return CRUD(ctx, 'get', '/order')
  },

  create (ctx, order) {
    return CRUD(ctx, 'post', '/order', order)
  },

  remove (ctx, id) {
    return CRUD(ctx, 'delete', `/order/${id}`)
  },

  fetchOne (ctx, id) {
    return CRUD(ctx, 'get', `/order/${id}`)
  },

  pay (ctx, id) {
    return CRUD(ctx, 'put', `/order/${id}/pay`)
  }
}

const Yueyin = {
  fetchAll (ctx) {
    return CRUD(ctx, 'get', '/yueyin')
  },

  create (ctx, orderId) {
    return CRUD(ctx, 'post', '/yueyin', { order_id: orderId})
  },

  attend (ctx, yid) {
    return CRUD(ctx, 'post', `/yueyin/${yid}/enter`)
  },

  leave (ctx, yid) {
    return CRUD(ctx, 'delete', `/yueyin/${yid}/enter`)
  },

  fetch (ctx) {
    return CRUD(ctx, 'get', '/yueyin/user')
  },

  fetchOne (ctx, id) {
    return CRUD(ctx, 'get', `/yueyin/${id}`)
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
    console.log(err)
    bus.$emit('notify', err.statusText)
  }
}

export {
  User,
  Order,
  Yueyin,
  Movie,
  HTTPErrHandler
}
