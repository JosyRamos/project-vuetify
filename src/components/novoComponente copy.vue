
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Adicionar Cadastro
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Novo Cadastro</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nome Completo*"
                  v-model="nome"
                  required
                ></v-text-field>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Telefone*"
                    v-model="telefone"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="CPF*"
                    v-model="cpf"
                    required
                  ></v-text-field>
                </v-col>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Data de Nascimento*"
                  v-model="nascimento"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>

                <v-text-field
                  label="Endereço*"
                  v-model="endereco"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"> </v-col>
            </v-row>
          </v-container>
          <small>*Campo Obrigatório</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            v-model="fechar"
            v-resize="fechar()"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
          <v-btn depressed color="primary" v-resize="adicionar()" @click="dialog= false"> Adicionar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Codigo</th>
            <th class="text-left">Nome</th>
            <th class="text-left">Endereço</th>
            <td class="text-left">Telefone</td>
            <td class="text-left">CPF</td>
            <td class="text-left">Data de Nascimento</td>
          </tr>
        </thead>
        <tbody>
          <td v-for="(arrayForm, index) in arrayForms" v-bind:key="index">
            <tr>{{ arrayForm.codigo }}</tr>
            <tr>{{ arrayForm.nome }}</tr>
            <tr>{{ arrayForm.endereco }}</tr>
            <tr>{{ arrayForm.telefone }}</tr>
            <tr>{{ arrayForm.cpf }}</tr>
            <tr>{{ arrayForm.nascimento }}</tr>
          </td>
        </tbody>
      </template>
    </v-simple-table>
  </v-row>
</template>

<script>
export default {
  name: "novoComponente",

  data() {
    return {
      dialog: false,
     
      arrayForms: [],
      nome: "",
      endereco: "",
      telefone: "",
      cpf: "",
      nascimento: "",
      codigo: "",
      index:'',
      botao:''
    
    }
  },
  methods: {
    adicionar(){
  if(this.dialog==false){
    this.arrayForms.push({
      
    })
  }
    
   
     
    },
    
    fechar() {
     
      
    },
  },
};
</script>