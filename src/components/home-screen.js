var HomeScreen = {
  template: `
    <div class="p-6 w-full min-h-screen flex justify-center items-center">
      <p class="text-center">You have pushed the button this many times: {{count}}</p>

      <button @click="increment" class="fixed right-6 shadow bottom-6 rounded p-3 bg-sky-500 text-white hover:bg-sky-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  `,
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};

export default HomeScreen;
