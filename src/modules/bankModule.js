import Vue from 'vue';

/*types*/
const types = {

  
  SELECTED_BANK_ACTION:'selectedBankAction',//选择银行卡
  SAVE_ADD_BANK_INFO_ACTION: 'saveAddBankInfoAction',//保存添加银行卡信息
  SAVE_NAME_ACTION:'saceNameAction' ,//保存用户姓名
  SAVE_PRODUCT_ID_ACTION:'saveProductIdAction',//保存产品id
  SAVE_BINDCARDSEQ_ACTION:'saveBindCardSeqAction',//保存前后置绑卡信息
  SAVE_ORDERID_ACTION:'saveOrderIdAction',//保存订单id
}

/*states*/
const state = {

  selectedBankStore:null,
  saveAddBankInfo:null,
  userName:null,
  saveProductId:null,
  saveBindCardSeq:null,
  saveOrderId:null,
}

/*mutations*/
const mutations = {


  //选择银行卡
  [types.SELECTED_BANK_ACTION](state, data) {
    //console.log('mutations', data)
    state.selectedBankStore = data ? data : null;
  },
  //保存添加银行卡信息
  [types.SAVE_ADD_BANK_INFO_ACTION](state, data) {
    //console.log('mutations', data)
    state.saveAddBankInfo = data ? data : null;
  },
  //保存用户姓名
  [types.SAVE_NAME_ACTION](state, data) {
    state.userName = data ? data : null;
  },
  //保存产品id
  [types.SAVE_PRODUCT_ID_ACTION](state, data) {
    state.saveProductId = data ? data : null;
  },
  //保存前后置绑卡信息
  [types.SAVE_BINDCARDSEQ_ACTION](state, data) {
    state.saveBindCardSeq = data ? data : null;
  },
  //保存订单id
  [types.SAVE_ORDERID_ACTION](state, data) {
    state.saveOrderId = data ? data : null;
  },


}

/*actions*/
const actions = {


  //选择银行卡
  selectedBankAction: function ({ commit, state }, params) {
    //console.log('action',params)
    commit(types.SELECTED_BANK_ACTION, params)
  },
  //保存添加银行卡信息
  saveAddBankInfoAction: function ({ commit, state }, params) {
    commit(types.SAVE_ADD_BANK_INFO_ACTION, params)
  },
  //保存用户姓名
  saveNameAction: function ({ commit, state }, params) {
    commit(types.SAVE_NAME_ACTION, params)
  },

  //保存产品id
  saveProductIdAction: function ({ commit, state }, params) {
    commit(types.SAVE_PRODUCT_ID_ACTION, params)
  },
  //保存前后置绑卡信息
  saveBindCardSeqAction: function ({ commit, state }, params) {
    commit(types.SAVE_BINDCARDSEQ_ACTION, params)
  },
  //保存订单id
  saveOrderIdAction: function ({ commit, state }, params) {
    commit(types.SAVE_ORDERID_ACTION, params)
  },
}

/*getters*/
const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}