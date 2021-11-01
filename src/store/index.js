import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 루트 상태 정의
  state: {},
  // 루트 상태값을 읽는 메소드 정의(Getter)
  getters: {},
  // 루트 상태값을 변경하는 동기 메소드 정의(Setter)
  mutations: {},
  // 루트 상태값을 변경하는 비동기 메소드 정의(Setter)
  actions: {},
  // 루트가 아닌 자식 상태를 정의한 모듈 가져오기
  modules: {},
});
