import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    personajes: [],
  },
  getters: {
    obtenerPersonajes: state => state.personajes,
  },
  mutations: {
    AGREGAR_PERSONAJE: (state, payload) => {
      state.personajes.unshift(payload);
    },
    PERSONAJES: (state, payload) => {
      state.personajes = payload;
    },
  },
  actions: {
    agregarPersonaje: (context, payload) => {
      return axios({
        method: 'post',
        data: payload,
        url: '/personajes',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          context.commit('AGREGAR_PERSONAJE', respuesta.data.personajes);
          this.$swal(
            '¡Excelente!',
            'Personaje satisfactoriamente agregado!',
            'Success',
          );
        })
        .catch(() => {
          this.$swal(
            'Error',
            'No se pudo agregar el personaje',
            'error',
          );
        });
    },
    obtenerPersonajes: (context, payload) => {
      axios({
        method: 'get',
        url: '/personajes',
      })
        .then((respuesta) => {
          context.commit('PERSONAJES', respuesta.data.personajes);
        })
        .catch(() => {
        });
    },
  },
});
