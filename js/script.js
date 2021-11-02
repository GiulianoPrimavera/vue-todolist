Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function(){
    const vueApp = new Vue ({
        el: "#root",
        data:{
            tasksList: [
                "task uno",
                "task due",
                "task tre"
            ]
        } 
    })
})