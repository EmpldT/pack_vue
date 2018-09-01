var app = new Vue({
    el:'#app',
    data:{
        name:null,
        sex:null,
        phone:null,
        password1:null,
        password2:null,
        dif:null,
        dist:[]
    },
    methods:{
        onEnter:function(){
            console.log('mouse enter')
        },
        onOut:function(){
            console.log('mouse leave')
        },
        onClick:function(){
            console.log('on click')
        },
        passBlur:function(){
            if(this.password1!=this.password2){
                this.dif=true;
            }else{
                this.dif=false;
            }
        }
    },
    computed:{
        sum:function(){
            return this.phone;
        }
    }
});
