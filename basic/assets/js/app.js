const HelloVueApp = {
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
};

Vue.createApp(HelloVueApp).mount("#hello-vue");

// =============================

const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};

//   const plus = {
//     methods: {
//       increment() {
//         this.counter++;
//       },
//     },
//   };

//   const minus = {
//     methods: {
//       decrement() {
//         this.counter--;
//       },
//     },
//   };

//   Vue.createApp(plus).mount("#plus");
//   Vue.createApp(minus).mount("#minus");

Vue.createApp(Counter).mount("#counter");

// =============================

const BindAttribute = {
  data() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
    };
  },
};

Vue.createApp(BindAttribute).mount("#bind-attribute");

// =============================

const EventHandling = {
  data() {
    return {
      message: "Hello, Vue.js!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};

Vue.createApp(EventHandling).mount("#event-handling");

// =============================

const TwoWayBinding = {
  data() {
    return {
      message: "Hello, Vue.js!",
    };
  },
};

Vue.createApp(TwoWayBinding).mount("#two-way-binding");

// =============================

const CondionalRendering = {
  data() {
    return {
      seen: true,
    };
  },
  methods: {
    toggle() {
      this.seen = !this.seen;
    },
  },
};

Vue.createApp(CondionalRendering).mount("#conditional-rendering");

// =============================

const ListRendering = {
  data() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
};

Vue.createApp(ListRendering).mount("#list-rendering");

// =============================

const TodoItem = {
  props: ["todo"],
  template: `<li>{{ todo.text }}</li>`,
};

const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
  components: {
    TodoItem,
  },
};

Vue.createApp(TodoList).mount("#todo-list-app");

// =============================

const RootComponent = {
  data() {
    return {
      count: 1,
    };
  },
  created() {
    console.log(`Counter: ${this.count}`);
  },
};

const app = Vue.createApp(RootComponent);
const vm = app.mount("#app");
console.log(vm.count);

// =============================

Vue.createApp({
  data() {
    return {
      author: {
        name: "Maximilian",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - The Final Guide",
          "Vue 4 - The Party Guide",
        ],
      },
    };
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
  methods: {
    publishedBooksMessage2() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
}).mount("#books");

// =============================

Vue.createApp({
  data() {
    return {
      isActive: true,

      textObject: {
        active: true,
        "text-danger": true,
      },

      activeColor: "#42b983",
      fontSize: "3rem",
    };
  },
}).mount("#classes");

// =============================

Vue.createApp({
  data() {
    return {
      text: "",

      isShow: true,

      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
}).mount("#conditions");

// =============================

Vue.createApp({})
  .component("button-counter", {
    data() {
      return {
        count: 0,
      };
    },
    template: `<button @click="count++">You clicked me {{ count }} times</button>`,
  })
  .mount("#counter-component");
