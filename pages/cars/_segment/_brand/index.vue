<template>
  <div class="container" style="margin-top: 106px">
    <div class="row d-flex" v-if="tbody">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-5"
        v-for="(item, index) in tbody"
        :key="index"
      >
        <div class="card pt-2" style="width: auto">
           <img
            :src="require('~/assets/cars/' + item.carsImagePath)"
            class="card-img-top"
            alt=""
          /> 
          <div class="card-body">
            <h5 class="card-title text-center">{{ item.name }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              {{$t(`Luggage`)}}:
              <span class="veri">{{ item.luggage + ' ' }}L</span>
            </li>
            <li class="list-group-item">
              {{$t(`Fuel`)}}:
              <span class="veri">{{ $t(item.fuel) }}</span>
            </li>
            <li class="list-group-item">
              {{$t(`Gear`)}}:
              <span class="veri">{{ item.gear }}</span>
            </li>
            <li class="list-group-item">
              {{$t(`Door`)}}:
              <span class="veri">{{ item.doors }}</span>
            </li>
            <li class="list-group-item">
              {{$t(`DailyFee`)}}:
              <span class="veri">{{ item.rentFee }} ₺</span>
            </li>
          </ul>
          <div class="card-body text-center">
            <nuxt-link
              :to="localePath(`cars`)+`/` + segment + '/' + brand + '/' + item.id"
              class="card-link"
              >{{$t(`RentNow`)}}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="min-height: 300px" v-else>
      <div class="col-12 text-center" style="font-size: 25px; color: #44a55a">
        {{ $t(`WaitSegment`) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  async asyncData({ $axios, params }) {
    const brand = params.brand
    const segment = params.segment

    const response = await $axios.$post(
      'https://ckrent.tk/api/CarApi/GetBrandCategory',

      {
        Brand: brand,
        Category: segment,
      }
    )
    const tbody = response
    if (tbody.length != 0) {
      return { tbody, segment, brand }
    } else {
      var bos = `WaitSegment`
    }
    return { bos }
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
  box-shadow: 10px 10px #85dd99;
}
</style>
