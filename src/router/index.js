import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Error = (resolve) => {
  import('@/components/Error').then((module) => {
    resolve(module)
  })
}

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

const Login = (resolve) => {
  import('@/components/admin/Login').then((module) => {
    resolve(module)
  })
}

const Admin = (resolve) => {
  import('@/components/admin/Admin').then((module) => {
    resolve(module)
  })
}

const Dashboard = (resolve) => {
  import('@/components/admin/page/Dashboard').then((module) => {
    resolve(module)
  })
}

const ArticleEdit = (resolve) => {
  import('@/components/admin/page/Article').then((module) => {
    resolve(module)
  })
}

const ArticleList = (resolve) => {
  import('@/components/admin/page/Articles').then((module) => {
    resolve(module)
  })
}

const TagList = (resolve) => {
  import('@/components/admin/page/Tags').then((module) => {
    resolve(module)
  })
}

const PageList = (resolve) => {
  import('@/components/admin/page/Pages').then((module) => {
    resolve(module)
  })
}

const PageEdit = (resolve) => {
  import('@/components/admin/page/Page').then((module) => {
    resolve(module)
  })
}

const Setting = (resolve) => {
  import('@/components/admin/page/Setting').then((module) => {
    resolve(module)
  })
}

const router = new Router({
  mode: 'history',
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
          component: Dashboard
        },
        {
          path: 'article/publish/:id',
          component: ArticleEdit
        },
        {
          path: 'article/publish',
          component: ArticleEdit
        },
        {
          path: 'article',
          component: ArticleList
        },
        {
          path: 'tag',
          component: TagList
        },
        {
          path: 'page',
          component: PageList
        },
        {
          path: 'page/publish/:id',
          component: PageEdit
        },
        {
          path: 'page/publish',
          component: PageEdit
        },
        {
          path: 'setting',
          component: Setting
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
