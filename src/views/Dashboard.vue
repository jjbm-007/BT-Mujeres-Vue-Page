<template>

  <div class="dashboard">
      <Navbar />
      <div class="container">
          <router-view />
      </div>
      <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "Dashboard",
  components: {
    Navbar,
    Footer,
  },

}
</script>

<style>

</style>