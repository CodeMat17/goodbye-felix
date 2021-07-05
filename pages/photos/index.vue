<template>
  <div class="bg-gray-800 dark:bg-gray-100 w-full min-h-screen">
    <div class="px-4 py-8 max-w-5xl mx-auto text-gray-200 dark:text-gray-800">
      <h1 class="text-center font-bold text-xl sm:text-2xl tracking-widest">
        GALLERY
      </h1>
      <div class="my-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="photo in photos"
          :key="photo.id"
          class="
            relative
            bg-white
            rounded-lg
            shadow-xl
            overflow-hidden
            transform
            transition
            duration-500
            hover:scale-110
          "
        >
          <n-link :to="{ name: 'photos-id', params: { id: photo.id } }">
            <div v-if="!photo.image" class="flex justify-center py-12">
              <svg class="animate-spin text-blue-500" style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                />
              </svg>
            </div>
            <div v-else>
              <img
                :src="photo.image"
                alt="photo gallery"
                class="h-64 w-full object-cover object-top"
              />
            </div>

            <p class="text-center text-gray-800 p-4 tracking-wider">
              {{ photo.caption }}
            </p>
            <p v-if="photo.image"
              class="
                absolute
                top-0
                right-0
                m-2
                p-1
                bg-blue-100 bg-opacity-25
                text-blue-500
                tracking-wide
                rounded-md
              "
            >
              Tap for full view
            </p>
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   mounted () {
  window.scrollTo(0, 0)
},
  data() {
    return {
      photos: {},
    };
  },

  async asyncData({ $strapi }) {
    const photos = await $strapi.$goodbyes.find();
    return { photos };
  },
};
</script>