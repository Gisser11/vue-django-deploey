<template>
  <div class="w-full">
    <h1 class="text-3xl text-gray-800 text-center">Список постов</h1>
    <div class="flex justify-center items-center">
      <div>
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
      <!--      <div v-else class="flex justify-center items-center">-->
      <!--        <h1 class="text-xl text-gray-800">-->
      <!--          Здесь нет постов...-->
      <!--        </h1>-->
      <!--        <img-->
      <!--            class="w-8 mr-2 h-8"-->
      <!--            src="https://em-content.zobj.net/thumbs/72/apple/354/pleading-face_1f97a.png"-->
      <!--            alt="грустный смайлик"-->
      <!--        />-->
      <!--        <img-->
      <!--            class="w-8 mr-2 h-8"-->
      <!--            src="https://em-content.zobj.net/thumbs/72/apple/354/pleading-face_1f97a.png"-->
      <!--            alt="грустный смайлик"-->
      <!--        />-->
      <!--        <img-->
      <!--            class="w-8 mr-2 h-8"-->
      <!--            src="https://em-content.zobj.net/thumbs/72/apple/354/pleading-face_1f97a.png"-->
      <!--            alt="грустный смайлик"-->
      <!--        />-->
      <!--      </div>-->
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
