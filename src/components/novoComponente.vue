
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" justify="center">
          Adicionar Cadastro
        </v-btn>
      </template>
      <v-spacer></v-spacer>
      <v-card>
        <v-card-title>
          <span class="text-h5">Novo Cadastro</span>
        </v-card-title>
        <v-card-text v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mdi-account"
                  label="Nome Completo*"
                  v-model="nome"
                  required
                ></v-text-field>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    prepend-icon="mdi-phone"
                    label="Telefone*"
                    v-model="telefone"
                    type="text"
                    v-mask="'(65)#####-####'"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="text"
                    v-model="cpf"
                    v-mask="'###.###.###-##'"
                    label="CPF*"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    prepend-icon="mdi-map-marker"
                    label="Endereço*"
                    v-model="endereco"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  prepend-icon="mdi-calendar"
                  label="Data de nascimento*"
                  v-model="nascimento"
                  type="text"
                  v-mask="'##/##/####'"
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
          <v-btn color="blue-grey" @click="cancelar()">Cancelar </v-btn>
          <div :dark="adicionar">
            <v-btn depressed color="primary" @click="adicionar()">
              Adicionar
            </v-btn>
          </div>

          <v-btn color="warning" @click="salvar(indice)"> Salvar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-simple-table cols="10" sm="10">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Codigo</th>
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
                <v-btn
                  class="mx-2"
                  @click="editar(index)"
                  v-model="editar"
                  x-small
                  color="cyan"
                >
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
</template>

<script>
export default {
  name: "novoComponente",

  data() {
    return {
      dialog: false,
      valid: false,
      arrayForms: [],
      nome: "",
      endereco: "",
      telefone: "(65)",
      cpf: "",
      codigo: "",
      botao: "",
      indice: "",
      nascimento: "",
    };
  },
  methods: {
    adicionar() {
      this.arrayForms.push({
        codigo: this.arrayForms.length,
        nome: this.nome,
        endereco: this.endereco,
        telefone: this.telefone,
        cpf: this.cpf,
        nascimento: this.nascimento,
      });
      this.dialog = false;
      this.renderizar();
    },

    cancelar() {
      this.renderizar();
      this.dialog = false;
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
      (this.arrayForms[this.indice].nome = this.nome),
        (this.arrayForms[this.indice].endereco = this.endereco),
        (this.arrayForms[this.indice].telefone = this.telefone),
        (this.arrayForms[this.indice].cpf = this.cpf),
        (this.arrayForms[this.indice].nascimento = this.nascimento);

      this.dialog = false;
    },
  },
};
</script>