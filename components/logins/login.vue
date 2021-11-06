<template>
  <section class="vh-100 emr">
    <div class="container py-5 h-90">
      <div class="row d-flex justify-content-center align-items-center h-90">
        <div class="col col-xl-10">
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
                      Sign into your account
                    </h5>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        class="form-control form-control-lg"
                        placeholder="Email address"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example27"
                        class="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>

                    <div class="pt-1 mb-4">
                      <button
                        class="btn btn-success btn-lg btn-block"
                        type="button"
                      >
                        Login
                      </button>
                    </div>

                    <a
                      class="small text-muted"
                      href="#!"
                      style="color: #e53434 !important"
                      >Forgot password?</a
                    >
                    <p class="mb-5 pb-lg-2" style="color: #393f81">
                      Don't have an account?
                      <a href="#!" style="color: #28a745">Register here</a>
                    </p>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
                  </form>
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
export default {}
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
</style>
