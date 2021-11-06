<template>
  <b-form-datepicker
    id="datepicker-dateformat2"
    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
    locale="en"
    :min="min"
    :max="max"
    class="emr"
  ></b-form-datepicker>
</template>

<script>
export default {
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth())
    minDate.setDate(1)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 1)
    maxDate.setDate(31)

    return {
      value: '',
      min: minDate,
      max: maxDate,
    }
  },
}
</script>

<style scoped>
.emr {
  max-width: 290px;
  margin-left: 20px;
}
</style>
