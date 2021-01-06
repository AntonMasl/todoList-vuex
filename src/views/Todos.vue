<template>
  <div>
    <router-link to="/">HOME</router-link>
    <AddTodo />
    {{ mas }}
    <SearchItem />
    <TodoList v-bind:todos="visibleTodos" v-if="visibleTodos.length" />
    <loader v-if="loading" />
    <p v-else-if="!loading && !visibleTodos.length">НЕТ ЗАДАЧ</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import loader from "@/components/loader"
import SearchItem from "@/components/SearchItem";
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'app',
  data(){
    return{
      mas: 'qwe'
    }
  },
  mounted() {
    this.fetchTodos(3)
    console.log(window.history);
  },
  computed: mapGetters(['visibleTodos', "loading"]),
  methods: {
    ...mapActions(['fetchTodos']),
  },
  components: {
    TodoList,
    loader,
    AddTodo,
    SearchItem
  }
}
</script>

<!--<template>-->
<!--  <div>-->
<!--    <router-link to="/">HOME</router-link>-->
<!--    &lt;!&ndash;    <AddTodo @add-todo="addTodo"/>&ndash;&gt;-->
<!--    &lt;!&ndash;    <SearchItem @onSearch="onSearch"/>&ndash;&gt;-->
<!--    &lt;!&ndash;    <loader v-if="loading"/>&ndash;&gt;-->
<!--    <TodoList v-bind:todos="allTodos"/>-->
<!--    &lt;!&ndash;        @removeTodo='removeTodo'/>&ndash;&gt;-->
<!--    &lt;!&ndash;        v-else-if="visibleTodos.length!==0"&ndash;&gt;-->

<!--    &lt;!&ndash;    />&ndash;&gt;-->
<!--    &lt;!&ndash;    <p v-else-if="visibleTodos.length===0">НЕТ ДЕЛ</p>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import TodoList from "@/components/TodoList";-->
<!--// import AddTodo from "@/components/AddTodo";-->
<!--// import SearchItem from "@/components/SearchItem";-->
<!--// import Loader from "@/components/loader";-->
<!--import {mapGetters} from 'vuex';-->

<!--export default {-->
<!--  name: 'app',-->
<!--  // data() {-->
<!--  //   return {-->
<!--  //     // todos: [],-->
<!--  //     // loading: true,-->
<!--  //     // searchValue: ''-->
<!--  //   }-->
<!--  // },-->
<!--  mounted() {-->
<!--    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')-->
<!--    //     .then(response => response.json())-->
<!--    //     .then(json => {-->
<!--    //           this.todos = json-->
<!--    //           this.loading = false-->
<!--    //         }-->
<!--    //     )-->
<!--    this.$store.dispatch('fetchTodos')-->
<!--  },-->
<!--  // methods: {-->
<!--  //   // removeTodo(id) {-->
<!--  //   //   this.todos = this.todos.filter(item => item.id !== id)-->
<!--  //   // },-->
<!--  //   // addTodo(newTodo) {-->
<!--  //   //   this.todos.push(newTodo)-->
<!--  //   // },-->
<!--  //   // onSearch(value) {-->
<!--  //   //   this.searchValue = value-->
<!--  //   // }-->
<!--  // },-->
<!--  computed: mapGetters(['allTodos']),-->
<!--  // visibleTodos() {-->
<!--  //   if (this.searchValue) {-->
<!--  //     return this.todos.filter(item => item.title.includes(this.searchValue))-->
<!--  //   } else {-->
<!--  //     return this.todos-->
<!--  //   }-->
<!--  // }-->

<!--  components: {-->
<!--    // Loader,-->
<!--    TodoList,-->
<!--    // AddTodo,-->
<!--    // SearchItem-->
<!--  }-->
<!--}-->
<!--</script>-->
