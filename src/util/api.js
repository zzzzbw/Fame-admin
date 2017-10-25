import { get, post, del } from './http'
import util from './fame'

const front = {
  getArticles (page) {
    let params = {
      page: page,
      limit: 5
    }
    return get('/article', params)
  },
  getArticle (id) {
    return get('/article/' + id)
  },
  getCategories () {
    return get('/category')
  },
  getTags () {
    return get('/tag')
  },
  getPage (title) {
    return get('/page/' + title)
  },
  getArchives () {
    return get('/archive')
  }
}

const auth = {
  login (user) {
    return post('/admin/login', user)
  },
  logout () {
    return post('/admin/logout')
  },
  getUsername () {
    return get('/admin/username')
  },
  resetPassword (username, oldPassword, newPassword) {
    let params = {
      username: username,
      oldPassword: oldPassword,
      newPassword: newPassword
    }
    return post('/admin/reset', params)
  },
  getSitestatic () {
    return get('/admin/site/static')
  },
  saveSitestatic (title, description, keywords) {
    let params = {
      title: title,
      description: description,
      keywords: keywords
    }
    return post('/admin/site/static', params)
  },
  getArticleCount () {
    return get('/admin/article/count')
  },
  getVisitCount () {
    return get('/admin/site/visit')
  },
  getLogs (page) {
    let params = {
      page: page
    }
    return get('/admin/site/logs', params)
  },
  getArticles (page) {
    let params = {
      page: page
    }
    return get('/admin/article', params)
  },
  getArticle (id) {
    return get('/admin/article/' + id)
  },
  saveArticle (article) {
    return post('/admin/article', article)
  },
  deleteArticle (id) {
    return del('/admin/article/' + id)
  },
  getAllCategories () {
    let params = {
      type: util.STATIC.META_CATEGORY
    }
    return get('/admin/meta', params)
  },
  getAllTags () {
    let params = {
      type: util.STATIC.META_TAG
    }
    return get('/admin/meta', params)
  },
  saveCategory (name) {
    let params = {
      name: name,
      type: util.STATIC.META_CATEGORY
    }
    return post('/admin/meta', params)
  },
  saveTag (name) {
    let params = {
      name: name,
      type: util.STATIC.META_TAG
    }
    return post('/admin/meta', params)
  },
  updateCategory (id, name) {
    let params = {
      name: name,
      type: util.STATIC.META_CATEGORY
    }
    return post('/admin/meta/' + id, params)
  },
  updateTag (id, name) {
    let params = {
      name: name,
      type: util.STATIC.META_TAG
    }
    return post('/admin/meta/' + id, params)
  },
  deleteCategory (name) {
    let params = {
      name: name,
      type: util.STATIC.META_CATEGORY
    }
    return del('/admin/meta', params)
  },
  deleteTag (name) {
    let params = {
      name: name,
      type: util.STATIC.META_TAG
    }
    return del('/admin/meta', params)
  },
  getPages (page) {
    let params = {
      page: page
    }
    return get('/admin/page', params)
  },
  getPage (id) {
    return get('/admin/page/' + id)
  },
  savePage (page) {
    return post('/admin/page', page)
  },
  deletePage (id) {
    return del('/admin/page/' + id)
  }
}

export default {
  front,
  auth
}
