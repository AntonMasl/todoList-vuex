<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input ref="myInput" type="checkbox"
             v-on:change="todo.completed= !todo.completed"
      />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title }}
    </span>
    <button class="rm" @click="removeTodo">&times;</button>
  </li>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {
    ...mapMutations(["deleteTodo"]),
    removeTodo() {
      this.deleteTodo(this.todo.id)
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background-color: red;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 20px;
}

input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>





<!--<template>-->
<!--  <li>-->
<!--    <span v-bind:class="{done: todo.completed}">-->
<!--      <input type="checkbox"-->
<!--             v-on:change="todo.completed= !todo.completed"-->
<!--      />-->
<!--      <strong>{{ index + 1 }}</strong>-->
<!--      {{ todo.title }}-->
<!--    </span>-->
<!--    <button class="rm" @click="removeTodo">&times;</button>-->
<!--  </li>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  props: {-->
<!--    todo: {-->
<!--      type: Object,-->
<!--      required: true-->
<!--    },-->
<!--    index: Number-->
<!--  },-->
<!--  methods: {-->
<!--    removeTodo() {-->
<!--      this.$emit('removeTodo', this.todo.id)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--li {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  border: 1px solid #ccc;-->
<!--  padding: 0.5rem 2rem;-->
<!--  margin-bottom: 1rem;-->
<!--}-->

<!--.rm {-->
<!--  background-color: red;-->
<!--  border-radius: 50%;-->
<!--  color: white;-->
<!--  font-weight: bold;-->
<!--  border: none;-->
<!--}-->

<!--input {-->
<!--  margin-right: 1rem;-->
<!--}-->

<!--.done {-->
<!--  text-decoration: line-through;-->
<!--}-->
<!--</style>-->