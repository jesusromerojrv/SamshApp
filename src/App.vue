<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" color="#000000" app>
      <v-list dense>
        <router-link v-bind:to="{ name:'Inicio' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon color="#F10000">
                home
              </v-icon>
            </v-list-item-action>
            <v-list-item-content class="white--text">Inicio</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name:'Contacto' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon color="#F10000">
                contact_mail
              </v-icon>
            </v-list-item-action>
            <v-list-item-content class="white--text">Contacto</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name:'Luchadores' }" v-if="!current_user" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon color="#F10000">
                shield
              </v-icon>
            </v-list-item-action>
            <v-list-item-content class="white--text" v-if="!current_user">
              Personajes
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name:'Objetos' }" v-if="!current_user" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon color="#F10000">
                construction
              </v-icon>
            </v-list-item-action>
            <v-list-item-content class="white--text" v-if="!current_user">
              Objetos
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <v-img
            v-bind:src="`https://w0.peakpx.com/wallpaper/148/932/HD-wallpaper-smash-bros-favorites-you.jpg`">
        </v-img>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#000000" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Inicio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items class="hidden-sm-and-down">
        <v-btn flat id="link_agregar_personaje"
        v-bind:to="{ name: 'AgregarPersonaje'}" color="#F10000" class="botones"
        v-if="!current_user">
          Agregar Personaje
        </v-btn>
        <v-btn id="email_usuario" color="#ffffff" class="dorado" v-if="!current_user">
          {{ usuarioEmail }}
        </v-btn>
        <v-btn flat v-bind:to="{ name: 'Registro' }" color="#F10000" class="botones"
        v-if="current_user" id="boton_registro">
          Registro
        </v-btn>
        <v-btn flat v-bind:to="{ name: 'Login' }" color="#F10000"
        v-if="current_user" id="boton_login" class="botones">
          Login
        </v-btn>
        <v-btn flat id="boton_logout" color="#00D814"
        v-if="!current_user" @click="logout" class="botones">
          Salir
        </v-btn>
      </v-app-bar-items>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    </v-content>
    <v-footer color="#4B4B4B" app>
      <span class="white--text">&copy; 2022</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';
import './assets/stylesheets/main.css';
import bus from './bus';

export default {
  data: () => ({
    drawer: null,
    current_user: false,
    usuarioEmail: window.localStorage.getItem('email'),
  }),
  props: {
    source: String,
  },
  mounted() {
    this.obtenerUsuario();
    this.escucharEventos();
  },
  methods: {
    escucharEventos() {
      bus.$on('refreshUser', () => {
        this.obtenerUsuario();
      });
    },
    async obtenerUsuario() {
      return axios({
        method: 'get',
        url: '/api/current_user',
      })
        .then((respuesta) => {
          // this.current_user = respuesta.data.current_user;
          this.current_user = true;
        })
        .catch(() => {
        });
    },
    logout() {
      return axios({
        method: 'get',
        url: '/api/logout',
      })
        .then(() => {
          bus.$emit('refreshUser');
          this.current_user = false;
          this.$router.push({ name: 'Inicio' });
        })
        .catch(() => {
        });
    },
  },
};
</script>
