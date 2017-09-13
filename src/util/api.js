import { get, post, del } from './http'
import util from './fame'

export default {
  login (user) {
    return post('/admin/login', user)
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
  getAllCategoriesAuth () {
    let params = {
      type: util.STATIC.META_CATEGORY
    }
    return get('/admin/meta', params)
  },
  getAllTagsAuth () {
    let params = {
      type: util.STATIC.META_TAG
    }
    return get('/admin/meta', params)
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
  }
}
