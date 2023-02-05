<template>
  <div>
    <div class="container mx-auto mt-10 mb-10 login">
      <form action="" @submit.prevent="handleLogin">
        <div class="container mx-auto">
          <br />
          <label
            for="website-admin"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
            >Username/Email</label
          >
          <div class="flex">
            <span
              class="
                inline-flex
                items-center
                px-3
                text-sm text-gray-900
                bg-gray-200
                border border-r-0 border-gray-300
                rounded-l-md
                dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600
              "
            >
              @
            </span>
            <input
              type="email"
              name="email"
              v-model="credentials.email"
              id="website-admin"
              class="
                rounded-none rounded-r-lg
                bg-gray-50
                border
                text-gray-900
                focus:ring-blue-500 focus:border-blue-500
                block
                flex-1
                min-w-0
                w-full
                text-sm
                border-gray-300
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="elonmusk@mail.com"
            />
          </div>
          <br />
          <label
            for="website-admin"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
            >Password</label
          >
          <div class="flex">
            <span
              class="
                inline-flex
                items-center
                px-3
                text-sm text-gray-900
                bg-gray-200
                border border-r-0 border-gray-300
                rounded-l-md
                dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600
              "
            >
              <svg
                class="w-6 h-6 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                ></path>
              </svg>
            </span>
            <input
              type="password"
              v-model="credentials.password"
              id="pwd"
              class="
                rounded-none rounded-r-lg
                bg-gray-50
                border
                text-gray-900
                focus:ring-blue-500 focus:border-blue-500
                block
                flex-1
                min-w-0
                w-full
                text-sm
                border-gray-300
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="Password"
            />
          </div>
          <br />

          <input
            type="submit"
            :value="Loading ? 'Loading' : 'Login'"
            :disabled="Loading"
            
            class="
              text-white
              bg-gradient-to-r
              from-blue-500
              via-blue-600
              to-blue-700
              hover:bg-gradient-to-br
              focus:ring-4 focus:outline-none focus:ring-blue-300
              dark:focus:ring-blue-800
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              mr-2
              mb-2
            "
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>

</script>
<style>
.login {
  height: 35em;
}
</style>