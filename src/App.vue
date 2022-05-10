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
      :NovoComponente="NovoComponente"
    </novoComponente>
    <v-main>
    <router-view>
    </router-view>

    </v-main>
  </v-app>
</template>

<script>
import NovoComponente from './components/NovoComponente';


export default {
  name: 'App',
  
  components: {
    NovoComponente
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
