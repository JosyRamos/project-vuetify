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
