<template>
  <!-- Remove the container if you want to extend the Footer to full width. -->
  <div class="container-fuild">
    <!-- Footer -->
    <footer
      class="text-center text-lg-start text-white"
      style="background-color: #5bb386"
    >
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-between p-4"
        style="background-color: #3eb176"
      >
        <!-- Left -->
        <div class="me-5">
          <span>Bizimle Sosyal Medyadan İletişime Geçin:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold">CK-Rent</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #fff; height: 2px"
              />
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Araçlar</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #fff; height: 2px"
              />
              <p>
                <nuxt-link to="/cars/ekonomik/renault/30" class="text-white">
                  Renault Symbol
                </nuxt-link>
              </p>
              <p>
                <nuxt-link to="/cars/ekonomik/peugeot/28" class="text-white">
                  Peugeot 301
                </nuxt-link>
              </p>
              <p>
                <nuxt-link to="/cars/vip/mercedes/8" class="text-white">
                  Mercedes E200
                </nuxt-link>
              </p>
              <p>
                <nuxt-link to="/cars/suv/jeep/14" class="text-white">
                  Jeep Renegade T Sport
                </nuxt-link>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Yararlı Linkler</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #fff; height: 2px"
              />
              <p>
                <nuxt-link to="/rezervasyon" class="text-white">
                  Rezarvasyon
                </nuxt-link>
              </p>
              <p>
                <nuxt-link to="/kampanyalar" class="text-white">
                  Kampanyalar
                </nuxt-link>
              </p>
              <p>
                <nuxt-link to="/iletisim" class="text-white">
                  İletisim
                </nuxt-link>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">İletişim</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #fff; height: 2px"
              />
              <p><i class="fas fa-home mr-3"></i> Türkiye / Kütayha</p>
              <p><i class="fas fa-envelope mr-3"></i> ck-rent@destek.com</p>
              <p><i class="fas fa-phone mr-3"></i> + 90 234 567 88</p>
              <p><i class="fas fa-print mr-3"></i> + 90 234 567 89</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgb(13 165 87)">
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">Ck-Rent.com</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
  <!-- End of .container -->
</template>

<script>
export default {}
</script>

<style scoped>
h6 {
  color: rgb(255, 255, 255) !important;
}
p,
a {
  color: rgb(255, 255, 255) !important;
}
.text-white {
  color: white !important;
}
</style>
