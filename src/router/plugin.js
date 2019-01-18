export default [
  {
    path: '/plugin',
    name: 'plugin',
    component: ()=> import ('@/page/plugin/index'),
    children: [{
      path: 'bankCard',
      name: 'bankCard',
      component: ()=> import ('@/page/plugin/bankCard')
    },{
      path: 'carNumber',
      name: 'carNumber',
      component: ()=> import ('@/page/plugin/carNumber')
    },]
  },
]