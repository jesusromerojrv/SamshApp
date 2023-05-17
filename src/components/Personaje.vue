<template>
  <v-app>
    <v-layout row wrap>
        <v-flex class="repro">
        <v-card class="envoltura"  color="#272727">
          <v-flex class="top-bar">
            <v-icon class="i" v-show="starCalificar" @click="calificar" id="star">star</v-icon>
                <div>
                  <v-icon color="#FFFF02" v-show="starUno" class="i">star</v-icon>
                  <v-icon color="#FFFF02" v-show="starDos" class="i">star</v-icon>
                  <v-icon color="#FFFF02" v-show="starTres" class="i">star</v-icon>
                  <v-icon color="#FFFF02" v-show="starCuatro" class="i">star</v-icon>
                  <v-icon color="#FFFF02" v-show="starCinco" class="i">star</v-icon>
                </div>
            <span class="span">{{ personaje.nombre }}</span>
            <v-icon class="i" @click="mostrarDialogos">more_horiz</v-icon>
          </v-flex>
          <v-flex class="img-area">
              <v-flex>
                 <v-card class="descripcion" v-show="mostrarDialogo">
                    <v-card-text color="#ffffff">{{personaje.descripcion}}</v-card-text>
                 </v-card>
               </v-flex>
            <v-img class="imagen" width ="250px" v-bind:src="`https://www.smashbros.com/assets_v2/img/fighter/${personaje.nombre}/main${personaje.aspecto}.png`">
            </v-img>
          </v-flex>
          <v-flex class="song-details">
            <p id="p" class="name">{{current.title}}</p>
            <p id="p" class="artist">{{current.artist}}</p>
          </v-flex>
          <div class="controls">
              <v-icon  class="icon-con" id="repeat-plist">repeat</v-icon>
              <v-icon class="icon-con" id="volume-down" @click="bajarVolumen">volume_down</v-icon>
              <v-icon  class="icon-con" id="prev" @click="prev(`${personaje.nombre}`)">skip_previous</v-icon>
              <div class="play-pause">
                <v-icon class="icon-con" id="iconoss" v-if="!isPlaying" @click="play">play_arrow</v-icon>
                <v-icon class="icon-con" id="iconoss" v-else @click="pause">pause</v-icon>
              </div>
              <v-icon class="icon-con" id="next" @click="next(`${personaje.nombre}`)">skip_next</v-icon>
              <v-icon class="icon-con" id="volume-up" @click="aumentarVolumen">volume_up</v-icon>
              <v-icon class="icon-con" id="more-music" @click="mostrarLista">queue_music</v-icon>
          </div>
          <div class="music-list" v-show="mostrarMusica">
            <div class="header">
              <div class="row">
                <v-icon class="icon-music" color="white">queue_music</v-icon>
                <span>Music list</span>
              </div>
              <v-icon class="icon-music" id="close" @click="ocultarLista">close</v-icon>
            </div>
            <ul class="row">
              <div v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
             <li v-if="song.id == personaje.nombre">
                <span >{{song.title}}  -  {{ song.artist}}</span>
            </li>
            </div>
          </ul>
          </div>
        </v-card>
        </v-flex>
    </v-layout>
  <v-app>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import StarRating from 'vue-star-rating';

const wrapper = document.createElement('div');
// estado compoartido
const estado = {
  nota: 0,
};

const ComponenteCalificacion = Vue.extend({
  data() {
    return { calificacion: 0 };
  },
  watch: {
    calificacion(nuevoValor) { estado.nota = nuevoValor; },
  },
  template: `
   <div class="rating">
    ¿Cuál fue su experiencia jugando con este personaje?
    <star-rating v-model="calificacion" :show-rating="false"></star-rating>
   </div>`,
  components: { 'star-rating': StarRating },
});
const componente = new ComponenteCalificacion().$mount(wrapper);
var bool = true;
var newArray;

