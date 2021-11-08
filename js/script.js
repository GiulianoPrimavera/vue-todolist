Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
        el: "#root",
        data: {
            tasksList: [
                
            ],
            newTask: ""
        },
        methods: {
            onClickAdd() {
                for(let i = 0; i < this.tasksList.length; i++){
                    if (this.newTask === this.tasksList[i]){
                        return
                    }
                }
                if(this.newTask.trim() === ""){
                    return
                }

                this.tasksList.push({text: this.newTask.trim(), checkBox: false});
                console.log(this.tasksList);
                this.newTask = "";

            },
            onClickRemove(indice) {
                this.tasksList.splice(indice, 1);
            },
            onClickCheckBox(indice){
                if(this.tasksList[indice].checkBox === false){
                    this.tasksList[indice].checkBox = true;
                    console.log(`la checbox del task numero ${indice} è`, this.tasksList[indice].checkBox);
                }else {
                    this.tasksList[indice].checkBox = false;
                    console.log(`la checbox del task numero ${indice} è`, this.tasksList[indice].checkBox);
                }
            }
        }
    })
})