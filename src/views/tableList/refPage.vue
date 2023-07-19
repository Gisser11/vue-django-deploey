<template>
  <div class="flex justify-center items-center h-screen p-10">
    <div class="max-w-md px-4 py-8 bg-white shadow-2xl rounded-lg border border-gray-300">
      <h1 class="text-3xl font-bold mb-4">Изменить пост</h1>
      <p class="text-gray-600">Все очень просто. В поле, которое нужно изменить, введите новое значение</p>
      <form class="pt-10" @submit.prevent="saveChanges">
        <label for="name">Имя:</label>
        <v-text-field id="name" type="text" v-model="updatedName"></v-text-field>
        <br>

        <label for="specialty">Специальность:</label>
        <v-text-field id="specialty" type="text" v-model="updatedSpecialty"></v-text-field>
        <br>

        <label for="workExperience">Опыт работы:</label>
        <v-text-field id="workExperience" type="text" v-model="updatedWorkExperience"></v-text-field>
        <br>

        <div class="flex justify-center items-center">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Сохранить
          </button>
          <router-link to="/CRUD">
            <v-btn>Вернуться назад</v-btn>
          </router-link>
        </div>
      </form>
    </div>
  </div>

</template>


<script>

import axios from "axios";

export default {
  data() {
    return {
      post: null,
      updatedName: '',
      updatedSpecialty: '',
      updatedWorkExperience: ''
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const postId = this.$route.params.id;
      const postsUrl = `https://gisser777.pythonanywhere.com/api/ChefList/${postId}`;
      console.log(postsUrl)
      axios
          .get(postsUrl, {
            headers: {
              Authorization: `Token ${this.$store.state.token}`
            }
          })
          .then(response => {
            this.post = response.data;
            this.updatedName = this.post.name;
            this.updatedSpecialty = this.post.specialty;
            this.updatedWorkExperience = this.post.work_experience;
          })


          .catch(error => {
            console.error(error);
          });
    },
    async saveChanges() {
      try {
        this.post.name = this.updatedName;
        this.post.specialty = this.updatedSpecialty;
        this.post.work_experience = this.updatedWorkExperience;

        const postId = this.$route.params.id;
        const postsUrl = `https://gisser777.pythonanywhere.com/api/ChefList/${postId}/`;
        console.log(this.post)
        await axios
            .put(postsUrl, this.post, {
              headers: {
                Authorization: `Token ${this.$store.state.token}`
              }
            });
      } catch (error) {
        console.error(error);
      }
    }

  }
};

</script>

<style scoped>

</style>