export default {
  nombre: 'Personaje',
  data() {
    return {
      mostrarDialogo:false,
      starUno: false,
      starDos: false,
      starTres: false,
      starCuatro: false,
      starCinco: false,
      starCalificar: true,
      mostrarMusica: false,
      personaje: [],
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {id: 'mega_man', title: 'Cut Man Stage', artist: 'Mega Man', src: require('@/assets/musica/Cut Man Stage.mp3')},
        {id: 'ike', title: 'Fire Emblem Theme', artist: 'Fire Emblem',src: require('@/assets/musica/Fire Emblem Theme.mp3')},
        {id: 'steve', title: 'Halland Minecraft Steve',artist: 'Minecraft',src: require('@/assets/musica/Halland Minecraft Steve reveal theme Smash Bros.mp3')},
        {id: 'kirby', title: 'King Dedede Theme',artist: 'Kirby',src: require('@/assets/musica/King Dedede Theme (Super Smash Bros Brawl Remix).mp3')},
        {id: 'luigi', title: 'Luigis Mansion Medley',artist: 'Luigis Mansion',src: require('@/assets/musica/Luigis Mansion Series Medley.mp3')},
        {id: 'fox', title: 'Star fox - Theme',artist: 'Star Fox',src: require('@/assets/musica/Main Theme - Star Fox.mp3')},
        {id: 'pikachu', title: 'Red and blue - Theme',artist: 'Pokemon',src: require('@/assets/musica/Main Theme.mp3')},
        {id: 'ness', title: 'Opening SSB Brawl',artist: 'Super Smash Bros',src: require('@/assets/musica/Musica Op Super Smash Bros Brawl.mp3')},
        {id: 'inkling', title: 'Now or Never',artist: 'Splatoon',src: require('@/assets/musica/Now or Never - Splatoon 2 OST.mp3')},
        {id: 'donkey_kong', title: 'Opening Donkey Kong',artist: 'Donkey Kong',src: require('@/assets/musica/Opening Donkey Kong.mp3')},
        {id: 'pac_man', title: 'PAC-MAN [Club Mix]',artist: 'PAC-MAN',src: require('@/assets/musica/PAC-MAN [Club Mix].mp3')},
        {id: 'joker', title: 'Persona Opening',artist: 'Persona',src: require('@/assets/musica/Persona 5 OST 17.mp3')},
        {id: 'rosalina_and_luma', title: 'Rosalina in the Observatory',artist: 'Super Mario',src: require('@/assets/musica/Rosalina in the Observatory.mp3')},
        {id: 'ryu', title: 'Ryu Stage ',artist: 'Street Fighter',src: require('@/assets/musica/Ryu Stage - Super Smash Bros.mp3')},
        {id: 'villager', title: 'Animal Crossing - Theme',artist: 'Animal Crossing',src: require('@/assets/musica/Title Theme - Animal Crossing.mp3')},
        {id: 'link', title: 'The legend of zelda - Theme',artist: 'The legend of zelda',src: require('@/assets/musica/Title Theme.mp3')},
        {id: 'richter', title: 'Vampire Killer',artist: 'Castlevania',src: require('@/assets/musica/Vampire Killer [Original].mp3')},
        {id: 'pac_man', title: 'Area uno dragon spirit',artist: 'Pac Man',src: require('@/assets/musica/area-1-dragon-spirit-super-smash-bros-ultimate.mp3')},
        {id: 'joker', title: 'Beneath the mask',artist: 'Persona',src: require('@/assets/musica/beneath-the-mask-super-smash-bros-ultimate.mp3')},
        {id: 'bowser', title: 'Bowsers Galaxy Generator',artist: 'Mario Galaxy',src: require('@/assets/musica/bowsers-galaxy-generator-super-mario-galaxy-2.mp3')},
        {id: 'bowser', title: 'Break Free Lead',artist: 'Mario Bros',src: require('@/assets/musica/break-free-lead-the-way-smash-ultimate-ost.mp3')},
        {id: 'samus', title: 'Brinstar Depths',artist: 'Metroid',src: require('@/assets/musica/brinstar-depths-metroid-super-smash-bros-melee.mp3')},
        {id: 'samus', title: 'Brinstar Melee',artist: 'Metroid',src: require('@/assets/musica/brinstar-melee-super-smash-bros-ultimate.mp3')},
        {id: 'kirby', title: 'Butter Building',artist: 'Kirby',src: require('@/assets/musica/butter-building-brawl-super-smash-bros-ultimate.mp3')},
        {id: 'fox', title: 'Corneria',artist: 'Star Fox',src: require('@/assets/musica/corneria-star-fox-super-smash-bros-ultimate.mp3')},
        {id: 'cloud', title: 'Fight On',artist: 'Final Fantasy',src: require('@/assets/musica/fight-on-final-fantasy-vii-super-smash-bros-wii-u.mp3')},
        {id: 'sora', title: 'Fight On',artist: 'Final Fantasy',src: require('@/assets/musica/fight-on-final-fantasy-vii-super-smash-bros-wii-u.mp3')},
        {id: 'chrom', title: 'Heroic Origins',artist: 'Fire Emblem',src: require('@/assets/musica/fire-emblem-theme-heroic-origins-super-smash-bros-ultimate.mp3')},
        {id: 'pac_man', title: 'Galaga Medley',artist: 'Pac Man',src: require('@/assets/musica/galaga-medley-super-smash-bros-ultimate.mp3')},
        {id: 'zelda', title: 'Gerudo Valley',artist: 'The legend of zelda',src: require('@/assets/musica/gerudo-valley-the-legend-of-zelda-ocarina-of-time.mp3')},
        {id: 'kirby', title: 'Gourmet Race',artist: 'Kirby',src: require('@/assets/musica/gourmet-race-64-super-smash-bros-ultimate.mp3')},
        {id: 'sonic', title: 'Green Hill Zone',artist: 'Sonic',src: require('@/assets/musica/green-hill-zone-super-smash-bros-ultimate.mp3')},
        {id: 'ken', title: 'Guile Stage',artist: 'Street Fighter',src: require('@/assets/musica/guile-stage-super-smash-bros-ultimate.mp3')},
        {id: 'link', title: 'Hyrule Field',artist: 'The legend of zelda',src: require('@/assets/musica/hyrule-field-the-legend-of-zelda-ocarina-of-time.mp3')},
        {id: 'mario', title: 'Jump Up',artist: 'Super Mario Odyssey',src: require('@/assets/musica/jump-up-super-star-super-smash-bros-ultimate.mp3')},
        {id: 'donkey_kong', title: 'Jungle Level',artist: 'Donkey Kong',src: require('@/assets/musica/jungle-level-super-smash-bros-brawl.mp3')},
        {id: 'ken', title: 'Ken Stage',artist: 'Street Fighter',src: require('@/assets/musica/ken-stage-super-smash-bros-ultimate.mp3')},
        {id: 'bowser', title: 'King Bowser',artist: 'Mario Bros',src: require('@/assets/musica/king-bowser-super-mario-bros-3-super-smash-bros-ultimate.mp3')},
        {id: 'cloud', title: 'Let The Battles Begin',artist: 'Final Fantasy',src: require('@/assets/musica/let-the-battles-begin-super-smash-bros-ultimate.mp3')},
        {id: 'sora', title: 'Let The Battles Begin',artist: 'Final Fantasy',src: require('@/assets/musica/let-the-battles-begin-super-smash-bros-ultimate.mp3')},
        {id: 'king_dedede', title: 'Kirby Battle',artist: 'Kirby',src: require('@/assets/musica/main-theme-kirby-battle-royale-super-smash-bros-ultimate.mp3')},
        {id: 'snake', title: 'Metal Gear - Theme',artist: 'Metal Gear',src: require('@/assets/musica/main-theme-metal-gear-solid-peace-walker-super-smash-bros-ultimate.mp3')},
        {id: 'sheik', title: 'Twilight Princess',artist: 'The legend of zelda',src: require('@/assets/musica/main-theme-the-legend-of-zelda-twilight-princess-super-smash-bros-ultimate.mp3')},
        {id: 'richter', title: 'Nothing To Lose',artist: 'Castlevania',src: require('@/assets/musica/nothing-to-lose-super-smash-bros-ultimate.mp3')},
        {id: 'zelda', title: 'Ocarina Of Time Medley',artist: 'The legend of zelda',src: require('@/assets/musica/ocarina-of-time-medley-super-smash-bros-ultimate.mp3')},
        {id: 'link', title: 'Ocarina Of Time Medley',artist: 'The legend of zelda',src: require('@/assets/musica/ocarina-of-time-medley-super-smash-bros-ultimate.mp3')},
        {id: 'mewtwo', title: 'Route 23',artist: 'Pokemon',src: require('@/assets/musica/route-23-pokemon-black-2pokemon-white-2-super-smash-bros-ultimate.mp3')},
        {id: 'lucario', title: 'Route 209',artist: 'Pokemon',src: require('@/assets/musica/route-209-pokemon-diamondpokemon-pearl-super-smash-bros-ultimate.mp3')},
        {id: 'sonic', title: 'Scrap Brain Zone',artist: 'Sonic',src: require('@/assets/musica/scrap-brain-zone-super-smash-bros-ultimate.mp3')},
        {id: 'donkey_kong', title: 'Snakey Chantey',artist: 'Donkey Kong',src: require('@/assets/musica/snakey-chantey-super-smash-bros-ultimate.mp3')},
        {id: 'falco', title: 'Space Battleground',artist: 'Star Fox',src: require('@/assets/musica/space-battleground-super-smash-bros-ultimate.mp3')},
        {id: 'lugui', title: 'The Lost Levels Medley',artist: 'Super Mario Bros',src: require('@/assets/musica/super-mario-bros-the-lost-levels-medley-super-smash-bros-ultimate.mp3')},
        {id: 'peach', title: 'Super Mario World Medley',artist: 'Super Mario Bros',src: require('@/assets/musica/super-mario-world-medley-super-smash-bros-ultimate.mp3')},
        {id: 'mario', title: 'Ultimate Main Theme',artist: 'SSB Ultimate',src: require('@/assets/musica/super-smash-bros-ultimate-main-theme-lifelight.mp3')},
        {id: 'greninja', title: 'The Battle At The Summit',artist: 'Pokemon',src: require('@/assets/musica/the-battle-at-the-summit-super-smash-bros-ultimate.mp3')},
        {id: 'snake', title: 'Theme Of Tara',artist: 'Metal Gear Solid',src: require('@/assets/musica/theme-of-tara-super-smash-bros-ultimate.mp3')},
        {id: 'canela', title: 'Happy Home Designer',artist: 'Animal Crossing',src: require('@/assets/musica/title-theme-animal-crossing-happy-home-designer-super-smash-bros-ultimate.mp3')},
        {id: 'villager', title: 'Wild World Brawl',artist: 'Animal Crossing',src: require('@/assets/musica/title-theme-animal-crossing-wild-world-brawl-super-smash-bros-ultimate.mp3')},
        {id: 'pit', title: 'Kid Icarus',artist: 'Kid Icarus',src: require('@/assets/musica/title-theme-kid-icarus-super-smash-bros-ultimate.mp3')},
        {id: 'pit', title: 'Underground Theme',artist: 'Kid Icarus',src: require('@/assets/musica/underground-theme-super-mario-land-super-smash-bros-ultimate.mp3')},
        {id: 'pit', title: 'Underworld Theme',artist: 'Kid Icarus',src: require('@/assets/musica/underworld-super-smash-bros-ultimate.mp3')},
        {id: 'ryu', title: 'Vega Stage',artist: 'Street Fighter',src: require('@/assets/musica/vega-stage-super-smash-bros-ultimate.mp3')},
        {id: 'ike', title: 'Victory Is Near',artist: 'Fire Emblem',src: require('@/assets/musica/victory-is-near-super-smash-bros-ultimate.mp3')},
        {id: 'jigglypuff', title: 'Victory Road',artist: 'Pokemon',src: require('@/assets/musica/victory-road-pokemon-xpokemon-y-super-smash-bros-ultimate.mp3')},
        {id: 'wario', title: 'WarioWare Inc Medley',artist: 'WarioWare',src: require('@/assets/musica/warioware-inc-medley-super-smash-bros-ultimate.mp3')},
        {id: 'wario', title: 'WarioWare Inc',artist: 'WarioWare',src: require('@/assets/musica/warioware-inc-super-smash-bros-ultimate.mp3')},
      ],
      player: new Audio()
      ,volume:0.5
    };
  },
  created(){
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
  mounted() {
    this.obtenerPersonaje();
  },
  methods: {
    async calificar() {
      this.$swal({
        content: componente.$el,
        buttons: {
          confirm: {
            value: 0,
          },
        },
      })
        .then(() => {
          const personajeId = this.$route.params.id;
          return axios({
            method: 'post',
            data: {
              calificacion: estado.nota,
            },
            url: `http://localhost:8081/personajes/calif/${personajeId}`,
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(() => {
              this.$swal(`Gracias por calificar! ${estado.nota}`, 'success');
              this.starCalificar = false;
               if(`${estado.nota}` == '1'){
                this.starUno = true;
                }
              if(`${estado.nota}` == '2'){
                this.starUno = true;
                this.starDos = true;
                }
              if(`${estado.nota}` == '3'){
                this.starUno = true;
                this.starDos = true;
                this.starTres = true;
                }
              if(`${estado.nota}` == '4'){
                this.starUno = true;
                this.starDos = true;
                this.starTres = true;
                this.starCuatro = true;
               }
               if(`${estado.nota}` == '5'){
                this.starUno = true;
                this.starDos = true;
                this.starTres = true;
                this.starCuatro = true;
                this.starCinco = true;
               }
            })
            .catch((error) => {
              const mensaje = error.response.data.message;
              this.$swal('¡Error!', `${mensaje}`, 'error');
            });
        });
    },
    async obtenerPersonaje() {
      return axios({
        method: 'get',
        url: `http://localhost:8081/api/personajes/${this.$route.params.id}`,
      })
        .then((respuesta) => {
          this.personaje = respuesta.data;
        })
        .catch(() => {
        });
    },
    bajarVolumen(){
      if(this.volume >0)
      {
        this.volume-=0.1;
        this.player.volume = this.volume;
      }
    },
    aumentarVolumen(){
      if(this.volume < 1)
      {
        this.volume+=0.1;
        this.player.volume = this.volume;
      }
    },
    play (song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }
        this.current = this.songs[this.index];
        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    },
    pause(){
      this.player.pause();
      this.isPlaying = false;
    },
    next (nombre) {
      if(bool == true){
        newArray = this.songs.filter(function (el){
        return (el.id == nombre)
      })
        bool = false;
      }
      this.index++;
      if (this.index > newArray.length - 1) {
        this.index = 0;
      }
      this.current = newArray[this.index];
      this.play(this.current);
    },
    prev (nombre) {
      if(bool == true){
        newArray = this.songs.filter(function (el){
        return (el.id == nombre)
      })
        bool = false;
      }
      this.index--;
      if (this.index < 0) {
        this.index = newArray.length - 1;
      }
      this.current = newArray[this.index];
      this.play(this.current);
    },
    mostrarLista(){ 
      this.mostrarMusica = true;
    },
    ocultarLista(){ 
      this.mostrarMusica = false;
    },
    mostrarDialogos(){
      this.mostrarDialogo = true;
    }
  },
}; 
</script>