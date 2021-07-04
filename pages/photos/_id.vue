<template>
  <div class="bg-gray-800 dark:bg-gray-100 w-full h-screen">
    <div class="max-w-3xl mx-auto z-50">
      <div
        class="
          fixed
          overflow-x-hidden overflow-y-auto
          inset-0
          flex flex-col
          justify-center
          items-center
          z-50
        "
      >
        <div class="relative">
          <div
            class="
              relative
              rounded-lg
              overflow-hidden
              bg-white
              w-full
              shadow-2xl
              flex flex-col
              transform
              transition
              duration-500
              scale-105
              my-64
            "
          >
            <img
              :src="photo.image"
              alt="selected photo"
              class="w-full object-cover object-top"
            />
            
            <p class="p-4 text-gray-800 text-center tracking-wide">
              {{ photo.caption }}
            </p>
            <button
              @click="$router.back()"
              class="
                absolute
                top-0
                right-0
                mt-2
                mr-4
                bg-red-200
                px-2
                py-1
                text-sm
                text-red-500
                tracking-wide
                font-semibold
                rounded-lg
                focus:outline-none
                focus:shadow-outline
              "
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="absolute inset-0 z-40 opacity-25 bg-black min-h-screen"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  layout: "photo",
  data() {
    return {
      photo: Object,
    };
  },
  async asyncData({ $strapi, route }) {
    const id = route.params.id;
    const photo = await $strapi.$goodbyes.findOne(id);
    return { photo };
  },
};
</script>
