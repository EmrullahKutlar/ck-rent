<template>
  <div class="container" style="margin-top: 106px">
    <div class="row d-flex">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-5"
        v-for="i in 6"
        :key="i"
      >
        <div class="card pt-2" style="width: auto">
          <img src="~/assets/cars/mercedes.png" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title text-center">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Bagaj:
              <span class="veri">356L</span>
            </li>
            <li class="list-group-item">
              Motor:
              <span class="veri">1.6 Diesel</span>
            </li>
            <li class="list-group-item">
              Kapı:
              <span class="veri">4</span>
            </li>
            <li class="list-group-item">
              KM:
              <span class="veri">1820</span>
            </li>
            <li class="list-group-item">
              Günlük Ücret:
              <span class="veri">280 TL</span>
            </li>
          </ul>
          <div class="card-body text-center">
            <a href="#" class="card-link">Hemen Kirala</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ Motor: '1.6 Diesel', Kapı: '4', Bagaj: '310 L', Renk: 'Gri' }],
    }
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
