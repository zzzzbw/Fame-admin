import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/components/Error'

import Login from '@/components/admin/Login'
import Admin from '@/components/admin/Admin'
import AArticleEdit from '@/components/admin/page/Article'
import AArticleList from '@/components/admin/page/Articles'
import ATagList from '@/components/admin/page/Tags'
import ADashboard from '@/components/admin/page/Dashboard'
import ASetting from '@/components/admin/page/Setting'
import APageList from '@/components/admin/page/Pages'
import APageEdit from '@/components/admin/page/Page'

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

const About = (resolve) => {
  import('@/components/frontend/page/About').then((module) => {
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
      redirect: '/article',
      children: [
        {
          path: 'article',
          component: Home
        },
        {
          path: 'article/:id',
          component: Post
        },
        {
          path: 'category',
          component: Category
        },
        {
          path: 'tag',
          component: Tag
        },
        {
          path: 'archive',
          component: Archive
        },
        {
          path: 'about',
          component: About
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
      redirect: '/admin/dashboard',
      children: [
        {
          path: 'dashboard',
          component: ADashboard
        },
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
        },
        {
          path: 'page',
          component: APageList
        },
        {
          path: 'page/publish/:id',
          component: APageEdit
        },
        {
          path: 'page/publish',
          component: APageEdit
        },
        {
          path: 'setting',
          component: ASetting
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
