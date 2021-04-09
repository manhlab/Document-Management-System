import Vue from 'vue'
import Router from 'vue-router'
import store from '../state/store'

// Containers
const TheContainer = () => import('../containers/TheContainer')

// Views
const Dashboard = () => import('../views/Dashboard')

const Colors = () => import('../views/theme/Colors')
const Typography = () => import('../views/theme/Typography')
const CKEditor = () => import('../views/theme/CKEditor')

const Charts = () => import('../views/charts/Charts')
const Widgets = () => import('../views/widgets/Widgets')

// Views - Components
const Cards = () => import('../views/base/Cards')
const Forms = () => import('../views/base/Forms')
const Switches = () => import('../views/base/Switches')
const Tables = () => import('../views/base/Tables')
const Tabs = () => import('../views/base/Tabs')
const Breadcrumbs = () => import('../views/base/Breadcrumbs')
const Carousels = () => import('../views/base/Carousels')
const Collapses = () => import('../views/base/Collapses')
const Jumbotrons = () => import('../views/base/Jumbotrons')
const ListGroups = () => import('../views/base/ListGroups')
const Navs = () => import('../views/base/Navs')
const Navbars = () => import('../views/base/Navbars')
const Paginations = () => import('../views/base/Paginations')
const Popovers = () => import('../views/base/Popovers')
const ProgressBars = () => import('../views/base/ProgressBars')
const Tooltips = () => import('../views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('../views/buttons/StandardButtons')
const ButtonGroups = () => import('../views/buttons/ButtonGroups')
const Dropdowns = () => import('../views/buttons/Dropdowns')
const BrandButtons = () => import('../views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('../views/icons/CoreUIIcons')
const Brands = () => import('../views/icons/Brands')
const Flags = () => import('../views/icons/Flags')

// Views - Notifications
const Alerts = () => import('../views/notifications/Alerts')
const Badges = () => import('../views/notifications/Badges')
const Modals = () => import('../views/notifications/Modals')

// Views - Pages
const Page404 = () => import('../views/pages/Page404')
const Page500 = () => import('../views/pages/Page500')
const Login = () => import('../views/pages/Login')
const Register = () => import('../views/pages/Register')

// Users
const Users = () => import('../views/users/Users')
const User = () => import('../views/users/User')
const CreateUser = () => import('../views/users/Create')
const Me = () => import('../views/users/Me')

// Documents
const Documents = () => import('../views/documents/Documents')
const Document = () => import('../views/documents/Document')
const DocumentCreate = () => import('../views/documents/Create')

// Statistic
const Statistic = () => import('../views/statistic/Statistic')

// System
const Titles = () => import('../views/system/Titles')
const Departments = () => import('../views/system/Departments')
const Signers = () => import('../views/system/Signers')
const Publishers = () => import('../views/system/Publishers')
const DocumentTypes = () => import('../views/system/DocumentTypes')
const Books = () => import('../views/system/Books')
const Groups = () => import('../views/system/Groups')
const Permissions = () => import('../views/system/Permissions')

Vue.use(Router)

const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
  // Check if auth is required on this route
  // (including nested routes).
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired)

  // If auth isn't required for the route, just continue.
  if (!authRequired) return next()

  if (store.getters['auth/loggedIn']) return next()

  // Validate the local user token...
  return store.dispatch('auth/validate').then((validUser) => {
    // Then continue if the token still represents a valid user,
    // otherwise redirect to login.
    return validUser ? next() : redirectToLogin()
  }).catch(error => {
    return redirectToLogin()
  })
  
  // eslint-disable-next-line no-unused-vars
  function redirectToLogin() {
    // Pass the original route to the login component
    next({ name: 'Login', query: { redirectFrom: routeTo.fullPath } })
  }
})

router.beforeResolve(async (routeTo, routeFrom, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              // Complete the redirect.
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }
      })
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return
  }

  // If we reach this point, continue resolving the route.
  next()
})

export default router

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Домашняя страница',
      component: TheContainer,
      meta: {
        authRequired: true
      },
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        },
        // Books
        {
          path: 'books',
          meta: {
            label: 'Документы',
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Документы',
              component: Books
            },
            {
              path: ':book',
              name: 'Детали',
              component: Documents,
              children: [
                {
                  path: 'documents',
                  name: 'Книга',
                  component: Documents,
                },
              ]
            },
          ]
        },
        // Documents
        {
          path: 'documents',
          meta: {
            label: 'Документ',
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Список',
              component: Documents
            },
            {
              path: 'create',
              name: 'Создать',
              component: DocumentCreate
            },
            {
              path: ':document',
              name: 'Деталь',
              component: Document,
            },
          ]
        },
        // Statistic
        {
          path: 'statistic',
          name: 'Статистическая',
          component: Statistic
        },

        //
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            },
            {
              path: 'ckeditor',
              name: 'CKEditor',
              component: CKEditor
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'me',
          name: 'Profile',
          meta: {
            label: 'Личный кабинет'
          },
          component: Me
        },
        {
          path: 'users',
          meta: {
            label: 'Пользователь'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Список',
              component: Users
            },
            {
              path: 'create',
              meta: {
                label: 'Создать'
              },
              name: 'Create User',
              component: CreateUser
            },
            {
              path: ':id',
              meta: {
                label: 'Деталь'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'titles',
          name: 'Должность',
          component: Titles
        },
        {
          path: 'departments',
          name: 'Подразделение',
          component: Departments
        },
        {
          path: 'signers',
          name: 'Подписал',
          component: Signers
        },
        {
          path: 'publishers',
          name: 'Место выдачи',
          component: Publishers
        },
        {
          path: 'document-types',
          name: 'Вид документа',
          component: DocumentTypes
        },
        {
          path: 'roles',
          name: 'Группа',
          component: Groups
        },
        {
          path: 'permissions',
          name: 'Разрешение',
          component: Permissions
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/coreui-icons',
          name: 'CoreUI Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'Icons library',
              component: CoreUIIcons
            },
            {
              path: 'brands',
              name: 'Brands',
              component: Brands
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          meta: {
            authRequired: false
          },
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

