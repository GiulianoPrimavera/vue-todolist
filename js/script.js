Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function(){
    const vueApp = new Vue ({
        el: "#root",
        data:{
            tasksList: [
    
            ],
            newTask: ""
        },
        methods:{
            onClickAdd(){
                this.tasksList.push(this.newTask);
                this.newTask= ""
            },
            onClickRemove(indice){
                this.tasksList.splice(indice, 1)
            }
        } 
    })
})