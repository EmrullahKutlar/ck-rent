<template>
  <div class="container" style="min-height: 300px; margin-top: 106px">
    <div class="col-12 col-sm-2 col-md-3 col-lg-3 col-xl-4">
      <div class="container">
        <div class="card2">
          <div class="imgBx">
            <img src="~/assets/cars/mercedes.png" />
          </div>
          <div class="contentBx">
            <h2>Mercedes</h2>
            <div class="size">
              <b-table stacked :items="items"></b-table>
            </div>

            <a href="#">Hemen Kirala</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ Motor: '1.6 Diesel', Kapı: '4', Bagaj: '310 L', Renk: 'Gri' }],
    }
  },
}
</script>

<style scoped>
.container {
  position: relative;
}

.container .card2 {
  position: relative;
  width: 320px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
}

.container .card2:hover:before {
  clip-path: circle(300px at 80% -20%);
}

.container .card2 .imgBx {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 100%;
  height: 220px;
  transition: 0.5s;
}

.container .card2:hover .imgBx {
  top: 0%;
  transform: translateY(0%);
}

.container .card2 .imgBx img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
}

.container .card2 .contentBx {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
}

.container .card2:hover .contentBx {
  height: 210px;
}

.container .card2 .contentBx h2 {
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #44a55a;
  margin: 0;
}

.container .card2 .contentBx .size {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 27%;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0.5rem;
}

.container .card2:hover .contentBx .size {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.container .card2:hover .contentBx .color {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.6s;
}

.container .card2 .contentBx .size h3,
.container .card2 .contentBx .color h3 {
  color: #44a55a;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.container .card2 .contentBx .size span {
  margin: 0 0 0 10px;
  color: gray;
}
/*
.container .card .contentBx .size span:hover {
  background: #9bdc28;
}

.container .card .contentBx .color span {
  width: 20px;
  height: 20px;
  background: #ff0;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.container .card .contentBx .color span:nth-child(2) {
  background: #9bdc28;
}

.container .card .contentBx .color span:nth-child(3) {
  background: #03a9f4;
}

.container .card .contentBx .color span:nth-child(4) {
  background: #e91e63;
}*/

.container .card2 .contentBx a {
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #44a55a;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  margin-top: 0;
}

.container .card2:hover .contentBx a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.75s;
}
</style>
