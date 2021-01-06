<template>
  <div class="search">
    <input
        type="text"
        placeholder="Поиск..."
        v-model="value"
        @input="onSearch"
    >
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: ['todos'],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    ...mapMutations(['searchTodo']),
    onSearch() {
      this.searchTodo(this.value.trim())
    }
  }
}

</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

input {
  width: 50%;
}
</style>


<!--<template>-->
<!--  <div class="search">-->
<!--    <input-->
<!--        type="text"-->
<!--        placeholder="Поиск..."-->
<!--        v-model="value"-->
<!--        @input="onSearch"-->
<!--    >-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  props: ['todos'],-->
<!--  data() {-->
<!--    return {-->
<!--      value: ''-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    onSearch() {-->
<!--      this.$emit('onSearch', this.value.trim())-->
<!--    }-->
<!--  }-->
<!--}-->

<!--</script>-->

<!--<style scoped>-->
<!--.search {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  margin-bottom: 30px;-->
<!--}-->

<!--input {-->
<!--  width: 50%;-->
<!--}-->
<!--</style>-->