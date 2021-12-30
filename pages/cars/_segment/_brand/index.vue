<template>
  <div class="container" style="margin-top: 106px">
    <div class="row d-flex">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-5"
        v-for="(item, index) in tbody"
        :key="index"
      >
        <div class="card pt-2" style="width: auto">
          <img src="~/assets/cars/mercedes.png" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title text-center">{{ item.name }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Bagaj:
              <span class="veri">{{ item.luggage + ' ' }}Büyük Valiz</span>
            </li>
            <li class="list-group-item">
              Yakıt:
              <span class="veri">{{ item.fuel }}</span>
            </li>
            <li class="list-group-item">
              Vites:
              <span class="veri">{{ item.gear }}</span>
            </li>
            <li class="list-group-item">
              Kapı:
              <span class="veri">{{ item.doors }}</span>
            </li>
            <li class="list-group-item">
              Günlük Ücret:
              <span class="veri">{{ item.rentFee }} ₺</span>
            </li>
          </ul>
          <div class="card-body text-center">
            <nuxt-link
              :to="'/cars/' + segment + '/' + brand + '/' + item.id"
              class="card-link"
              >Hemen Kirala</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  /*beforeCreate() {
    console.log(this.route.fullPath)
  },*/
  async asyncData({ $axios, params }) {
    console.log(params)
    const brand = params.brand
    const segment = params.segment
    console.log(brand + '' + segment)

    const response = await $axios.$post(
      'https://ckrent.tk/api/CarApi/GetBrandCategory',

      {
        Brand: brand,
        Category: segment,
      }
    )
    const tbody = response
    console.log(tbody)
    if (tbody != null) {
      return { tbody, segment, brand }
    } else console.log('bu sayfa bos')
  },
}
</script>

<style scoped>
.veri {
  margin-left: 15px;
  color: #5b5c51;
}
.list-group-item {
  color: #44a55a;

  padding: 0.1rem 1.25rem;
}
.card-text {
  color: #5b5c51;
}
.card-link,
.card-title {
  color: #44a55a;
}
.card {
  border-radius: 50% 50% 0% 0% / 5% 5% 0% 0%;
  border-color: #e9e7e7;
  box-shadow: 10px 10px rgba(134, 134, 134, 0.15);
  transition: all 0.4s ease;
}
.card:hover {
  border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;
  box-shadow: 10px 10px rgba(88, 88, 88, 0.25);
}
</style>
