<template>
  <section class="emr">
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
                      {{$t(`Login`)}}
                    </h5>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        class="form-control"
                        placeholder="Email*"
                        required
                        :class="{
                          error: bosForm,
                        }"
                        v-model="user.email"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example27"
                        class="form-control"
                        :placeholder="$t(`Password`)+`*`"
                        required
                        :class="{
                          error: bosForm,
                        }"
                        v-model="user.password"
                      />
                    </div>

                    <div class="pt-1 mb-4">
                      <button
                        class="btn btn-success btn-lg btn-block"
                        type="button"
                        @click="Login"
                      >
                        {{$t(`Login`)}}
                      </button>
                    </div>

                    <button
                      class="register-b"
                      style="color: #e53434 !important"
                      @click.prevent
                      @click="sifremiUnuttum = !sifremiUnuttum"
                    >
                      {{$t(`ForgotPass`)}}
                    </button>
                    <p class="mb-5 pb-lg-2" style="color: #393f81">
                      {{$t(`NoAccount`)}}
                      <button
                        @click.prevent
                        class="register-b"
                        @click="register = !register"
                      >
                        {{$t(`Register`)}}
                      </button>
                    </p>
                  </form>
                  <b-modal
                    v-model="register"
                    hide-footer
                    centered
                    header-bg-variant="success"
                    header-text-variant="light"
                    :title="$t(`Register`)"
                    ><form>
                      <div class="form-outline mb-4">
                        <input
                          type="Name"
                          class="form-control"
                          :placeholder="$t(`NameSurname`)"
                          v-model="newUser.fullName"
                          :class="{
                            error: validation.hasError('newUser.fullName'),
                          }"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <span
                          style="font-size: 11px; color: red"
                          v-if="validation.hasError('newUser.email')"
                        >
                          {{$t(`PleaseValidMail`)}}
                        </span>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email*"
                          v-model="newUser.email"
                          :class="{
                            error: validation.hasError('newUser.email'),
                          }"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          class="form-control"
                          :placeholder="$t(`RegisterPass`)"
                          v-model="newUser.password"
                          :class="{
                            error: validation.hasError('newUser.password'),
                          }"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <span
                          style="font-size: 11px; color: red"
                          v-if="validation.hasError('newUser.rePassword')"
                        >
                          {{$t(`PasswordNotSame`)}}
                        </span>
                        <input
                          type="password"
                          class="form-control"
                          :placeholder="$t(`ConfirmPass`)"
                          :class="{
                            error: validation.hasError('newUser.rePassword'),
                          }"
                          v-model="newUser.rePassword"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <b-form-file
                          :placeholder="$t(`UploadSelfie`)"
                          drop-placeholder="Dosyayı Buraya Sürükleyin"
                          :browse-text="$t(`Upload`)"
                          accept="image/*"
                          v-model="newUser.selfie"
                          :class="{
                            error: validation.hasError('newUser.selfie'),
                          }"
                        ></b-form-file>
                      </div>
                      <div class="form-outline mb-4">
                        <b-form-file
                          :placeholder="$t(`UploadDriver`)"
                          drop-placeholder="Dosyayı Buraya Sürükleyin"
                          :browse-text="$t(`Upload`)"
                          accept="image/*"
                          v-model="newUser.drivingLicence"
                          :class="{
                            error: validation.hasError(
                              'newUser.drivingLicence'
                            ),
                          }"
                        ></b-form-file>
                      </div>
                      <div class="form-outline mb-2">
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="newUser.sozlesme"
                          name="checkbox-1"
                          value="accepted"
                          unchecked-value="not_accepted"
                          :class="{
                            error: validation.hasError('newUser.sozlesme'),
                          }"
                        >
                          *
                          <button
                            class="register-b"
                            @click.prevent
                            @click="uyelikSoz = !uyelikSoz"
                          >
                            {{$t(`MembershipAgreement`)}}
                          </button>
                          {{$t(`And`)}}
                          <button
                            class="register-b"
                            @click.prevent
                            @click="gizlikSoz = !gizlikSoz"
                          >
                            {{$t(`PrivacyPolicy`)}}</button
                          > {{$t(`Accept`)}}
                        </b-form-checkbox>
                      </div>
                      <div class="form-outline mb-2">
                        <button
                          class="btn btn-success btn-lg btn-block"
                          type="button"
                          @click="registerCheck"
                        >
                          {{$t(`Register`)}}
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
                    :title="$t(`MembershipAgreement`)"
                    ><register
                  /></b-modal>
                  <b-modal
                    v-model="gizlikSoz"
                    hide-footer
                    centered
                    header-bg-variant="success"
                    header-text-variant="light"
                    :title="$t(`PrivacyPolicy`)"
                    ><register
                  /></b-modal>
                  <b-modal
                    v-model="sifremiUnuttum"
                    hide-footer
                    centered
                    header-bg-variant="success"
                    header-text-variant="light"
                    :title="$t(`ForgotPass`)"
                    ><div class="form-outline mb-4">
                      {{$t(`EnterEmail`)}}
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        v-model="forgotAccount"
                      />
                    </div>
                    <div class="form-outline mb-2">
                      <button
                        class="btn btn-success btn-lg btn-block"
                        type="button"
                      >
                        {{$t(`Send`)}}
                      </button>
                    </div>
                  </b-modal>
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
import { Validator } from 'simple-vue-validator'
export default {
  components: { register },
  validators: {
    'newUser.fullName'(value) {
      return Validator.value(value).required()
    },
    'newUser.email'(value) {
      return Validator.value(value).required().email()
    },
    'newUser.password'(value) {
      return Validator.value(value).required().minLength(8)
    },
    'newUser.rePassword, newUser.password': function (RePassword, Password) {
      if (this.submitted || this.validation.isTouched('newUser.rePassword')) {
        return Validator.value(RePassword).required().match(Password)
      }
    },
    'newUser.selfie'(value) {
      return Validator.value(value).required()
    },
    'newUser.drivingLicence'(value) {
      return Validator.value(value).required()
    },
    'newUser.sozlesme'(value) {
      return Validator.value(value).required()
    },
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      newUser: {
        fullName: '',
        email: '',
        password: '',
        rePassword: '',
        selfie: '',
        drivingLicence: '',
        sozlesme: '',
      },
      forgotAccount: '',
      bosForm: false,
      register: false,
      uyelikSoz: false,
      gizlikSoz: false,
      sifremiUnuttum: false,
      status: '',
    }
  },
  methods: {
    async Login() {
      if (this.user.email || this.user.password != null) {
        this.bosForm = false
        try {
          let response = await this.$auth.loginWith('local', {
            data: this.user,
          })
          this.$toast
            .success('Hoşgeldin' + ' ' + response.data.fullName)
            .goAway(1500)
          this.$router.push('/')
        } catch (err) {
          this.$router.push('/login')
          this.$toast.error('Email veya Şifre Yanlış').goAway(2000)
        }
      } else {
        this.bosForm = true
        this.$router.push('/login')
        this.$toast.error('Lütfen Boş Alanları Doldurunuz').goAway(2000)
      }
    },

    registerCheck() {
      this.$validate().then(function (success) {
        if (success) {
        }
      })
    },
  },
}
</script>

<style scoped>
.emr {
  margin: 2.5rem 0 2rem 0;
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
  padding: 0;
}
.bg-success {
  background-color: #44a55a !important;
}
.error {
  border: 1px solid red !important;
  box-shadow: 0 0 0 0.2rem rgb(255 0 0 / 25%) !important;
}
</style>
