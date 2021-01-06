<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model.trim="title">
    <button type="submit">Creat</button>
  </form>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapMutations(['createTodo']),
    onSubmit() {
      if (this.title) {
        this.createTodo({
          id: Date.now(),
          title: this.title,
          completed: false
        })
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  margin-bottom: 30px;
  height: 30px;
}

input {
  flex-grow: 1;
}

button {
  flex-basis: 70px;
}
</style>


<!--<template>-->
<!--  <form @submit.prevent="onSubmit">-->
<!--    <input type="text" v-model.trim="title">-->
<!--    <button type="submit>Creat</button>-->
<!--  </form>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      title: ''-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    onSubmit() {-->
<!--      console.log(this.title)-->
<!--      if (this.title) {-->
<!--        const newTodo = {-->
<!--          id: Date.now(),-->
<!--          title: this.title,-->
<!--          completed: false-->
<!--        }-->
<!--        this.$emit('add-todo', newTodo)-->
<!--        this.title = ''-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--form {-->
<!--  display: flex;-->
<!--  margin-bottom: 30px;-->
<!--  height: 30px;-->
<!--}-->

<!--input {-->
<!--  flex-grow: 1;-->
<!--}-->

<!--button {-->
<!--  flex-basis: 70px;-->
<!--}-->
<!--</style>-->