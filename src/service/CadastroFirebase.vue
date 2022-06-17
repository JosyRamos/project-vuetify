 <script>
 import {db} from '@/firebase.js'
 export default {
     name: "CadastroFirebase",
   
 methods: {
    async firebaseCad(){
    db.collection('cadastros/').add({
        nome: this.nome, 
        nascimento: this.nascimento, 
        endereco: this.endereco, 
        cpf: this.cpf,
         telefone: this.telefone
      }).then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
    }
  }
 }
 </script>