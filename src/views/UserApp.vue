<template>
  <div>
    <div class="x-header w-2/6">
      <Header>
        <button
            @click="showDialog"
        >
          Создать пост (только по тексту)
        </button>
      </Header>
      <my-dialog :show.sync="dialogVisible">
        <post-form
            @create="createPost"
        >
        </post-form>
      </my-dialog>
    </div>
    <div class="x-app w-5/6">
      <router-view/>
      <div class="pl-2 mx-16 w-1/4  ">
        <h1 class="font-bold text-2xl mb-2">Сортировка по критерию</h1>
        <my-select v-model="selectedSort" style="margin-right: 10px" :options="sortOptions">

        </my-select>
        <div class="pt-10">
          <h1 class="font-bold text-2xl">Поиск</h1>
          <v-text-field
              v-model="searchText"
              placeholder="Поиск по имени"
          />
        </div>
      </div>
      <post-list
          :posts="sortedAndSearched"
          @remove="removePost"
      >
      </post-list>
    </div>
  </div>
</template>

<script>
import Header from "@/views/erElems/Header.vue";
import PostList from "@/views/tableList/PostList.vue";
import postForm from "@/views/postCreate/postForm.vue";
import MyDialog from "@/components/UI/myDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/mySelect.vue";
import MyInput from "@/components/UI/myInput.vue";
import axios from "axios";

export default {
  components: {
    PostList,
    Header,
    postForm
  },
  data() {
    return {
      dialogVisible: false,
      selectedSort: '',
      sortOptions: [
        {value: 'name', name: 'По имени'},
        {value: 'work_experience', name: 'По опыту работе'}
      ],
      searchText: '',
    };
  },
  methods: {
    createPost(post) {
      const createUrl = 'https://gisser777.pythonanywhere.com/api/ChefList/';

      axios
          .post(createUrl, post, {
            headers: {
              Authorization: `Token ${this.$store.state.token}`
            }
          })
          .then(response => {
            const newPost = response.data;
            this.$store.commit('addPost', newPost);
          })
          .catch(error => {
            console.error(error);
          });
    },
    removePost(post) {
      const deleteUrl = `https://gisser777.pythonanywhere.com/api/ChefList/${post.id}/`;

      axios
          .delete(deleteUrl, {
            headers: {
              Authorization: `Token ${this.$store.state.token}`
            }
          })
          .then(response => {
            this.$store.commit('removePost', post); //
          })
          .catch(error => {
            console.error(error);
          });
    },
    showDialog: function () {
      this.dialogVisible = true
    },
  },
  computed: {
    getPosts() {
      return this.$store.state.posts
    },
    sortedPosts() {
      if (this.selectedSort === 'work_experience') {
        return [...this.getPosts].sort((post1, post2) =>
            post1.work_experience - post2.work_experience)
      }
      return [...this.getPosts].sort((post1, post2) =>
          post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))

    },
    sortedAndSearched() {
      return this.sortedPosts.filter(post => post.name.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  },


}

</script>

<style>
.x-header {
  float: left;
}

.x-app {
  float: right;
}
</style>