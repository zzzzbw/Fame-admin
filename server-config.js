const isProd = process.env.NODE_ENV === 'production'

exports.isProd = isProd

exports.api = isProd ? 'http://zzzzbw.cn/' : 'http://127.0.0.1:9090/'
