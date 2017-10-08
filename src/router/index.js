import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/components/Error'

import Login from '@/components/admin/Login'
import Admin from '@/components/admin/Admin'
import AArticleEdit from '@/components/admin/page/ArticleEdit'
import AArticleList from '@/components/admin/page/ArticleList'
import ATagList from '@/components/admin/page/TagList'

Vue.use(Router)

const Index = (resolve) => {
  import('@/components/frontend/Frontend').then((module) => {
    resolve(module)
  })
}

const Home = (resolve) => {
  import('@/components/frontend/page/Articles').then((module) => {
    resolve(module)
  })
}

const Post = (resolve) => {
  import('@/components/frontend/page/Article').then((module) => {
    resolve(module)
  })
}

const Category = (resolve) => {
  import('@/components/frontend/page/Category').then((module) => {
    resolve(module)
  })
}

const Tag = (resolve) => {
  import('@/components/frontend/page/Tags').then((module) => {
    resolve(module)
  })
}

const Archive = (resolve) => {
  import('@/components/frontend/page/Archives').then((module) => {
    resolve(module)
  })
}

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/articles',
      children: [
        {
          path: 'articles',
          component: Home
        },
        {
          path: 'articles/:id',
          component: Post
        },
        {
          path: 'category',
          component: Category
        },
        {
          path: 'tags',
          component: Tag
        },
        {
          path: 'archives',
          component: Archive
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
      redirect: '/admin/article',
      children: [
        {
          path: 'article/publish/:id',
          component: AArticleEdit
        }, {
          path: 'article/publish',
          component: AArticleEdit
        },
        {
          path: 'article',
          component: AArticleList
        },
        {
          path: 'tag',
          component: ATagList
        }
      ]
    },
    {
      path: '/error/:state/:message',
      component: Error
    },
    {
      path: '*',
      component: Error
    }
  ]
})

export default router
