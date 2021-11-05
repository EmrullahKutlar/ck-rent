<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light emr">
    <a class="navbar-brand" href="#">Navbar</a>
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
          <a class="nav-link" href="#">Link</a>
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
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <b-button
          id="show-btn"
          @click="$bvModal.show('bv-modal-example')"
          class="my-2 my-sm-0"
          variant="light"
          v-b-modal.modal-lg
        >
          LOGIN</b-button
        >
        <b-modal hide-footer id="modal-lg" size="lg">
          <template #modal-title> Login </template>
          <login />
        </b-modal>
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
  background-color: #685bb3 !important;
}
.navbar-brand {
  color: white !important;
}
.nav-link {
  color: white !important;
}
</style>
