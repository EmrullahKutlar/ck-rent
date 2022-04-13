<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12">
        <h2
          class="text-center"
          style="font-size: 32px; font-weight: 900; color: #44a55a"
        >
          {{ $t(`Campaigns`) }}
        </h2>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <b-card class="text-center">
          <img style="width: 100%" src="../../assets/cars/mercedesG350.jpg" />
          <template #header>
            <h6 class="mb-0" style="color: #44a55a">
              {{ $t(`Discount1`) }}
            </h6>
          </template>
          <!-- <b-card-text
            style="font-weight: 600; font-size: 19px; color: #44a55a"
            >{{ $t(`SubTitle`) }}</b-card-text
          > -->
          <b-card-text style="color: #44a55a">Bayiye gelip teslim alacağınız seçili  <span class="text-success">Suv</span> modellerinde %5'e varan
            indirimler sizleri bekliyor.</b-card-text>
          <nuxt-link
            :to="localePath('kampanyalar') + '/suv-kampanya'"
            class="btn btn-success"
          >
            {{ $t(`Open`) }}</nuxt-link
          >
        </b-card>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <b-card class="text-center">
          <img style="width: 100%" src="../../assets/cars/CitroenCElysee.png" />
          <template #header>
            <h6 class="mb-0" style="color: #44a55a">
              {{ $t(`Discount1`) }}
            </h6>
          </template>
          <!-- <b-card-text
            style="font-weight: 600; font-size: 19px; color: #44a55a"
            >{{ $t(`SubTitle`) }}</b-card-text
          > -->
          <b-card-text style="color: #44a55a">Bayiye gelip teslim alacağınız seçili
              <span class="text-success">Ekonomik</span> modellerinde +1 gün
              fırsatı sizleri bekliyor.</b-card-text>
          <nuxt-link
            :to="localePath('kampanyalar') + '/ekonomik-kampanya'"
            class="btn btn-success"
          >
            {{ $t(`Open`) }}</nuxt-link
          >
        </b-card>
      </div>
       <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <b-card class="text-center">
          <img style="width: 100%" src="~/assets/cars/mercedesE200.png" />
          <template #header>
            <h6 class="mb-0" style="color: #44a55a">
              {{ $t(`Discount1`) }}
            </h6>
          </template>
          <!-- <b-card-text
            style="font-weight: 600; font-size: 19px; color: #44a55a"
            >{{ $t(`SubTitle`) }}</b-card-text
          > -->
          <b-card-text style="color: #44a55a">  Vip aracınızı siz nereye isterseniz oraya getiriyor, nereye
              bırakacaksanız oradan iade alıyoruz.</b-card-text>
          <nuxt-link
            :to="localePath('kampanyalar') + '/vip-kampanya'"
            class="btn btn-success"
          >
            {{ $t(`Open`) }}</nuxt-link
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
  border: none !important;
}
.card-header {
  background: inherit;
  border: none;
  min-height: 72px;
}
.card-header h6 {
  font-weight: 600;
  font-size: 20px;
}
</style>
