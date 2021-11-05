<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/navbars/navbar.vue'
import Footer from '~/components/footers/footer.vue'
export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style></style>
