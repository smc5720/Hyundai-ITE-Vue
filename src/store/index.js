import Vue from "vue";
import Vuex from "vuex";
import counter from "./counter";
import axiosConfig from "@/apis/axiosConfig";

Vue.use(Vuex);

export default new Vuex.Store({
  // 루트 상태 정의
  state: {
    userId: "",
    authToken: "",
  },
  // 루트 상태값을 읽는 메소드 정의(Getter)
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getAuthToken(state) {
      return state.authToken;
    },
  },
  // 루트 상태값을 변경하는 동기 메소드 정의(Setter)
  mutations: {
    // payload는 외부에서 받는 값을 의미한다.
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAuthToken(state, payload) {
      state.authToken = payload;
    },
  },
  // 루트 상태값을 변경하는 비동기 메소드 정의(Setter)
  actions: {
    setUserIdByAsync(context, payload) {
      new Promise((resolve, reject) => {
        // 3초가 지난 뒤에 함수 내부를 실행한다.
        setTimeout(() => {
          // payload = { userId: xxx, duration: 3000 }
          context.commit("setUserId", payload.userId);
          resolve(context.state.userId);
        }, payload.duration);
      })
        .then(data => {
          console.log(`userId 상태 변경 성공: ${data}`);
        })
        .catch(err => {
          console.log(`userId 상태 변경 실패: ${err}`);
        });
    },

    // payload = { userId: xxx, authToken: xxxx }
    saveAuth(context, payload) {
      // 상태 저장
      context.commit("setUserId", payload.userId);
      context.commit("setAuthToken", payload.authToken);
      // 브라우저 갱신 시 날아가는 정보를 다시 로딩하기 위해 세션 스토리지에 저장
      sessionStorage.setItem("userId", payload.userId);
      sessionStorage.setItem("authToken", payload.authToken);
      // 로그인 성공 후, Axios의 공통 헤더에 Authorization을 추가
      axiosConfig.addAuthHeader(payload.authToken);
    },

    loadAuth(context, payload) {
      // 세션 스토리지에 저장된 내용을 읽어서 상태 복원
      context.commit("setUserId", sessionStorage.getItem("userId") || "");
      context.commit("setAuthToken", sessionStorage.getItem("authToken") || "");
      // authToken이 존재할 경우, Axios의 공통 헤더에 Authorization을 추가
      if (context.state.authToken !== "") {
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },

    deleteAuth(context, payload) {
      // 상태 삭제
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");
      // 세션 스토리지 저장된 값 삭제
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");
      // Axios 공통 헤더에서 Authorization 제거
      axiosConfig.removeAuthHeader();
    },
  },
  // 루트가 아닌 자식 상태를 정의한 모듈 가져오기
  modules: { counter },
});
