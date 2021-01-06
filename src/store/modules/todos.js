import axios from 'axios'

export default {
    state: {
        todos: [],
        loading: true,
        valueSearch: '',
    },
    actions: {
        // async fetchTodos(context, limit = 3) {
        //     const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=' + limit)
        //     const todos = await res.json()
        //     const loading = false
        //     context.commit('updateTodos', todos)
        //     context.commit('isLoaded', loading)
        // }
        fetchTodos(context, limit) {
            axios
                .get('https://jsonplaceholder.typicode.com/todos?_limit=' + limit)
                .then(responce => {
                    context.commit('updateTodos', responce.data)
                    console.log(responce)
                    const loading = false
                    context.commit('isLoaded', loading)
                })
                .catch(() => {
                    console.log('ОШИБКААА')
                })

        }

    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        },
        isLoaded(state, loading) {
            state.loading = loading
        },
        createTodo(state, newTodo) {
            state.todos.push(newTodo)
        },
        deleteTodo(state, id) {
            state.todos = state.todos.filter(item => item.id !== id)
        },
        searchTodo(state, value) {
            state.valueSearch = value
        }
    },
    getters: {
        allTodos(state) {
            return state.todos
        },
        loading(state) {
            return state.loading
        },
        visibleTodos(state) {
            if (state.valueSearch) {
                return state.todos.filter(item => item.title.includes(state.valueSearch))
            } else {
                return state.todos
            }
        }
    }
}