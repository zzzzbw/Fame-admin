import { get, post, del } from './http'
import util from './fame'

export default {
  login (user) {
    return post('/api/admin/login', user)
  },
  getArticlesAuth (page) {
    let params = {
      page: page
    }
    return get('/api/admin/article', params)
  },
  getArticleAuth (id) {
    return get('/api/admin/article/' + id)
  },
  saveArticleAuth (article) {
    return post('/api/admin/article', article)
  },
  deleteArticleAuth (id) {
    return del('/api/admin/article/' + id)
  },
  getAllCategoriesAuth () {
    let params = {
      type: util.STATIC.META_CATEGORY
    }
    return get('/api/admin/meta', params)
  },
  getAllTagsAuth () {
    let params = {
      type: util.STATIC.META_TAG
    }
    return get('/api/admin/meta', params)
  },
  deleteCategory (name) {
    let params = {
      name: name,
      type: util.STATIC.META_CATEGORY
    }
    return del('/api/admin/meta', params)
  },
  deleteTag (name) {
    let params = {
      name: name,
      type: util.STATIC.META_TAG
    }
    return del('/api/admin/meta', params)
  }
}
