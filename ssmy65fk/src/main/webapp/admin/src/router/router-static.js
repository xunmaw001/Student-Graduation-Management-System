import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xueshengtuiyou from '@/views/modules/xueshengtuiyou/list'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import jiaoshiguochengwendang from '@/views/modules/jiaoshiguochengwendang/list'
    import shishengshuangxuan from '@/views/modules/shishengshuangxuan/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import kaitidabian from '@/views/modules/kaitidabian/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import biyelunwen from '@/views/modules/biyelunwen/list'
    import systemintro from '@/views/modules/systemintro/list'
    import xueshengguochengwendang from '@/views/modules/xueshengguochengwendang/list'
    import yuanxiao from '@/views/modules/yuanxiao/list'
    import dabianpingshen from '@/views/modules/dabianpingshen/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xueshengtuiyou',
        name: '学生推优',
        component: xueshengtuiyou
      }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/jiaoshiguochengwendang',
        name: '教师过程文档',
        component: jiaoshiguochengwendang
      }
      ,{
	path: '/shishengshuangxuan',
        name: '师生双选',
        component: shishengshuangxuan
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/kaitidabian',
        name: '开题答辩',
        component: kaitidabian
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/biyelunwen',
        name: '毕业论文',
        component: biyelunwen
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/xueshengguochengwendang',
        name: '学生过程文档',
        component: xueshengguochengwendang
      }
      ,{
	path: '/yuanxiao',
        name: '院校',
        component: yuanxiao
      }
      ,{
	path: '/dabianpingshen',
        name: '答辩评审',
        component: dabianpingshen
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
