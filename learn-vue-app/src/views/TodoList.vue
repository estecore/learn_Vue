<template>
  <section class="section">
    <div class="container">
      <div id="todo-list">
        <h1 class="title">To-Do List on Vue</h1>

        <AddTodo @add-todo="addTodo" />

        <ul class="todo-list-items">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @remove-todo="removeTodo(todo.id)"
            @toggle-completed="toggleCompleted(todo.id)"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import AddTodo from "../components/AddTodo.vue";
import TodoItem from "../components/TodoItem.vue";

import { ITodoItem } from "../types";

export default defineComponent({
  name: "TodoList",
  components: {
    AddTodo,
    TodoItem,
  },
  setup() {
    const todos = ref<ITodoItem[]>([
      { id: 1, text: "Learn Vue", completed: false },
      { id: 2, text: "Learn Vue Router", completed: false },
    ]);

    const addTodo = (text: string) => {
      todos.value.push({ id: todos.value.length + 1, text, completed: false });
    };

    const removeTodo = (id: number) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    const toggleCompleted = (id: number) => {
      const todo = todos.value.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    };

    return {
      todos,
      addTodo,
      removeTodo,
      toggleCompleted,
    };
  },
});
</script>

<style scoped lang="scss">
#todo-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .title {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
  }

  .todo-list-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}
</style>
