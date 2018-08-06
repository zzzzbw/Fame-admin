'use strict'
let HOST = process.argv.splice(2)[0] || 'prod'
let ENV = HOST === 'prod' ? '"production"' : '"development"'
module.exports = {
  NODE_ENV: ENV
}

