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
                for (let i = 0; i < this.tasksList.length; i++) {
                    if (this.newTask === this.tasksList[i]) {
                        return
                    }
                }
                if (this.newTask.trim() === "") {
                    return
                }

                this.tasksList.push({ text: this.newTask.trim(), checkBox: false });
                this.newTask = "";

            },
            onClickRemove(indice) {

                /* questo if() valuta cinque possibili casi 
                    -l'elemento da eliminare è l'ultimo della lista --> lo elimino

                    -l'elemento da eliminare è checked === true, il secondo è false --> setto checked a false dell'elemento che devo eliminare ed elimino l'elemento 
                    -entrambi elementi sono checked === false --> elimino l'elemento
                        -(per questi due casi uso lo stesso codice dato che non interferisce con gli altri)
                    
                    -l'elemento da eliminare è checked === false, il secondo è true --> setto il checked a true dell'elemento da eliminare e a false dell'elemento che viene dopo di lui, poi elimino l'elemento
                    - entrambi gli elementi sono checked === true --> setto il checked a false dell'elemento che viene dopo di lui ed elimino l'elemento
                                */

                //separo questo caso dagli altri e fermo la funzione così che la console non da errore nel leggere "checked"
                if(indice === this.tasksList.length - 1){
                    this.tasksList.splice(indice, 1);  
                    return
                }
                if (this.$refs.input[indice].checked === true && this.$refs.input[indice + 1].checked === false ||
                    this.$refs.input[indice].checked === false && this.$refs.input[indice + 1].checked === false) {

                    this.$refs.input[indice].checked = false;
                    this.tasksList.splice(indice, 1);
                }
                if (this.$refs.input[indice].checked === false && this.$refs.input[indice + 1].checked === true) {
                    this.$refs.input[indice].checked = true;
                    this.$refs.input[indice + 1].checked = false;
                    this.tasksList.splice(indice, 1);
                }
                if (this.$refs.input[indice].checked === true && this.$refs.input[indice + 1].checked === true) {
                    this.$refs.input[indice + 1].checked = false;
                    this.tasksList.splice(indice, 1);
                }
            },
            onClickCheckBox(indice) {
                //questo if funge ta toggle per rimuovere o aggiungere la classe a seconda se è già presente o meno
                if (this.tasksList[indice].checkBox === false) {
                    //la key "checkBox" per gli oggetti mi serve ad aggiungere la classe line_throug
                    this.tasksList[indice].checkBox = true;
                    //con l'attributo $refs riesco a leggere l'elementi html e a cambiare il valore di checked manualmente
                    this.$refs.input[indice].checked = true;
                    console.log(`con la ref, checked è ${this.$refs.input[indice].checked}`);
                    console.log(`la checbox del task numero ${indice} è`, this.tasksList[indice].checkBox);
                } else {
                    //la key "checkBox" per gli oggetti mi serve ad aggiungere la classe line_throug
                    this.tasksList[indice].checkBox = false;
                    //con l'attributo $refs riesco a leggere l'elementi html e a cambiare il valore di checked manualmente
                    this.$refs.input[indice].checked = false;
                    console.log(`con la ref, checked è ${this.$refs.input[indice].checked}`);
                    console.log(`la checbox del task numero ${indice} è`, this.tasksList[indice].checkBox);
                }
            }
        }
    })
})