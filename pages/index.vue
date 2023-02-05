<template>
  <div>
    <div class="container mx-auto">
      <img
        class="h-auto max-w-md mx-auto"
        :src="logo"
        alt="image description"
      />

      <div class="heading">
        <h1 class="text-5xl font-extrabold dark:text-dark uppercase">
          membership registration
        </h1>
      </div>
      <br />
      <h3 class="text-3xl font-bold dark:text-dark">
        Welcome to GATHS Application Portal.
      </h3>

      <p class="text-gray-500 dark:text-gray-400">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
      <hr
        class="
          w-48
          h-1
          mx-auto
          my-4
          bg-gray-100
          border-0
          rounded
          md:my-10
          dark:bg-gray-700
        "
      />
      <p class="text-gray-500 dark:text-gray-400">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease, with a complete audit
        trail for every change.
      </p>
      <br />
    </div>
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
<script setup>

</script>
  <style>
.heading {
  background-color: rgb(27, 95, 229);
  height: 100%;
}
</style>