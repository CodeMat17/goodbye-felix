<template>
  <div class="min-h-screen w-full bg-gray-800 dark:bg-gray-100">
    <div class="px-4 py-8 max-w-2xl mx-auto text-gray-200">
      <h1
        class="
          text-gray-200
          dark:text-gray-800
          text-center text-xl
          sm:text-2xl
          tracking-widest
          font-semibold
        "
      >
        APPRECIATION
      </h1>
      <img :src="salute" alt="dad salute img" class="mt-6 mx-auto" />

      <br />
      <div
        class="
          text-gray-200
          dark:text-gray-800
          tracking-widest
          text-lg
          sm:text-xl
        "
      >
        <p>
          The entire family of Chukwu Felix sincerely appreciates the Onyeisi
          nchu aja, our Parish Priest, Rev. Fr. Anthony Amadi for his care,
          support, understanding, and encouragement in our time of grief. We
          cannot thank you enough, but we ask God Almighty to continue to bless
          you now and always.
        </p>
        <br />
        <p>
          We also appreciate the care, the physical and spiritual support of the
          Spiritual Director of the Felix Chukwu's family, Rev. Fr. Orjiene. May
          God replenish your strength as a human and in the priesthood.
        </p>
        <br />
        <p>
          Our deepest gratitude to all those who have stood by us since the
          death of our Daddy.
        </p>
        <br />
        <p>
          Special appreciation to relatives, in-laws, numerous friends and
          well-wishers who found time to attend the funeral ceremony in honor of
          our Late father, Sgt Felix Chukwu (rtd).
        </p>
        <br />
        <p>
          We thank all those who have in one way or the other identified with us
          morally, spiritually, and financially, may God Almighty bless and
          reward you all unlimitedly.
        </p>
        <br />
        <p>
          As you have come here to condole with us and pay your last respect to
          our Daddy, when you are set to go back, may God Almighty take you to
          your respective destinations safely.
        </p>
        <br />
        <p>Thank you and God bless you all.</p>
        <br /><br />
        <p>Engr. Chukwu A. Matthew</p>
        <p class="text-gray-500">For the family</p>
      </div>
      <div class="mt-6 flex justify-between items-center">
        <button
          @click="$router.back()"
          class="
            shadow-lg
            p-2
            rounded-md
            text-gray-200
            tracking-wider
            dark:text-gray-800
            focus:outline-none
            focus:shadow-outline
          "
        >
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
            <p class="text-xs tracking-widest font-semibold">BACK</p>
          </div>
        </button>

        <a
          href="https://matthewchukwu.netlify.app/"
          target="_blank"
          class="
            p-2
            rounded-md
            text-gray-800
            bg-gray-200
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <p class="font-semibold tracking-widest text-xs">CONTACT US</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  asyncData({ $cloudinary }) {
    const salute = $cloudinary.image.url("goodbye/salute", {
      quality: "auto",
      crop: "thumb",
      radius: "max",
    });
    return { salute };
  },
};
</script>