<template>
  <div class="w-full">
    <h1 class="text-3xl text-gray-800 text-center">Список постов</h1>
    <div class="flex justify-center items-center">
      <div v-if="posts.length > 0">
        <table class="w-full list">
          <thead>
          <tr>
            <th class="px-4 py-2 font-light">Имя шефа</th>
            <th class="px-4 py-2 font-light">Специальность</th>
            <th class="px-4 py-2 font-light">Опыт работы</th>
            <th class="px-4 py-2 font-light">Действия</th>
          </tr>
          </thead>
          <transition-group name="list" tag="tbody">
            <tr v-for="post in posts" :key="post.id">
              <td class="border px-4 py-2">{{ post.name }}</td>
              <td class="border px-4 py-2">{{ post.specialty }}</td>
              <td class="border px-4 py-2">{{ post.work_experience }}</td>
              <td class="border px-4 py-2 flex justify-center">
                <div class="pr-5">
                  <v-btn class="m-2" @click="$emit('remove', post)">Удалить</v-btn>
                  <router-link :to="`/CRUD/${post.id}/edit`">
                    <v-btn>
                      Изменить
                    </v-btn>
                  </router-link>
                </div>
              </td>
            </tr>
          </transition-group>
        </table>
      </div>
      <div v-else class="flex flex-col items-center justify-center">
        <h1 class="text-xl text-gray-800">
          Здесь нет постов...
        </h1>

        <div class="rounded-xl ml-[20%] mr-[20%] bg-blue-400 max-w-max">
          <p class="font-medium  m-2 text-blue-50 ">
            Возможная проблема: вы не авторизовались. Для входа нажмите "авторизация" и введите log:pass admin:admin,
            затем черную кнопку получить посты
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  components: {
    MyButton,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-move {
  transition: transform 0.8s ease;
}
</style>
