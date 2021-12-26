export const state = () => ({
    /* preToken: "",
      isB2b: true*/
})
export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedInUser(state) {
        return state.auth.user
    },
}

export const mutations = {
    /*  getPreToken(state, data) {
          state.preToken = data;
      },
      clearPreToken(state) {
          state.preToken = null;
      },
      async toggleB2b(state, data) {
          state.isB2b = data;
      }*/
}

export const actions = {
    //daha server tarafındayken çalışan kısım
    //burada preTokenı alıyoruz
    /*  async nuxtServerInit({ commit }, { req }, context, state) {
          const { host } = req.headers;

          let website = "demo3.b2bstore.com";*/
    /*if (host === "localhost:3000") {
              website = "demo3.b2bstore.com";
              commit('toggleB2b', true)
              } else {
              website = "vue.b2bstore.com";
              commit('toggleB2b', false)
              }*/
    //console.log(host);
    /*   const agent = new https.Agent({
              rejectUnauthorized: false
          });
          const {
              data
          } = await this.$axios.get(
              `https://unity.b2bstore.com/api/token/get-token?preToken=oz-pro-6f12f5c3-798e-45d5-a5d6-3ba546daece8&website=${website}`, { httpsAgent: agent }
          );
          commit("getPreToken", data);
      }*/
}