
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
          <v-btn
            color="blue darken-1"
            v-model="adicionar"
            text
            @click="dialog = false"
          >
            Novo
          </v-btn>
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
            <th class="text-left">Telefone</th>
            <th class="text-left">CPF</th>
            <th class="text-left">Data de Nascimento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(arrayForm, index) in arrayForms" :key="index">
            <td>{{ arrayForm.codigo }}</td>
            <td>{{ arrayForm.nome }}</td>
            <td>{{ arrayForm.endereco }}</td>
            <td>{{ arrayForm.telefone }}</td>
            <td>{{ arrayForm.cpf }}</td>
            <td>{{ arrayForm.nascimento }}</td>
          </tr>
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
      arrayForm: [],
      nome: "",
      endereco: "",
      telefone: "",
      cpf: "",
      nascimento: "",
      codigo: "",
    };
  },
  methods: {
    adicionar() {
      this.arrayForm.push({
        codigo: this.arrayForm.length,
        nome: this.nome,
        endereco: this.endereco,
        telefone: this.telefone,
        cpf: this.cpf,
        nascimento: this.nascimento,
      });
    },
    fechar() {
      console.log(this.arrayForm);
    },
  },
};
</script>