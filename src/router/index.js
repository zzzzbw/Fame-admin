import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Frontend from '@/components/frontend/Frontend'
import FArticleList from '@/components/frontend/page/ArticleList'
import FTagList from '@/components/frontend/page/TagList'

import Login from '@/components/admin/Login'
import Admin from '@/components/admin/Admin'
import AArticleEdit from '@/components/admin/page/ArticleEdit'
import AArticleList from '@/components/admin/page/ArticleList'
import ATagList from '@/components/admin/page/TagList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/frontend',
      name: 'Frontend',
      component: Frontend,
      children: [
        {
          path: 'article/:page',
          component: FArticleList
        },
        {
          path: 'tag/:page',
          component: FTagList
        }
      ]
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
          component: AArticleEdit
        }, {
          path: 'article/publish',
          component: AArticleEdit
        },
        {
          path: 'article/index/:page',
          component: AArticleList
        },
        {
          path: 'tag',
          component: ATagList
        }
      ]

    }
  ]
})
