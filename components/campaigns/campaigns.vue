<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center" style="font-size: 32px; font-weight: 900">
          Kampanyalar
        </h2>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <b-card
          title="Title"
          class="text-center"
          img-src="~/assets/cars/mercedes.png"
          img-alt="Image"
          img-top
        >
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="success">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <b-card title="Title" header-tag="header" class="text-center">
          <template #header>
            <h6 class="mb-0">Header Slot</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="success">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <b-card title="Title" header-tag="header" class="text-center">
          <template #header>
            <h6 class="mb-0">Header Slot</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="success">Go somewhere</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
