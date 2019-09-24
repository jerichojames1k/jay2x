//import Auth from '../services/auth'
let  beforeEnter =(to,from,next)=>{
    //Auth.currentPath=to.path
    let userID=parseInt(localStorage.getItem(account_id))
    let token=localStorage.getItem('usertoken')
    next()
}
var devRoutes=[]
let app = require('./app.js')
devRoutes=devRoutes.concat(app.default.routes)
for(let x=0;x<devRoutes.length;x++){
    devRoutes[x]['beforeEnter']=beforeEnter
}
let routes=[
    {
        path: '/register',
        name: 'home',
        component: resolve => require(['modules/basic/Register.vue'], resolve),
        beforeEnter: beforeEnter
    }
]
routes =routes.concat(devRoutes)
export default{
    routes:routes
}