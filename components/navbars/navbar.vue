<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light emr">
    <nuxt-link tag="a" to="/" class="navbar-brand">Navbar</nuxt-link>
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
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <nuxt-link tag="a" to="/" class="nav-link">Link</nuxt-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <nuxt-link tag="a" to="/" class="dropdown-item">Action</nuxt-link>
            <nuxt-link tag="a" to="/" class="dropdown-item"
              >Another action</nuxt-link
            >
            <div class="dropdown-divider"></div>
            <nuxt-link tag="a" to="/" class="dropdown-item"
              >Something else here</nuxt-link
            >
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link tag="a" to="/" class="nav-link disabled"
            >Disabled</nuxt-link
          >
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <nuxt-link
          class="my-2 my-sm-0 btn btn-light"
          tag="button"
          variant="light"
          to="/login"
        >
          Login</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import login from '../logins/login.vue'
export default {
  components: { login },
}
</script>

<style scoped>
.emr {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: #5bb386 !important;
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
