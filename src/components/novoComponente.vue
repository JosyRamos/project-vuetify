<template>
<v-form @submit.prevent="submit()">
  <v-row justify="center">

    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div class="card-header text-center">
          <v-btn color="success" dark v-bind="attrs" v-on="on" justify="center">
            Adicionar Cadastro
          </v-btn>
        </div>
      </template>

      <v-card>
        <v-spacer></v-spacer>

        <v-card-title>
          <v-toolbar color="primary" max-width="600">
            <h2 class="text-h5">{{ h2 }}</h2>
          </v-toolbar>
        </v-card-title>
        <v-card-text v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field prepend-icon="mdi-account" label="Nome Completo*" v-model="nome" @change="$v.nome.$touch()"></v-text-field>
                <span v-if="$v.nome.$error">nome é obrigatorio.</span>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field prepend-icon="mdi-phone" label="Telefone*" v-mask="'(65)#####-####'" type="text" v-model="telefone" @change="$v.telefone.$touch()"></v-text-field>
                  <span v-if="$v.telefone.$error">telefone é obrigatorio.</span>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field type="text" v-mask="'###.###.###-##'" label="CPF*" v-model="cpf" @change="$v.cpf.$touch()"></v-text-field>
                  <span v-if="$v.cpf.$error">CPF é obrigatorio.</span>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field prepend-icon="mdi-map-marker" label="Endereço*" v-model="endereco" @change="$v.endereco.$touch()"></v-text-field>
                  <span v-if="$v.endereco.$error">Endereço é obrigatorio.</span>
                </v-col>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field prepend-icon="mdi-calendar" label="Data de nascimento*" v-mask="'##/##/####'" type="text" v-model="nascimento" @change="$v.nascimento.$touch()"></v-text-field>
                <span v-if="$v.nascimento.$error">Data de nascimento é obrigatorio.</span>
              </v-col>
              <v-col cols="12" sm="6"> </v-col>
            </v-row>
          </v-container>
          <small>*Campo Obrigatório</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-grey" @click="cancelar()">Cancelar </v-btn>
          <div>

            <v-btn v-if="this.h2 != 'Editar Cadastro'" color="success" @click.prevent="adicionar()">
              {{ botao }}
            </v-btn>
          </div>
          <div v-if="this.h2 == 'Editar Cadastro'">
            <v-btn color="warning" @click.prevent="salvar(indice)">
              Salvar
            </v-btn>
          </div>
        </v-card-actions>

      </v-card>

    </v-dialog>

    <v-simple-table cols="10" sm="10">
      <template v-slot:default>

        <thead class="formulario">
          <tr>
            <th class="d-flex align-center">Codigo</th>
            <th class="text-left">Nome</th>
            <th class="text-left">Endereço</th>
            <th class="text-left">Telefone</th>
            <th class="text-left">CPF</th>
            <th class="text-left">Data de Nascimento</th>
            <th class="text-left">Opções</th>
          </tr>
        </thead>

        <tbody cols="12" sm="12">
          <tr v-for="(arrayForm, index) in arrayForms" v-bind:key="index">
            <td>{{ arrayForm.codigo }}</td>
            <td>{{ arrayForm.nome }}</td>
            <td>{{ arrayForm.endereco }}</td>
            <td>{{ arrayForm.telefone }}</td>
            <td>{{ arrayForm.cpf }}</td>
            <td>{{ arrayForm.nascimento }}</td>
            <td>
              <div>
                <v-btn class="mx-2" @click="editar(index)" v-model="editar" x-small color="cyan">
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </div>
            </td>
            <td>
              <v-btn class="mx-2" @click="excluir(index)" x-small color="red">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-row>
</v-form>
</template>

<script>
import {
  required,
  minLength
  
} from "vuelidate/lib/validators";
// import firebaseCad from '@/service/CadastroFirebase.vue';
 import {db} from '@/firebase.js'

export default {
  name: "novoComponente",

  data() {
    return {
      dialog: false,
      valid: false,
      arrayForms: [],
        nome: "",
        endereco: "",
        telefone: "",
        cpf: "",
        nascimento: "",
      codigo: "",
      botao: "Adicionar",
      indice: "",
      h2: "Novo Cadastro",
      valores: false,
    };
  },
  validations: {
    nome: {
      required,
      minLength: minLength(4),
    },
    endereco: {
      required,
      minLength: minLength(5),
    },
    nascimento: {
      required,
      minLength: minLength(4),
    },
    cpf: {
      required,
      minLength: minLength(9),
    },
    telefone: {
      required,
      minLength: minLength(7),
    },
  },
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
    },
    adicionar() {
      this.arrayForms.push({
        codigo: this.arrayForms.length,
        nome: this.nome,
        endereco: this.endereco,
        telefone: this.telefone,
        cpf: this.cpf,
        nascimento: this.nascimento,
      });
       this.firebaseCad();
      this.dialog = false;
      this.renderizar();
    },

    cancelar() {
      this.renderizar();
      this.dialog = false;
      this.h2 = "Novo Cadastro";
    },

    renderizar() {
      (this.codigo = ""),
      (this.nome = ""),
      (this.endereco = ""),
      (this.telefone = ""),
      (this.cpf = ""),
      (this.nascimento = "");
    },
    editar(index) {
      this.h2 = "Editar Cadastro";
      this.indice = index;
      this.dialog = true;

      this.nome = this.arrayForms[index].nome;
      this.endereco = this.arrayForms[index].endereco;
      this.telefone = this.arrayForms[index].telefone;
      this.cpf = this.arrayForms[index].cpf;
      this.nascimento = this.arrayForms[index].nascimento;
    },
    excluir(index) {
      this.arrayForms.splice(index, 1);
    },
    salvar() {
      if (!this.$v.$error) {
        (this.arrayForms[this.indice].nome = this.nome),
        (this.arrayForms[this.indice].endereco = this.endereco),
        (this.arrayForms[this.indice].telefone = this.telefone),
        (this.arrayForms[this.indice].cpf = this.cpf),
        (this.arrayForms[this.indice].nascimento = this.nascimento);
        this.renderizar();
        this.dialog = false;
        this.h2 = "Novo Cadastro";
      } else {
        this.$v.$touch();
      }
    },
  },
  mounted() {

  }
};
</script>

<style>
span {
  color: red;
}

valores {
  display: none;
  color: aliceblue;
}
</style>
