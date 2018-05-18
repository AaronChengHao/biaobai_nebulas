import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BiaoBai from '@/components/BiaoBai';


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //     path: '/',
    //     name: 'HelloWorld',
    //     component: HelloWorld
    // / },
    {
        path:'/',
        name:'biaoBai',
        component:BiaoBai
    }
  ]
})
