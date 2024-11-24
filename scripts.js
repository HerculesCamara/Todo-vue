var todos = []

const TodoList = {
    data() {
        return {
            todos: window.todos,
            newTodo: {}
        }
    },
    methods: {
        addTodo() {
            if (!this.newTodo) {
                alert("Please enter a task.")
            } else {
                this.todos.push(this.newTodo)
                this.newTodo = {}
            }
        },
        removeTodo(index){
            this.todos.splice(index, 1)
        },
        removeAll() {
            this.todos = []
        }
    }
}

Vue.createApp(TodoList).mount('#app')