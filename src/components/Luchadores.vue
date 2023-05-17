<template>
 <v-app>
  <v-container>
  <v-layout row wrap>
    <v-flex xs4 v-for="personaje in personajes" :key="personaje._id">
      <v-card class="mx-auto white--text" max-width="400" color="#272727">
      <v-flex class="img-area-fights" >
        <v-img
            class="personaje"
            v-bind:src="`https://www.smashbros.com/assets_v2/img/fighter/${personaje.nombre}/main${personaje.aspecto}.png`"
            height="450px">
        </v-img>
        </v-flex>
        <v-card-title>
          <div class="headline">
              <v-btn flat v-bind:to="`/personajes/${personaje._id}`">
              {{ personaje.nombre }}
              </v-btn>
          </div>
        </v-card-title>
        <v-card-subtitle class="white--text">
          <span class="grey-text">{{ personaje.franquicia }} &middot;
            {{ personaje.aspecto }}</span>
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            color="red lighten-2" text>
            DESCRIPCIÓN
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ personaje.descripcion }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <br>
    </v-flex>
  </v-layout>
  </v-container>
 </v-app>
</template>
<script>
// import axios from 'axios';

export default {
  data: () => ({
    show: false,
  }),
  nombre: 'Personajes',
  computed: {
    personajes() {
      return this.$store.getters.obtenerPersonajes;
    },
  },
  mounted() {
    // this.obtenerPeliculas();
    this.$store.dispatch('obtenerPersonajes');
  },

};
</script>