<template>
  <section class="vh-100 emr">
    <div class="container py-5 h-90">
      <div class="row d-flex justify-content-center align-items-center h-90">
        <div class="col-12">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="~/assets/login/keys.jpg"
                  alt="login form"
                  class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i
                        class="fas fa-cubes fa-2x me-3"
                        style="color: #ff6219"
                      ></i>
                      <span class="h1 fw-bold mb-0">Logo</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      Giriş Yap
                    </h5>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        class="form-control"
                        placeholder="Email"
                        v-model="user.userName"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example27"
                        class="form-control"
                        placeholder="Şifre"
                        v-model="user.password"
                      />
                    </div>

                    <div class="pt-1 mb-4">
                      <button
                        class="btn btn-success btn-lg btn-block"
                        type="button"
                        @click="userLogin"
                      >
                        Giriş Yap
                      </button>
                    </div>

                    <a
                      class="small text-muted"
                      href="#!"
                      style="color: #e53434 !important"
                      >Şifremi Unuttum</a
                    >
                    <p class="mb-5 pb-lg-2" style="color: #393f81">
                      Henüz bir hesabın yok mu?
                      <button
                        @click.prevent
                        class="register-b"
                        @click="register = !register"
                      >
                        Kayıt Ol
                      </button>
                    </p>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
                  </form>
                  <b-modal
                    v-model="register"
                    hide-footer
                    centered
                    header-bg-variant="success"
                    header-text-variant="light"
                    title="Kayıt Ol"
                    ><form>
                      <div class="form-outline mb-4">
                        <input
                          type="Name"
                          class="form-control"
                          placeholder="İsim Soyisim"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Şifre"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Şifre Tekrar"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <b-form-file
                          v-model="selfie"
                          placeholder="Selfie Yükleyin"
                          drop-placeholder="Dosyayı Buraya Sürükleyin"
                          browse-text="Yükle"
                          accept="image/*"
                        ></b-form-file>
                      </div>
                      <div class="form-outline mb-4">
                        <b-form-file
                          v-model="selfie"
                          placeholder="Ehliyetinizi Yükleyin"
                          drop-placeholder="Dosyayı Buraya Sürükleyin"
                          browse-text="Yükle"
                          accept="image/*"
                        ></b-form-file>
                      </div>
                      <div class="form-outline mb-2">
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="status"
                          name="checkbox-1"
                          value="accepted"
                          unchecked-value="not_accepted"
                        >
                          <button
                            class="register-b"
                            @click.prevent
                            @click="uyelikSoz = !uyelikSoz"
                          >
                            Üyelik Sözleşmesi
                          </button>
                          ve
                          <button
                            class="register-b"
                            @click.prevent
                            @click="gizlikSoz = !gizlikSoz"
                          >
                            Gizlilik Politikası</button
                          >'nı Kabul Ediyorum
                        </b-form-checkbox>
                      </div>
                      <div class="form-outline mb-2">
                        <button
                          class="btn btn-success btn-lg btn-block"
                          type="button"
                        >
                          Kayıt Ol
                        </button>
                      </div>
                    </form>
                  </b-modal>
                  <b-modal
                    v-model="uyelikSoz"
                    hide-footer
                    centered
                    header-bg-variant="success"
                    header-text-variant="light"
                    title="Üyelik Sözleşmesi"
                    ><register
                  /></b-modal>
                  <b-modal
                    v-model="gizlikSoz"
                    hide-footer
                    centered
                    header-bg-variant="success"
                    header-text-variant="light"
                    title="Gizlilik Sözleşmesi"
                    ><register
                  /></b-modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import register from '~/components/register/register.vue'
export default {
  components: { register },
  data() {
    return {
      user: {
        userName: '',
        password: '',
      },
      register: false,
      uyelikSoz: false,
      gizlikSoz: false,
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.user })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style scoped>
.emr {
  margin: 2.5rem 0 5rem 0;
}
.card {
  max-height: 600px !important;
}
.img-fluid {
  height: 600px !important;
}
/*@media (max-width: 475px) {
  .emr {
    margin: 1rem 0 -4rem;
  }
}*/
.register-b {
  background: unset;
  border: unset;
  color: #28a745;
}
.bg-success {
  background-color: #44a55a !important;
}
</style>
