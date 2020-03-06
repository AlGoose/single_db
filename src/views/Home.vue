<template>
  <div class="home">
    <Timeline/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Timeline from "@/components/Timeline.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    Timeline
  }
};
</script>
