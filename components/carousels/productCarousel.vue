<template>
  <div class="container-fuild mt-5 mb-5" style="">
    <div class="">
      <div class="col-12 text-center mb-3">
        <h2 style="font-size: 32px; font-weight: 900; color: #44a55a">
          Favori Araçlar
        </h2>
      </div>
      <div class="">
        <hooper
          :infiniteScroll="true"
          :settings="hooperSettings"
          :centerMode="true"
        >
          <hooper-navigation slot="hooper-addons"></hooper-navigation>

          <slide v-for="(item, index) in tbody" :key="index">
            <b-card
              :title="item.name"
              :img-src="require('~/assets/cars/' + item.carsImagePath)"
              img-alt="Image"
              img-top
              tag="article"
              style="
                max-width: 20rem;
                text-align: center;
                border-radius: 20px;
                color: #44a55a;
              "
              class="mb-2"
            >
            </b-card>
          </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'
import axios from 'axios'

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,

        breakpoints: {
          2400: {
            itemsToShow: 7.3,
          },
          1664: {
            itemsToShow: 5.2,
          },
          1440: {
            itemsToShow: 4,
          },
          1336: {
            itemsToShow: 4,
          },
          1024: {
            itemsToShow: 3.05,
          },
          768: {
            itemsToShow: 2.2,
          },
          426: {
            itemsToShow: 1.9,
          },

          0: {
            itemsToShow: 1.2,
          },
        },
      },
      tbody: [],
    }
  },
  beforeCreate() {
    axios
      .get('https://ckrent.tk/api/CarApi')
      .then((response) => {
        this.tbody = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style>
.hooper {
  height: auto !important;
}
.hooper-list {
  height: auto !important;
}
.hooper-slide .card img {
  min-width: 318px;
  min-height: 267px;
}
</style>
