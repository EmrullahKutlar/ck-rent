<template>
  <div class="container mb-5" style="min-height: 250px; margin-top: 75px">
    <div class="container mb-5">
      <div class="row">
        <div class="col-12 mb-3">
          <h2
            class="text-center"
            style="font-size: 32px; font-weight: 900; color: #44a55a"
          >
            {{ $t(`Contact`) }}
          </h2>
        </div>
        <div class="col-12">
          <div class="page__content mb-5">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h4>Ck-Rent İletişim Merkezi 444 4 937</h4>
                  <p>
                    Bizlere 444 4 937 no’lu Ck-Rent İletişim Merkezi
                    hattımızdan 7 gün 24 saat ulaşabilirsiniz. İletişim
                    Merkezimizden, araç kiralama rezervasyonu yapılabilir, yol
                    yardım hattımıza ulaşabilir ve bizlere paylaşmak istediğiniz
                    tüm talep, öneri, görüş ve sorularınızı iletebilirsiniz.
                    <br /><br />
                    <b style="font-size: 16px"
                      >Ck-Rent Oto Kiralama ve Turizm Yatırımları A.Ş.</b
                    >
                    <br /><br />
                    Adres: Avni Dilligil Sk. 1, Gülbahar, 34394 Şişli/İstanbul
                    <br />
                    Tel: +90 212 222 22 22(PBX) <br /><br />
                    Faks:+90 212 222 22 22
                  </p>
                </div>
                <div class="col-md-6">
                  <p class="ENewsletterp">
                    <i
                      >* Geri dönüş sağlanabilmesi için gereken zorunlu
                      alanlardır.</i
                    >
                  </p>
                  <form
                    action="#"
                    id="ContactForm"
                    data-parsley-validate=""
                    novalidate=""
                  >
                    <input
                      name="__RequestVerificationToken"
                      type="hidden"
                      value="CfDJ8IXKUD8L3TdHquIW6O8zzc52xxn1goHqsSzN_F8IVb_wq0q10QSd7Rt4bDkbDHemYnKRzbnFuHAXmXL38YwBIVq4jLHLK8RYdG8K74aNdhHD0T33iquJFS7KK5gqaVNJ66jjx_CKATExq4WrzZs807s"
                    />
                    <input type="hidden" name="LanguageId" />
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="name" class="form-label">Adı*</label>
                          <input
                            id="name"
                            name="name"
                            class="form-control"
                            required=""
                            autocomplete="off"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="lastname" class="form-label"
                            >Soyadı*</label
                          >
                          <input
                            id="lastname"
                            name="lastname"
                            class="form-control"
                            required=""
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="email" class="form-label">E-Posta*</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            class="form-control"
                            autocomplete="off"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="form-label"
                            >E-Posta Adresini Onaylayın*</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            required=""
                            id="emailRpt"
                            data-parsley-equalto="#email"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="" class="form-label">Mesaj*</label>
                      <textarea
                        id="message"
                        name="message"
                        class="form-control"
                        required=""
                        autocomplete="off"
                      ></textarea>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="CountryId" class="form-label"
                            >İkamet Edilen Ülke*</label
                          >
                          <select
                            id="CountryId"
                            name="CountryId"
                            class="form-control"
                            required=""
                          >
                            <option value="">Seçiniz</option>
                            <option
                              value="7e4f1445-1670-10d6-ae82-39fa5b0427b7"
                            >
                              ABD
                            </option>
                            <option
                              value="0e4d383c-d651-39a8-e592-39fa5b03ed09"
                            >
                              ALMANYA
                            </option>
                            <option
                              value="8da6a4df-15db-29d6-7ff7-39fa5b04b73b"
                            >
                              AVUSTRALYA
                            </option>
                            <option
                              value="0024ad92-2e85-6ca3-fca7-39fa5b04ef2d"
                            >
                              AVUSTURYA
                            </option>
                            <option
                              value="1eaca059-ca00-849d-42dd-39fa5b052424"
                            >
                              AZERBAYCAN
                            </option>
                            <option
                              value="fa1f306b-7034-b050-c26e-39fa5b0553f6"
                            >
                              BELÇİKA
                            </option>
                            <option
                              value="fc6ad0d7-92c6-4d0d-a0a2-39fa5b06e4f4"
                            >
                              BREZİLYA
                            </option>
                            <option
                              value="ca079bfb-c93e-1a39-7383-39fa5b070688"
                            >
                              BULGARİSTAN
                            </option>
                            <option
                              value="b16d223b-e01e-d939-3bb2-39fa5b075897"
                            >
                              DANİMARKA
                            </option>
                            <option
                              value="bd744a26-08b4-ac1a-81f3-39fa5b0f28ab"
                            >
                              DİĞER
                            </option>
                            <option
                              value="4e582620-198b-82a4-c5fe-39fa5b07935b"
                            >
                              FAS
                            </option>
                            <option
                              value="ed374362-b724-41d5-4f40-39fa5b07c410"
                            >
                              FRANSA
                            </option>
                            <option
                              value="b45c6a29-054d-11e5-3622-39fa5b0804aa"
                            >
                              GÜRCİSTAN
                            </option>
                            <option
                              value="e2a05bc2-32ac-6e6a-efca-39fa5b08387c"
                            >
                              HOLLANDA
                            </option>
                            <option
                              value="84a884ad-3b92-a7f9-e628-39fa5b08716e"
                            >
                              IRAK
                            </option>
                            <option
                              value="dae93208-c1be-ca57-b37b-39fa5b089f98"
                            >
                              İNGİLTERE
                            </option>
                            <option
                              value="52150cef-8651-b078-4cde-39fa5b0996f1"
                            >
                              İRAN
                            </option>
                            <option
                              value="6f8712cf-0dec-14bd-66ef-39fa5b09c1cc"
                            >
                              İSPANYA
                            </option>
                            <option
                              value="c074431e-16ea-5809-848f-39fa5b09f979"
                            >
                              İSVEÇ
                            </option>
                            <option
                              value="de05b569-8824-ad6f-7932-39fa5b0a1a4c"
                            >
                              İSVİÇRE
                            </option>
                            <option
                              value="b13a6128-7c0c-1d42-5e95-39fa5b0a4583"
                            >
                              İTALYA
                            </option>
                            <option
                              value="f2e3c7a2-d7e9-3229-296c-39fa5b0a8edd"
                            >
                              KANADA
                            </option>
                            <option
                              value="8ffd529f-58ef-7fd8-f66c-39fa5b0ab71c"
                            >
                              KARADAĞ
                            </option>
                            <option
                              value="28d61774-c79a-ee97-6606-39fa5b0ad0ea"
                            >
                              KATAR
                            </option>
                            <option
                              value="238f7b61-087c-9996-6338-39fa5b0b124f"
                            >
                              KIBRIS
                            </option>
                            <option
                              value="e2f9d1f7-4cef-7539-f66b-39fa5b0b9302"
                            >
                              MAKEDONYA
                            </option>
                            <option
                              value="c7eb9c8c-0a40-d428-1cc6-39fa5b0bd57c"
                            >
                              NORVEÇ
                            </option>
                            <option
                              value="c3d95ae5-1bf1-e04f-75fd-39fa5b0c2a85"
                            >
                              POLONYA
                            </option>
                            <option
                              value="9686fb94-56ea-c03d-a3b4-39fa5b0c48a0"
                            >
                              ROMANYA
                            </option>
                            <option
                              value="fe9d0e7f-0981-65f1-a31e-39fa5b0c7692"
                            >
                              RUSYA
                            </option>
                            <option
                              value="7e118873-3a3c-805a-e7c5-39fa5b0ceebb"
                            >
                              SURİYE
                            </option>
                            <option
                              value="df6f8a3d-e683-04d3-44f8-39fa5b0d4ade"
                            >
                              SUUDİ ARABİSTAN
                            </option>
                            <option
                              value="676f9ac7-f669-490a-9cc0-cedf15fbc0c0"
                            >
                              TÜRKİYE
                            </option>
                            <option
                              value="04324bac-b701-40ec-6b4e-39fa5b0d92a7"
                            >
                              UKRAYNA
                            </option>
                            <option
                              value="a416ea2f-9441-957f-e389-39fa5b0ddc78"
                            >
                              YUNANİSTAN
                            </option>
                          </select>
                          <input
                            type="hidden"
                            name="CountryName"
                            id="CountryName"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="" class="form-label"
                        >Aracınızı genellikle hangi bölgeden kiralıyorsunuz?
                        (İsteğe bağlı)</label
                      >
                      <div class="form-control-radio row">
                        <div class="form-control-radio-item col-auto">
                          <input
                            type="radio"
                            name="favoriteLeasingRegion"
                            id="whereRent1"
                            value="Havalimanı"
                            data-parsley-multiple="favoriteLeasingRegion"
                          />
                          <label for="whereRent1">Havalimanı</label>
                        </div>
                        <div class="form-control-radio-item col-auto">
                          <input
                            type="radio"
                            name="favoriteLeasingRegion"
                            id="whereRent2"
                            value="Eve yakın"
                            data-parsley-multiple="favoriteLeasingRegion"
                          />
                          <label for="whereRent2">Eve yakın</label>
                        </div>
                        <div class="form-control-radio-item col-auto">
                          <input
                            type="radio"
                            name="favoriteLeasingRegion"
                            id="whereRent3"
                            value="Her ikisi de"
                            data-parsley-multiple="favoriteLeasingRegion"
                          />
                          <label for="whereRent3">Her ikisi de</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-action d-flex justify-content-center">
                      
                     <button data-v-5889d802="" type="button" class="btn btn-success btn-lg btn-block">
                   GÖNDER </button>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cokYakinda from '~/components/cokYakinda/cokyakinda.vue'
export default {
  components: {
    cokYakinda,
  },
}
</script>

<style></style>
