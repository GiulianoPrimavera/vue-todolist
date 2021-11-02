Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function(){
    const vueApp = new Vue ({
        el: "#root",
        data:{
            message : "hello world"
        } 
    })
})