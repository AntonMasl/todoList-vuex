<template>
  <div>
    <ul>
      <TodoItem
          v-for="(item,index) of todos"
          v-bind:todo="item"
          v-bind:index = "index"
          v-bind:key="item.id"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
}
</script>


<style scoped>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>




<!--<template>-->
<!--  <div>-->
<!--    <ul>-->
<!--      <TodoItem-->
<!--          v-for="(item,index) of todos"-->
<!--          v-bind:todo="item"-->
<!--          v-bind:index = "index"-->
<!--          v-bind:key="item.id"-->
<!--          v-on:removeTodo = "removeTodo"-->
<!--      />-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import TodoItem from "@/components/TodoItem";-->

<!--export default {-->
<!--  props: ['todos'],-->
<!--  components: {-->
<!--    TodoItem-->
<!--  },-->
<!--  methods: {-->
<!--    removeTodo(id){-->
<!--      this.$emit('removeTodo', id)-->
<!--    }-->
<!--  }-->

<!--}-->
<!--</script>-->


<!--<style scoped>-->
<!--ul{-->
<!--  list-style: none;-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->
<!--</style>-->