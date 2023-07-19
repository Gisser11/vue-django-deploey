<template>
  <div class="overflow-hidden mx-auto pb-10">
    <div class="float-left w-1/2 ">
      <form @submit.prevent>
        <h1 class="text-4xl font-bold">Создание поста</h1>
        <v-text-field
            type="text"
            label="Ваше имя"
            v-model="post.name"
        ></v-text-field>
        <v-text-field
            type="text"
            label="Ваша специальность"
            v-model="post.specialty"
        ></v-text-field>
        <v-text-field
            type="text"
            label="Ваш стаж"
            v-model="post.work_experience"
        ></v-text-field>
        <v-btn
            @click="createPost"
            style="align-self: flex-end"
        >
          Создать
        </v-btn>
      </form>
    </div>
    <div class="float-right w-1/2 p-10">
      <p class="text-gray-700 font-light">
        Для создания новой статьи укажите авторство и
        опишите ваше блюдо. <br><br>
        <b>(Пока в разработке)</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        name: '',
        specialty: '',
        work_experience: null,
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        name: '',
        specialty: '',
        work_experience: null,
      }
    },
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
