<template>
  <div class="container-fuild" style="margin-top: 56px">
    <div class="row d-flex mb-5" style="margin: 0 !important" v-if="!payment">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 carSlider mb-5">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="3000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="380"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <!-- caption="First slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum." 
      bu kısım b-carousel icine yaziliyor -->
          <b-carousel-slide
            :img-src="require('~/assets/cars/' + tbody.carsImagePath)"
          ></b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
        </b-carousel>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 mt-3 mb-5">
        <div class="car-title">{{ tbody.name }}</div>
        <div class="properties properties-borders mt-4">
          <div class="properties-item">
            <span class="properties-item-title">{{ $t(`Person`) }}</span>
            <span class="properties-item-icon">
              <i class="icon-bag2"></i> <em>{{ tbody.people }}</em>
            </span>
          </div>
          <div class="properties-item">
            <span class="properties-item-title">{{ $t(`Luggage`) }}</span>
            <span class="properties-item-icon">
              <i class="icon-bag2"></i> <em>{{ tbody.luggage }}</em>
            </span>
          </div>
          <div class="properties-item">
            <span class="properties-item-title">{{ $t(`Gear`) }}</span>
            <span class="properties-item-icon">
              <i class="nxm-ico-vitesicon"></i> <em>{{ tbody.gear }}</em>
            </span>
          </div>

          <div class="properties-item">
            <span class="properties-item-title">{{ $t(`Fuel`) }}</span>
            <span class="properties-item-icon">
              <i class="icon-car"></i> <em> {{ tbody.fuel }} </em>
            </span>
          </div>

          <div class="properties-item">
            <span class="properties-item-title">{{ $t(`DailyFee`) }}</span>
            <span class="properties-item-icon">
              <i class="icon-credit-card"></i> <em>{{ tbody.rentFee }}</em>
            </span>
          </div>
        </div>
        <div class="row d-flex justify-content-around">
          <div
            class="col-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center mt-4"
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
            class="col-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center mt-4"
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
        </div>

        <div class="col-12 d-flex justify-content-center mt-4">
          <b-button variant="success" @click="fi()">{{ $t(`Rent`) }}</b-button>
        </div>
      </div>
    </div>
    <div class="row d-flex" v-if="payment">
      <div class="container mt-2 mb-3">
        <div class="col-12 col-md-4 offset-md-4">
          <div class="card">
            <div class="card-header">
              <div class="row d-flex justify-content-center">
                <h3 class="text-center">{{$t(`TotalFee`)}}</h3>
                <div class="col-12 text-center">
                  <h4>{{ toplamGun * tbody.rentFee }}₺</h4>
                </div>
              </div>
            </div>
            <div class="card-block">
              <form role="form">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label>{{$t(`CartNumber`)}}</label>
                      <div class="input-group">
                        <input
                          type="tel"
                          class="form-control"
                          :placeholder="$t(`CartNumber`)"
                        />
                        <span class="input-group-addon"
                          ><span class="fa fa-credit-card"></span
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-7 col-md-7">
                    <div class="form-group">
                      <label
                        >{{$t(`ExpirationDate`)}}</label
                      >
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="MM / YY"
                      />
                    </div>
                  </div>
                  <div class="col-5 col-md-5 float-right">
                    <div class="form-group">
                      <label>CVV</label>
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label>{{$t(`CardOwner`)}}</label>
                      <input
                        type="text"
                        class="form-control"
                        :placeholder="$t(`CardOwner`)"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-12">
                  <button class="btn btn-success btn-lg btn-block">
                    {{$t(`ConfirmPayment`)}}</button
                  ><button
                    class="btn btn-danger btn-lg btn-block"
                    @click="goHome"
                  >
                    {{$t(`Cancel`)}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from '~/components/carousels/mainCarousel.vue'
export default {
  components: {
    carousel,
  },
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
      slide: 0,
      sliding: null,
      payment: false,
      hideHeader: true,
      alis: '',
      teslim: '',
      min: minDate,
      max: maxDate,
      minTeslimDate: '',
      maxTeslimDate: '',
      toplamGun: '',
    }
  },
  async asyncData({ $axios, params }) {
    const model = params.model

    const response = await $axios.$get(
      `https://ckrent.tk/api/CarApi/GetByCar/(id)?id=${model}`
    )

    var tbody = response

    if (tbody != null) {
      return { tbody }
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },

    fi() {
      if (this.teslim.length <= 0) {
       this.$toast
            .error(`Lütfen Alış ve Teslim Tarihi Seçiniz`)
            .goAway(1500)
      } else {
        this.hesapla()
        this.payment = true
      }
    },
    goHome() {
      this.$router.push('/')
      this.payment = false
    },
    hesapla() {
      var teslim = (this.teslim = new Date(this.teslim))
      var alis = (this.alis = new Date(this.alis))
      var zamanFark = Math.abs(teslim.getTime() - alis.getTime())
      var gunFark = Math.ceil(zamanFark / (1000 * 3600 * 24))
      this.toplamGun = gunFark
    },
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

<style scoped>
.carSlider {
  padding: 0;
}
.car-title {
  color: #44a55a;
  text-align: center;
  font-size: 25px;
}
.properties-borders {
  border: 1px solid #c3c3c3;
}
.date-picker2 {
  display: flex;
}

.properties {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
}
.properties-borders .properties-item {
  padding: 10px 0;
  border-right: 1px solid #c3c3c3;
}
.properties-borders .properties-item {
  border-right: none !important;
}
.properties-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.properties-item-title {
  font-size: 17px;
  font-weight: 500;
}
.properties-item-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

/* Credit Card Form*/
.cc-img {
  margin: 0 auto;
}
form {
  padding: 0 3%;
}
.fa .fa-credit-card {
  font-size: 38px !important;
}
</style>
