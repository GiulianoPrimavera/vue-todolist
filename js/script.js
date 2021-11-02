Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function(){
    const vueApp = new Vue ({
        el: "#root",
        data:{
            tasksList: [
                "task uno",
                "task due",
                "task tre"
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