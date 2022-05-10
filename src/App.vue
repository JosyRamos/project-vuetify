<template>
  <v-app>
    <v-row justify="center">
      <div class="d-flex align-center">
        <v-card>
         <v-toolbar class="font-weight-light" color="light-blue"
          light
          extended>
            
       <h1> 
         Sistema de Cadastro
       </h1>
       </v-toolbar>
        </v-card>
      </div>
       </v-row>
    <novoComponente>
      :novoComponente="novoComponente"
    </novoComponente>
    <v-main>
      <implementacoes/>
    </v-main>
  </v-app>
</template>

<script>
import implementacoes from './components/implementacoes';
import novoComponente from './components/novoComponente';


export default {
  name: 'App',
  
  components: {
    implementacoes,
    novoComponente,
  },
  mounted(){
    console.log(this.$firebase)
    
    

  }

};
</script>
<style scoped>
.h1{
  font-display: center;
  background: center;
  justify-self: center;
}

</style>
