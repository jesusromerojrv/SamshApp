<template>
<v-app>
<v-container grid-list-md>
  <v-layout row wrap> 
  <v-flex xs2 sm2 v-for="(item,i) in items" :key="i" class="contenedor">
    <v-card class="figure">
    <v-img class="img"
      :src="item.src"
    />
    <v-flex class="capa">
        <h3>{{item.nombre}}</h3>
    </v-flex>
    </v-card>
    <br>
  </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list29.png',
          nombre: 'Bola Smash',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list01.png',
          nombre: 'Partes del Dragoon',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list02.png',
          nombre: 'Maxi Tomate',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list03.png',
          nombre: 'Superchampiñón',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list04.png',
          nombre: 'Capucha de conejo',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list05.png',
          nombre: 'Cronómetro',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list06.png',
          nombre: 'Espada láser',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list07.png',
          nombre: 'Varita estelar',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list08.png',
          nombre: 'Martillo',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list09.png',
          nombre: 'Nintendo Scope',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list30.png',
          nombre: 'Partes de la Aurora',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list31.png',
          nombre: 'Caja explosiva',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list32.png',
          nombre: 'Saco de arena',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list33.png',
          nombre: 'Comida',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list34.png',
          nombre: 'Contenedor de corazón',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list35.png',
          nombre: 'Hada embotellada',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list36.png',
          nombre: 'Champiñón venenoso',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list37.png',
          nombre: 'Superestrella',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list38.png',
          nombre: 'Estrella remolque',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list39.png',
          nombre: 'Bloque verde',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list40.png',
          nombre: 'Curry superpicante',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list41.png',
          nombre: 'Rayo',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list42.png',
          nombre: 'Bill Bala',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list43.png',
          nombre: 'Bate de béisbol',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list44.png',
          nombre: 'Martillo dorado',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list45.png',
          nombre: 'Varita de Lip',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list46.png',
          nombre: 'Barrera de fuego',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list47.png',
          nombre: 'Maza de hierro',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list48.png',
          nombre: 'Flor de fuego',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_img01.png',
          nombre: 'Ayudante',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_img02.png',
          nombre: 'Poké ball',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_img03.png',
          nombre: 'Master Ball',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list10.png',
          nombre: 'Pistola de rayos',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list14.png',
          nombre: 'Chispino',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_img06.png',
          nombre: 'Bomber',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_img07.png',
          nombre: 'Bola Smash falsa',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_img08.png',
          nombre: 'Pistola plátano',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_img09.png',
          nombre: 'Seta andante maligna',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_img16.png',
          nombre: 'Bola mágica',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list52.png',
          nombre: 'Caparazón verde',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list61.png',
          nombre: 'Balón',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list62.png',
          nombre: 'Bombuchu',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list63.png',
          nombre: 'Bloque POW',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list64.png',
          nombre: 'Bumerán',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list65.png',
          nombre: 'Ojo asesino',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list66.png',
          nombre: 'Retroescudo',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list67.png',
          nombre: 'Mochila propulsora',
        },
        {
          src: 'https://www.smashbros.com/assets_v2/img/item/item_list68.png',
          nombre: 'Bandera especial',
        },
      ],
    };
  },
};
</script>