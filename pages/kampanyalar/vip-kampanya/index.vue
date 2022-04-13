<template>
  <div class="container mb-5" style="min-height: 250px; margin-top: 75px">
    <div class="col-12 text-center">
      <h3 class="text-success mt-5">ADRESE TESLİM HİZMETİ</h3>
      <div class="container">
        <div class="row">
          <div class="d-flex align-items-start col-6">
            <img
              src="../../../assets/cars/mercedesE200.png"
              alt=""
              style="width: 400px"
            />
          </div>
          <div class="col-6 align-items-center d-flex">
            <p style="font-size: 19px">
              Vip aracınızı siz nereye isterseniz oraya getiriyor, nereye
              bırakacaksanız oradan iade alıyoruz. Kiralanan araç, İstanbul,
              Ankara, İzmir, Antalya, Bodrum Çanakkale, Çorlu, Dalaman, Denizli,
              Kocaeli, Konya, Kuşadası, Marmaris, Malatya, Manisa, Ordu, Samsun,
              Trabzon 'da, belirtilen ilçe sınırları içerisinde talep edilen
              konuma teslim edilir ve aynı şartlarda dilediğiniz noktadan sadece
              ck-Rent tarafından teslim alınır. Siz yorulmayın biz hem teslim eder hem de teslim alırız.
            </p>
          </div>
          <div class="col-12 d-flex align-items-center justify-content-center">
            <nuxt-link
              :to="localePath('cars') + '/vip'"
              class="btn btn-success"
            >
              Araçlara Göz At</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
