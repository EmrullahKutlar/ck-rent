<template>
  <div
    class="
      container
      date-picker
      d-flex
      align-items-center
      justify-content-center
      col-12
    "
  >
    <div class="row d-flex justify-content-center">
      <div
        class="
          col-12 col-sm-12 col-md-4 col-lg-4
          d-flex
          justify-content-center
          align-items-center
          mt-3
        "
      >
        <!-- <p style="margin: 0; min-width: 95px">Alış Tarihi:</p> -->

        <b-form-datepicker
          id="datepicker-dateformat3"
          :date-format-options="{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
          }"
          :hide-header="hideHeader"
          locale="tr"
          :state="true"
          :min="min"
          :max="max"
          :placeholder="$t('PurchaseDate')"
          nav-button-variant="success"
          selected-variant="success"
          class="datepicker align-items-center"
          v-model="alis"
          today-button
          reset-button
          label-today-button="Bugün"
          today-button-variant="outline-success"
          label-reset-button="Sıfırla"
          label-help=""
        ></b-form-datepicker>
      </div>
      <div
        class="
          col-12 col-sm-12 col-md-4 col-lg-4
          d-flex
          justify-content-center
          mt-3
        "
      >
        <!-- <p style="margin: 0; min-width: 95px">Teslim Tarihini:</p> -->
        <b-form-datepicker
          id="datepicker-dateformat4"
          :date-format-options="{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
          }"
          :hide-header="hideHeader"
          locale="tr"
          :min="minTeslimDate"
          :max="maxTeslimDate"
          nav-button-variant="danger"
          selected-variant="danger"
          :placeholder="$t(`DeliveryDate`)"
          class="datepicker teslim align-items-center"
          v-model="teslim"
          label-help=""
        ></b-form-datepicker>
      </div>
      <div
        class="
          col-12 col-sm-12 col-md-4 col-lg-4
          d-flex
          justify-content-center
          mt-3
        "
      >
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>
      <div
        class="col-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center"
      >
        <b-button
          style="width: -webkit-fill-available"
          class="mt-3"
          variant="success"
          >{{$t("SearchCars")}}</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth())
    minDate.setDate(now.getDate())

    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 12)
    maxDate.setDate(31)

    return {
      hideHeader: true,
      alis: '',
      teslim: '',
      min: minDate,
      max: maxDate,
      minTeslimDate: '',
      maxTeslimDate: '',
      selected: null,
      options: [
        { value: null, text: this.$t('ChooseSegment'), disabled: true },
        { value: 'Ekonomik', text: 'Ekonomik' },
        { value: 'Orta', text: 'Orta' },
        { value: 'Vip', text: 'Vip' },
        { value: 'Suv', text: 'Suv' },
        { value: 'Sport', text: 'Sport' },
        { value: 'Karavan', text: 'Karavan' },
      ],
    }
  },
  watch: {
    alis(val) {
      val = new Date(val)
      this.minTeslimDate = new Date(
        val.getFullYear(),
        val.getMonth(),
        val.getDate() + 1
      )
      this.maxTeslimDate = new Date(
        val.getFullYear(),
        val.getMonth() + 12,
        val.getDate() + 1
      )
    },
  },
}
</script>

<style>
.datepicker {
  min-width: 260px;
  /*max-width: 300px;*/
}
.date-picker {
  min-height: 75px;
}
.b-form-btn-label-control.form-control > .btn {
  color: #dc3545;
}
.teslim {
  border: 1px solid #dc3545;
}
.was-validated .form-control:valid,
.form-control.is-valid {
  padding-right: 0 !important;
}
@media (min-width: 917px) {
  .date-picker {
    position: absolute;
    top: 75%;
    z-index: 99;
    width: 100%;
  }
}
</style>
