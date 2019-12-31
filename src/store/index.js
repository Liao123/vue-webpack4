// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import Http from "@/modules/Http.class.js"
Vue.use(Vuex)

const panjian = {
  state: {
    info: null, // 用户信息
    token: null
  },
  mutations: {
    info (state, info) {
      state.info = info
    },
    token (state, token) {
      state.token = token
    }
  },
  getters: {
    info: state => {
      return state.info;
    },
    token: state => {
      return state.token;
    }
  }
}


const songjian = {
  state: {
      settlementMessage:null,//结算订单信息(购物车)
      detailsMessage:null,//结算订单信息(详情页)
      totalMoney: null, //结算总价
  },
  actions: {},
  mutations: {
      settlementMessage(state, settlementMessage) {
          state.settlementMessage = settlementMessage
      },
      detailsMessage(state, detailsMessage) {
          state.detailsMessage = detailsMessage
      },
      totalMoney(state, totalMoney) {
          state.totalMoney = totalMoney
      }
  },
  getters: {
      settlementMessage:state => {
          return state.settlementMessage;
      },
      detailsMessage: state => {
          return state.detailsMessage;
      },
      totalMoney: state => {
          return state.totalMoney;
      }
  },
}


const longfei = {
  state: {},
  actions: {},
  mutations: {},
  getters: {},
}

// 数据
let state = {
  ...panjian.state,
  ...songjian.state,
  // 本地cookie
  zhezao: false,
  token:"",
}
// 获取
let getters = {
  ...panjian.getters,
  ...songjian.getters,
  getzheZao: state => {
    return state.zhezao
  },
  gettoken: state => {
    return state.token
  },
}

// 事件
let actions = {
  // zezhao
  // fetchzheZao ({ commit }, data) {
  //   return  commit('getzheZao', data)
  // },
  // token
 async fetchtoken ({ commit }, data) {
    const da = await Http.sendSync({
        url: "Token",
        method:'post',
        type:'POST',
        data: {
            code:"my-code"
        }
    })
    return  commit('settoekn', da.data.token.token)
  },  
  
}

// 改变
let mutations = {
  ...panjian.mutations,
  ...songjian.mutations,
  setzheZao (state, data) {
    state.zhezao = data;
  },
  settoekn (state, data) {
    state.token = data;
  },
}



// export default new Vuex.Store({
//   state,
//   mutations,
//   actions,
// })
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{
    }
    
  })