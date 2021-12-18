<template>
  <section class="allContent">
    <mainCarousel />
    <div>
      <datePicker />
    </div>
    <product />
    <campaigns />
  </section>
</template>

<script>
import mainCarousel from '~/components/carousels/mainCarousel.vue'
import datePicker from '~/components/forms/datePicker.vue'
import product from '~/components/carousels/productCarousel.vue'
import campaigns from '~/components/campaigns/campaigns.vue'

export default {
  components: { mainCarousel, datePicker, product, campaigns },
  layout: 'default',
}
</script>
<style></style>
