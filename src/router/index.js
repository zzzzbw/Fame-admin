import Vue from 'vue'
import Router from 'vue-router'
import Frontend from '@/components/frontend/Frontend'
import FArticleList from '@/components/frontend/page/Articles'
import FArticleContent from '@/components/frontend/page/Article'
import FTagList from '@/components/frontend/page/Tags'
import FArchiveList from '@/components/frontend/page/Archives'
// import FNotFound from '@/components/frontend/page/NotFound'

import Login from '@/components/admin/Login'
import Admin from '@/components/admin/Admin'
import AArticleEdit from '@/components/admin/page/ArticleEdit'
import AArticleList from '@/components/admin/page/ArticleList'
import ATagList from '@/components/admin/page/TagList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Frontend,
      children: [
        {
          path: 'articles',
          component: FArticleList
        },
        {
          path: 'articles/:id',
          component: FArticleContent
        },
        {
          path: 'tags',
          component: FTagList
        },
        {
          path: 'archives',
          component: FArchiveList
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
