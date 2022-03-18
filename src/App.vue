<template>
  <v-app>
    <v-row justify="center">
      <div class="d-flex align-center">
         <v-toolbar class="font-weight-light">
       <h1> 
         Sistema de Cadastro
       </h1>
       </v-toolbar>
      </div>
       </v-row>
  
    <novoComponente>
      :novoComponente="novoComponente"
    </novoComponente>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import novoComponente from './components/novoComponente';
//import NovoComponente from './components/novoComponente.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    novoComponente,
  },

};
</script>
<style scoped>
.h1{
  font-display: center;
  background: center;
  justify-self: center;
}

</style>
