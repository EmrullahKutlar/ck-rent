<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12">
        <h2
          class="text-center"
          style="font-size: 32px; font-weight: 900; color: #44a55a"
        >
          Kampanyalar
        </h2>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <b-card class="text-center">
          <img style="width: 100%" src="~/assets/cars/mercedes.png" />
          <template #header>
            <h6 class="mb-0" style="color: #44a55a">
              Seçili Suv Modellerinde %25'e Varan İndirimler
            </h6>
          </template>
          <b-card-text style="font-weight: 600; font-size: 19px; color: #44a55a"
            >Alt Baslık2</b-card-text
          >
          <b-card-text style="color: #44a55a"
            >Header and footers using slots.</b-card-text
          >
          <b-button href="#" variant="success">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <b-card class="text-center">
          <img style="width: 100%" src="~/assets/cars/mercedes.png" />
          <template #header>
            <h6 class="mb-0" style="color: #44a55a">
              Seçili Suv Modellerinde %25'e Varan İndirimler
            </h6>
          </template>
          <b-card-text style="font-weight: 600; font-size: 19px; color: #44a55a"
            >Alt Baslık</b-card-text
          >
          <b-card-text style="color: #44a55a"
            >Header and footers using slots.</b-card-text
          >
          <b-button href="#" variant="success">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <b-card class="text-center">
          <img style="width: 100%" src="~/assets/cars/mercedes.png" />
          <template #header>
            <h6 class="mb-0" style="color: #44a55a">
              Online Ödemelerde %10 İndirim
            </h6>
          </template>
          <b-card-text style="font-weight: 600; font-size: 19px; color: #44a55a"
            >Alt Baslık</b-card-text
          >
          <b-card-text style="color: #44a55a"
            >Header and footers using slots.</b-card-text
          >
          <b-button href="#" variant="success">Go somewhere</b-button>
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
