import { get, post, del } from './http'
import util from './fame'

export default {
  login (user) {
    return post('/admin/login', user)
  },
  logout () {
    return post('/admin/logout')
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
  getArchives (page) {
    let params = {
      page: page
    }
    return get('/archive', params)
  }
}
