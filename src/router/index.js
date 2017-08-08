import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Admin from '@/components/admin/Admin'
import ArticleEdit from '@/components/admin/page/ArticleEdit'
import ArticleList from '@/components/admin/page/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'article/publish/:id',
          component: ArticleEdit
        }, {
          path: 'article/publish',
          component: ArticleEdit
        },
        {
          path: 'article/index/:page',
          component: ArticleList
        }
      ]

    }
  ]
})
