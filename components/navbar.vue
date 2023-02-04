<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="
          flex flex-wrap
          justify-between
          items-center
          mx-auto
          max-w-screen-xl
          px-4
          md:px-6
          py-2.5
        "
      >
        <NuxtLink to="/" class="flex items-center">
          <img :src="logo" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        </NuxtLink>
        <div class="flex items-center">
          <NuxtLink
            to="/signUp"
            class="
              text-sm
              font-medium
              text-blue-600
              dark:text-blue-500
              hover:underline
              mr-6
            "
            >Sign Up</NuxtLink
          >
          <NuxtLink
            to="/login"
            class="
              text-sm
              font-medium
              text-blue-600
              dark:text-blue-500
              hover:underline
            "
            >Login</NuxtLink
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import logo from "~/assets/img/logo.png";
export default {
  data() {
    return {
      logo,
    };
  },
};
</script>