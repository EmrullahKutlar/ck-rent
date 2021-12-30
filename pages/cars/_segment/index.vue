<template>
  <div class="container mb-3" style="min-height: 300px; margin-top: 75px">
    <div class="col-12">
      <h2
        class="text-center"
        style="color: #44a55a; text-transform: capitalize"
      >
        {{ segment }}
      </h2>
    </div>
    <div class="row">
      <div class="col d-flex nav-link-div">
        <nuxt-link to="/" class="nav-links">Anasayfa</nuxt-link>
        <i class="fas fa-chevron-right nav-links"></i>
        <nuxt-link to="/cars" class="nav-links">Tüm Segmentler</nuxt-link>
        <i class="fas fa-chevron-right nav-links"></i>
        <div style="text-transform: capitalize">{{ segment }}</div>
      </div>
    </div>
    <div class="row mt-3">
      <div
        class="
          col-12 col-sm-2 col-md-3 col-lg-3 col-xl-4
          text-center
          mb-4
          segments
        "
      >
        <div class="col-12 car-card">
          <div class="col-12">
            <nuxt-link :to="'/cars/' + segment + '/mercedes'"
              ><img style="width: 80%" src="~/assets/brands/mercedes.png"
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="
          col-12 col-sm-2 col-md-3 col-lg-3 col-xl-4
          text-center
          mb-4
          segments
        "
      >
        <div class="col-12 car-card">
          <div class="col-12">
            <nuxt-link :to="'/cars/' + segment + '/jeep'"
              ><img style="width: 80%" src="~/assets/brands/jeep.png"
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="
          col-12 col-sm-2 col-md-3 col-lg-3 col-xl-4
          text-center
          mb-4
          segments
        "
      >
        <div class="col-12 car-card">
          <div class="col-12">
            <nuxt-link :to="'/cars/' + segment + '/renault'"
              ><img style="width: 80%" src="~/assets/brands/renault.png"
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="
          col-12 col-sm-2 col-md-3 col-lg-3 col-xl-4
          text-center
          mb-4
          segments
        "
      >
        <div class="col-12 car-card">
          <div class="col-12">
            <nuxt-link :to="'/cars/' + segment + '/peugeot'"
              ><img style="width: 80%" src="~/assets/brands/peugeot.png"
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="
          col-12 col-sm-2 col-md-3 col-lg-3 col-xl-4
          text-center
          mb-4
          segments
        "
      >
        <div class="col-12 car-card">
          <div class="col-12">
            <nuxt-link :to="'/cars/' + segment + '/citroen'"
              ><img style="width: 80%" src="~/assets/brands/citroen.png"
            /></nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="
          col-12 col-sm-2 col-md-3 col-lg-3 col-xl-4
          text-center
          mb-4
          segments
        "
      >
        <div class="col-12 car-card">
          <div class="col-12">
            <nuxt-link :to="'/cars/' + segment + '/crawler'"
              ><img style="width: 80%" src="~/assets/brands/crawler.jpg"
            /></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const segment = params.segment
    return { segment }
  },
}
</script>

<style scoped>
.col-12 {
  color: white !important;
}
.car-card {
  align-items: center;
  display: grid;
  min-height: 235px;
  border-radius: 35px;
  border-bottom: 2px solid #44a55a;
  border-top: 2px solid #44a55a;

  cursor: pointer;
}
.car-title {
  color: #44a55a;
  text-decoration: none;
  font-size: 28px;
  font-weight: 500;
}
</style>
