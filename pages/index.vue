<template>
  <section>
    <main-coursel />
    <div>
      <datePicker />
    </div>
  </section>
</template>

<script>
import mainCoursel from '~/components/coursels/mainCoursel.vue'
import datePicker from '~/components/forms/datePicker.vue'
export default {
  components: { mainCoursel, datePicker },
  layout: 'default',
}
</script>
