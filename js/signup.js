import {open} from './base.js';
if(open) {
    document.body.innerHTML='<a href="./home.html">go to home!</a>';
}else{
    document.body.innerHTML='<h1><a href="./home.html">ERR</a></h1>'
}