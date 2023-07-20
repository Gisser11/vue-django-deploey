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
      <v-btn type="submit">
        Войти
      </v-btn>

      <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
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
      errorMessage: '' // Добавляем поле для отображения сообщения об ошибке
    };
  },
  methods: {
    async login() {
      const apiUrl = 'https://gisser777.pythonanywhere.com/api-token-auth/';

      try {
        const response = await axios.post(apiUrl, {
          username: this.username,
          password: this.password
        });

        if (response.status === 200) {
          const token = response.data.token;
          this.$store.commit('setToken', token);
          alert('Вы успешно авторизовались')
        } if (response.status === 400) {
          this.errorMessage = 'Произошла ошибка при авторизации';
        }
      } catch (error) {
        // Обработка ошибки при неуспешной авторизации
        this.errorMessage = 'Неверные логин или пароль';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
