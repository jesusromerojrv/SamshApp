<template>
  <v-app>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-select
            :items="nom"
            label="Nombre:"
            v-model="nombre"
            outlined
            weight="300px"
            required
            :rules="reglasNombre"
        ></v-select>
        <v-text-field
            name="input-7-1"
            label="Descripción:"
            v-model="descripcion"
            outlined
            multi-line
        ></v-text-field>
        <v-select
            :items="franq"
            label="Franquicia:"
            v-model="franquicia"
            outlined
            required
            :rules="reglasPublicacion"
        ></v-select>
        <v-select
            :items="aspec"
            label="Aspecto:"
            v-model="aspecto"
            outlined
            weight="300px"
            required
            :rules="reglasAspecto"
        ></v-select>
        <v-btn @click="enviar" :disabled="!valid" color="#F10000" class="white--text">Enviar</v-btn>
        <v-btn @click="limpiar" color="#F10000" class="white--text">Limpiar</v-btn>
    </v-form>
  </v-app>
</template>
<script>
// import axios from 'axios';

export default {
  data: () => ({
    valid: true,
    nombre: '',
    descripcion: '',
    franquicia: '',
    aspecto: '',
    nom: ['mario', 'samus', 'pikachu', 'link', 'peach', 'bowser', 'luigi', 'fox', 'mewtwo', 'ike',
      'ness', 'lucas', 'donkey_kong', 'lucario', 'inkling', 'ryu', 'steve', 'joker', 'yoshi', 'kirby',
      'daisy', 'sheik', 'zelda', 'pichu', 'roy', 'wario', 'sonic', 'wolf', 'canela', 'ridley', 'cloud', 'palutena',
      'jigglypuff', 'falco', 'pit', 'chrom', 'snake', 'greninja', 'bowsy', 'ken', 'simon', 'sefirot', 'sora', 'pac_man',
      'mega_man', 'rosalina_and_luma', 'villager', 'richter'],
    aspec: ['2', '3', '4', '5', '6', '7', '8'],
    franq: ['Super Smash Bros', 'Subespacio', 'El mundo de estrellas perdidas', 'The Legend of Zelda', 'Metroid',
      'Star Fox', 'Pokémon', 'F-Zero', 'Ice Climber', 'Mario', 'Yoshi', 'Wario', 'Donkey Kong', 'Kirby', 'EarthBound',
      'Splatoon', 'Sonic'],
    reglasNombre: [
      v => !!v || 'El nombre del personaje es requerido',
    ],
    reglasAspecto: [
      v => !!v || 'Se requiere el aspecto del personaje',
    ],
    reglasPublicacion: [
      v => !!v || 'Se requiere la franquicia del personaje',
    ],
    select: null,
  }),
  methods: {
    enviar() {
      if (this.$refs.form.validate()) {
        const personaje = {
          nombre: this.nombre,
          descripcion: this.descripcion,
          franquicia: this.franquicia,
          aspecto: this.aspecto,
        };
        this.$store.dispatch('agregarPersonaje', personaje);
        this.$refs.form.reset();
        this.$router.push({ name: 'Luchadores' });
      }
      return true;
    },
    limpiar() {
      this.$refs.form.reset();
    },
  },
};
</script>
