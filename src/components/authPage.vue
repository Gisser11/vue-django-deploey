<template>
  <div class="overflow-hidden mx-auto pb-10">
    <form @submit.prevent="login">
      <h1 class="text-2xl font-bold text-black">Авторизация</h1>
      <v-text-field
          type="text"
          label="Логин"
          v-model="username"
      ></v-text-field>
      <v-text-field
          type="password"
          label="Пароль"
          v-model="password"
      ></v-text-field>
      <v-btn type="submit"
      >
        Войти
      </v-btn>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      token: '' // Добавляем поле для хранения токена
    };
  },
  methods: {
    async login() {
      const apiUrl = 'https://gisser777.pythonanywhere.com/api-token-auth/';
      console.log(this.token)
      axios
          .post(apiUrl, {
            username: this.username,
            password: this.password
          })
          .then(response => {
            this.token = response.data.token;
            this.$store.commit('setToken', this.token)
          })
          .catch(error => {
            console.error(error);
          });
      this.$emit('close-dialog');
    },

  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
