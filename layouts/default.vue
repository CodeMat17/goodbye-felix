<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="
        text-center
        tracking-wider
        text-red-500
        font-semibold
        p-2
        bg-red-200
      "
    >
      Your internet is OFF or very POOR at the moment. Try to reconnect.
    </div>
    <Header class="sticky top-0 z-50" />
    <transition name="slide-fade" mode="out-in" appear>
      <Nuxt />
    </transition>
  </div>
</template>

<style>
html {
  font-family: "Handlee", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.sacramento {
  font-family: "Sacramento";
}

.slide-fade-enter {
  transform: translateY(100px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s ease;
}

.slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
