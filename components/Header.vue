<template>
  <div class="bg-gray-800">
    <div class="px-4">
      <div class="flex items-center justify-between">
        <div class="py-2 flex items-center space-x-2 text-sm">
          <img
            src="@/assets/svgs/bible.svg"
            alt=""
            class="w-10 h-10 bg-white rounded-full"
          />
          <h1 class="text-gray-300 text-xl tracking-widest font-semibold">
            Adieu! Daddy
          </h1>
          <svg
            @click="toggle"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="$colorMode.value == 'dark'"
              class="text-yellow-500"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
            <path
              v-else
              class="text-gray-600"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
        <div class="md:hidden">
          <button
            @click="menuOpen = !menuOpen"
            class="focus:outline-none focus:shadow-outline rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-show="menuOpen"
                class="text-yellow-500"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-show="!menuOpen"
                class="text-blue-600"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
        <div class="hidden md:block text-blue-500 space-x-2">
          <n-link to="/" class="tracking-wide md:text-lg hover:text-gray-200"
            >REQUIEM</n-link
          >
          <n-link
            to="/biography"
            class="tracking-wider md:text-lg hover:text-gray-200"
            >BIO</n-link
          >
          <n-link
            to="/tributes"
            class="tracking-wider md:text-lg hover:text-gray-200"
            >TRIBUTES</n-link
          >
          <n-link
            to="/photos"
            class="tracking-wider md:text-lg hover:text-gray-200"
            >PHOTOS</n-link
          >
          <n-link
            to="/appreciation"
            class="tracking-wider md:text-lg hover:text-gray-200"
            >APPRECIATION</n-link
          >
          <a
            href="https://matthewchukwu.netlify.app/"
            target="_blank"
            class="tracking-wider md:text-lg hover:text-gray-200"
            >CONTACT</a
          >
        </div>
      </div>
      <transition name="slide-menu" appear mode="out-in">
        <div
          v-show="menuOpen"
          class="
            py-4
            
            text-lg
            tracking-widest
            text-yellow-500
            flex flex-col
            justify-end
            space-y-4
            md:hidden
            absolute
            z-50
            inset-x-0
            bg-gray-800
            w-full
          "
        >
          <button
            @click="requiemButt"
            class="
              py-2
              rounded-md
              tracking-widest
              font-semibold
              focus:outline-none
              focus:bg-gray-200
            "
          >
            REQUIEM
          </button>
          <button
            @click="biographyButt"
            class="
              py-2
              rounded-md
              tracking-widest
              font-semibold
              focus:outline-none
              focus:bg-gray-200
            "
          >
            BIOGRAPHY
          </button>
          <button
            @click="tributeButt"
            class="
              py-2
              rounded-md
              tracking-widest
              font-semibold
              focus:outline-none
              focus:bg-gray-200
            "
          >
            TRIBUTES / CONDOLENCES
          </button>
          <button
            @click="photosButt"
            class="
              py-2
              rounded-md
              tracking-widest
              font-semibold
              focus:outline-none
              focus:bg-gray-200
            "
          >
            PHOTOS
          </button>
          <button
            @click="appreciationButt"
            class="
              py-2
              rounded-md
              tracking-widest
              font-semibold
              focus:outline-none
              focus:bg-gray-200
            "
          >
            APPRECIATION
          </button>
          <a
            href="https://matthewchukwu.netlify.app"
            target="_blank"
            class="
              py-2
              rounded-md
              tracking-widest
              font-semibold
              focus:outline-none
              focus:bg-gray-200
              text-center
            "
            >CONTACT US</a
          >
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    requiemButt() {
      this.$router.push("/");
      this.menuOpen = false;
    },
    biographyButt() {
      this.$router.push("/biography");
      this.menuOpen = false;
    },
    tributeButt() {
      this.$router.push("/tributes");
      this.menuOpen = false;
    },
    photosButt() {
      this.$router.push("/photos");
      this.menuOpen = false;
    },
    appreciationButt() {
      this.$router.push("/appreciation");
      this.menuOpen = false;
    },
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "dark" ? "light" : "dark";
    },
  },
};
</script>

<style scoped>
.slide-menu-enter {
  transform: translateY(-100px);
  opacity: 0;
}

.slide-menu-enter-active,
.slide-menu-leave-active {
  transition: all 0.5s ease;
}

.slide-menu-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

a.nuxt-link-exact-active {
  color: hsl(54, 100%, 51%);
}
</style>