<template>
  <div class="float-left w-1/4">
    <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-1/6 overflow-y-auto text-left bg-gray-900">
      <div class="text-gray-100 text-xl">
        <div class="p-2 flex items-center pb-5">
          <h1 class="font-bold text-gray-200 text-2xl">Добрый день, user.username!</h1>
          <!-- #TODO Текущий юзер -->
        </div>
        <div class="pb-[20%]">
          <v-btn class="w-full mb-3" @click="showDialog">Авторизация</v-btn>
          <v-btn class="w-full" @click="logout">Выход из профиля</v-btn>
        </div>
        <p class="text-lg text-gray-300">Переход на страницу с анекдотами</p>
        <!-- #TODO страница в формате тиктока -->
      </div>
      <div class="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-200 text-white">
        <slot></slot>
      </div>

      <div class="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-black hover:bg-blue-200 text-white">
        <button @click="getPosts">Получить посты</button>
        <!-- #TODO само собой анлогин, но прежде реализовать логин -->
      </div>
    </div>
    <my-dialog :show.sync="dialogVisible">
      <auth-page></auth-page>
    </my-dialog>
  </div>
  <!-- #TODO Реализовать адаптив в сайдбаре -->
</template>


<script>
import axios from "axios";
import MyDialog from "@/components/UI/myDialog.vue";
import AuthPage from "@/components/authPage.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton, AuthPage, MyDialog},
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleCloseDialog() {
      this.dialogVisible = false;
    },
    getPosts: function () {
      const postsUrl = 'https://gisser777.pythonanywhere.com/api/ChefList/';

      axios
          .get(postsUrl, {
            headers: {
              Authorization: `Token ${this.$store.state.token}`
            }
          })
          .then(response => {
            const posts = response.data;
            this.$store.commit('setPosts', posts)
            console.log(posts);
          })
          .catch(error => {
            console.error(error);
          })
    },
    showDialog: function () {
      this.dialogVisible = true
    },
    logout() {
      this.$store.commit('clearToken');
      window.location.reload();
    }
  }
}
</script>

<style scoped>
</style>