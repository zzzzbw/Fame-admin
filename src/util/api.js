import { get, post, del } from './http'
import util from './fame'

export default {
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
      page: page,
      limit: 5
    }
    return get('/article', params)
  },
  getArticlesAuth (page) {
    let params = {
      page: page
    }
    return get('/admin/article', params)
  },
  getArticle (id) {
    return get('/article/' + id)
  },
  getArticleAuth (id) {
    return get('/admin/article/' + id)
  },
  saveArticleAuth (article) {
    return post('/admin/article', article)
  },
  deleteArticleAuth (id) {
    return del('/admin/article/' + id)
  },
  getCategoriesWithArticle () {
    return get('/category')
  },
  getAllCategoriesAuth () {
    let params = {
      type: util.STATIC.META_CATEGORY
    }
    return get('/admin/meta', params)
  },
  getTagsWithArticle () {
    return get('/tag')
  },
  getAllTagsAuth () {
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
  getPage (title) {
    return get('/page/' + title)
  },
  getPagesAuth (page) {
    let params = {
      page: page
    }
    return get('/admin/page', params)
  },
  getPageAuth (id) {
    return get('/admin/page/' + id)
  },
  savePageAuth (page) {
    return post('/admin/page', page)
  },
  deletePageAuth (id) {
    return del('/admin/page/' + id)
  },
  getArchives (page) {
    let params = {
      page: page
    }
    return get('/archive', params)
  }
}
