import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio';
import Contacto from '@/components/Contacto';
import AgregarPersonaje from '@/components/AgregarPersonaje';
import Personaje from '@/components/Personaje';
import Registro from '@/components/Registro';
import Login from '@/components/Login';
import Luchadores from '@/components/Luchadores';
import Objetos from '@/components/Objetos';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto,
    },
    {
      path: '/personajes/agregar',
      name: 'AgregarPersonaje',
      component: AgregarPersonaje,
    },
    {
      path: '/personajes/:id',
      name: 'Personaje',
      component: Personaje,
    },
    {
      path: '/usuarios/registro',
      name: 'Registro',
      component: Registro,
    },
    {
      path: '/usuarios/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/usuarios/luchadores',
      name: 'Luchadores',
      component: Luchadores,
    },
    {
      path: '/usuarios/objetos',
      name: 'Objetos',
      component: Objetos,
    },
  ],
});
