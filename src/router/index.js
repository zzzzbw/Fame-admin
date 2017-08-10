import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/admin/Login'
import Admin from '@/components/admin/Admin'
import ArticleEdit from '@/components/admin/page/ArticleEdit'
import ArticleList from '@/components/admin/page/ArticleList'
import TagList from '@/components/admin/page/TagList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
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
        },
        {
          path: 'tag',
          component: TagList
        }
      ]

    }
  ]
})
