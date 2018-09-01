// import {open} from './base.js';
// import '../css/home.css'
// if (open) {
//     document.body.innerHTML='<h1>welcome to home</h1>'
// }else{
//     document.body.innerHTML='<h1>sorry that you are baned to visit</h1>'
// };
Vue.component('essay',{
    template:`
    <div><div class="content">this is content...</div><div class="print"><span> {{author}} </span><span> {{criticle}}   </span><span> {{time}} </span></div></div>
    `,
    data:function() {
        return{
            author:'maketuwen',
            criticle:2333,
            time:'13:32'
        }
    }
});
new Vue({
    el:'#app'
})