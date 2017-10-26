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

const AArticleEdit = (resolve) => {
  import('@/components/admin/page/Article').then((module) => {
    resolve(module)
  })
}

const ATagList = (resolve) => {
  import('@/components/admin/page/Tags').then((module) => {
    resolve(module)
  })
}

const AArticleList = (resolve) => {
  import('@/components/admin/page/Articles').then((module) => {
    resolve(module)
  })
}

const ADashboard = (resolve) => {
  import('@/components/admin/page/Dashboard').then((module) => {
    resolve(module)
  })
}

const ASetting = (resolve) => {
  import('@/components/admin/page/Setting').then((module) => {
    resolve(module)
  })
}

const APageList = (resolve) => {
  import('@/components/admin/page/Pages').then((module) => {
    resolve(module)
  })
}

const APageEdit = (resolve) => {
  import('@/components/admin/page/Page').then((module) => {
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
