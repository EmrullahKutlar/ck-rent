<template>
  <nav
    variant="success"
    class="navbar navbar-expand-lg navbar-light bg-light emr"
  >
    <nuxt-link tag="a" to="/" class="navbar-brand">CK-Rent</nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse ml-3" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link tag="a" to="/rezervasyon" class="nav-link"
            >Rezervasyon</nuxt-link
          >
        </li>
        <li class="nav-item active">
          <nuxt-link tag="a" to="/kampanyalar" class="nav-link"
            >Kampanyalar</nuxt-link
          >
        </li>
        <li class="nav-item active">
          <nuxt-link tag="a" to="/ofislerimiz" class="nav-link"
            >Ofislerimiz</nuxt-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="/"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filo
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <nuxt-link tag="a" to="/cars/ekonomik" class="dropdown-item"
              >Ekonomik</nuxt-link
            >
            <nuxt-link tag="a" to="/cars/orta" class="dropdown-item"
              >Orta</nuxt-link
            >
            <nuxt-link tag="a" to="/cars/vip" class="dropdown-item"
              >Vip</nuxt-link
            >
            <nuxt-link tag="a" to="/cars/suv" class="dropdown-item"
              >Suv</nuxt-link
            >
            <nuxt-link tag="a" to="/cars/sport" class="dropdown-item"
              >Sport</nuxt-link
            >
            <nuxt-link tag="a" to="/cars/karavan" class="dropdown-item"
              >Karavan</nuxt-link
            >
            <nuxt-link tag="a" to="/cars" class="dropdown-item">Tümü</nuxt-link>
          </div>
        </li>
        <li class="nav-item active">
          <nuxt-link tag="a" to="/iletisim" class="nav-link"
            >İletişim</nuxt-link
          >
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <div class="btn-group my-2 my-lg-0 mr-4">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
            style="color: #44a55a"
          >
            TR
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" style="color: #44a55a">EN</a>
          </div>
        </div>
        <nuxt-link
          class="my-2 my-sm-0 btn btn-light"
          tag="button"
          variant="light"
          to="/login"
          style="color: #44a55a"
          v-if="!this.$store.state.auth.loggedIn"
        >
          Giriş Yap/Kayıt Ol</nuxt-link
        >
        <button
          class="my-2 my-sm-0 btn btn-light"
          variant="light"
          style="color: #44a55a"
          v-if="this.$store.state.auth.loggedIn"
          @click="logout"
        >
          Çıkış
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import login from '../logins/login.vue'
export default {
  components: { login },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.emr {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: #44a55a !important;
}
.navbar-brand {
  color: white !important;
}
.nav-link {
  color: white !important;
}
.navbar-light .navbar-toggler {
  border: none !important;
}
.navbar-toggler {
  color: white !important;
}
</style>
