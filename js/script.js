Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function(){
    const vueApp = new Vue ({
        el: "#root",
        data:{
            tasksList: [
                
            ],
            newTask: "",
            checkMark: false
        },
        methods:{
            onClickAdd(){
                if(this.newTask.trim() === ""){
                    return
                }

                this.tasksList.push(this.newTask.trim());
                this.newTask= ""
            },
            onClickRemove(indice){
                this.tasksList.splice(indice, 1)
            }
        } 
    })
})