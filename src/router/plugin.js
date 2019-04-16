export default [
  {
    path: '/plugin',
    name: 'plugin',
    redirect: '/plugin/bankCard',
    component: ()=> import ('@/page/plugin/index'),
    children: [{
      path: 'bankCard',
      name: 'bankCard',
      component: ()=> import ('@/page/plugin/bankCard')
    },{
      path: 'carNumber',
      name: 'carNumber',
      component: ()=> import ('@/page/plugin/carNumber')
    },{
      path: 'ossImg',
      name: 'ossImg',
      component: ()=> import ('@/page/plugin/ossImg')
    },]
  },
]