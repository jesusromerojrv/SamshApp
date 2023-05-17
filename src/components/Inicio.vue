<template>
  <v-app>
  <v-carousel hide-delimiters class ="margenTop">
    <v-carousel-item
      class="calidad"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'http://zeroplayers.com/wp-content/uploads/2018/08/Super-smash-bros-ultimate.jpg',
        },
        {
          src: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/d/d0/latest/20180818070350/Estadio_Pok%C3%A9mon_SSBU.jpg/1200px-Estadio_Pok%C3%A9mon_SSBU.jpg',
        },
        {
          src: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/a/a6/latest/20180818065031/Dream_Land_SSBU.jpg/1200px-Dream_Land_SSBU.jpg',
        },
        {
          src: 'https://www.powergamingnetwork.com/wp-content/uploads/2020/10/smash-355-1024x576.jpg',
        },
        {
          src: 'https://i.pinimg.com/564x/80/50/50/805050dd9c8f2c915e720234fcea9093.jpg',
        },
        {
          src: 'https://e.rpp-noticias.io/xlarge/2018/08/08/355235_659046.jpg',
        },
        {
          src: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/2/20/latest/20180819070446/Corneria_SSBU.jpg/1200px-Corneria_SSBU.jpg',
        },
        {
          src: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/f/fc/latest/20180818065321/Rainbow_Ride_SSBU.jpg/1200px-Rainbow_Ride_SSBU.jpg',
        },
        {
          src: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/0/0c/latest/20180818065215/Ciudad_Azafr%C3%A1n_SSBU.png/800px-Ciudad_Azafr%C3%A1n_SSBU.png',
        },
        {
          src: 'https://ssb.wiki.gallery/images/thumb/7/7c/SSBU-Skyworld.png/1200px-SSBU-Skyworld.png',
        },
        {
          src: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/a/a9/latest/20180818070754/Norfair_SSBU.jpg/1200px-Norfair_SSBU.jpg',
        },
      ],
    };
  },
};
</script>
