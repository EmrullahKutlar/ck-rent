<template>
  <div class="container-fuild mt-5 mb-5" style="">
    <div class="">
      <div class="col-12 text-center mb-2">
        <h2 style="font-size: 32px; font-weight: 900">Favori Araçlar</h2>
      </div>
      <div class="">
        <hooper
          :infiniteScroll="true"
          :settings="hooperSettings"
          :centerMode="true"
        >
          <hooper-navigation slot="hooper-addons"></hooper-navigation>

          <slide v-for="i in 10" :key="i">
            <b-card
              title="Card Title"
              img-src="~/assets/cars/mercedes.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; text-align: center; border-radius: 20px"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button
                style="display: flex; justify-content: center"
                href="#"
                variant="success"
                >Go somewhere</b-button
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
    }
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
</style>
