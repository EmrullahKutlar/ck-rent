<template>
  <section>
    <mainCarousel />
    <div>
      <datePicker />
    </div>
  </section>
</template>

<script>
import mainCarousel from '~/components/carousels/mainCarousel.vue'
import datePicker from '~/components/forms/datePicker.vue'
export default {
  components: { mainCarousel, datePicker },
  layout: 'default',
}
</script>
