<template>
  <div class="container mb-5" style="min-height: 250px; margin-top: 75px">
    <div class="col-12 text-center">
      <h3 class="text-success mt-5">
        Şimdi Şeçili Markalardaki Suv Modellerinde %5 İndirim
      </h3>
      <div class="container">
        <div class="row">
          <div class="d-flex align-items-start col-6">
            <img
              src="../../../assets/cars/mercedesG350.jpg"
              alt=""
              style="width: 400px"
            />
          </div>
          <div class="col-6 align-items-center d-flex">
            <p style="font-size:19px">Bayiye gelip teslim alacağınız seçili  <span class="text-success">Suv</span> modellerinde %5'e varan
            indirimler sizleri bekliyor. Sizde hemen araçlara göz atıp hoşunuza
            giden arabayı en uygun fiyata kiralamak için araçlarımıza göz atın.
            Bu fırsatı kaçırmayın!!!</p>
            
          </div>
          <div class="col-12 d-flex align-items-center justify-content-center">
            <nuxt-link :to="localePath('cars')+'/suv'" class="btn btn-success"> Araçlara Göz At</nuxt-link>
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
