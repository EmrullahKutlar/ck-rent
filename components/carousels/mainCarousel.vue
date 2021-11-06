<template>
  <div class="emr">
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
        img-src="~/assets/carousel/landRover.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="~/assets/carousel/toyotaBz4x.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="~/assets/carousel/mercedesAmg.jpg">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="~/assets/carousel/miniCooper.jpg"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="380"
            src="~/assets/carousel/hyundai20.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br />
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
<style scoped>
.emr {
  margin-top: 56px;
}
@media (max-width: 475px) {
  .emr {
    margin-top: 50px !important;
  }
}
</style>
