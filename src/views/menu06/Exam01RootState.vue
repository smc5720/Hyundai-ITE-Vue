<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Exam01RootState</div>
    <div class="card-body">
      <h6>Root State 읽기</h6>
      <p>userId 단방향 바인딩: {{ $store.state.userId }}</p>
      <p>userId 단방향 바인딩: {{ $store.getters.getUserId }}</p>
      <p>userId 단방향 바인딩: {{ getUserId() }}</p>
      <p>userId 단방향 바인딩: {{ computedUserId }}</p>
      <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId" /></p>
      <hr />
      <h6>Root State 변경</h6>
      <p>Component userId 양방향 바인딩: <input type="text" v-model="userId" /></p>
      <div class="mt-2">
        <button class="btn btn-info btn-sm mr-2" @click="changeUserIdByMutation">
          userId 변경(Mutation 동기 방식)
        </button>
        <button class="btn btn-info btn-sm mr-2" @click="changeUserIdByAction">
          userId 변경(Action 비동기 방식)
        </button>
      </div>
      <hr />
      <child></child>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  // component의 대표 이름(devtools에 표시되는 이름)
  name: "Exam01RootState",
  // 추가하고 싶은 컴포넌트를 등록
  components: { Child },
  // 컴포넌트 데이터 정의
  data: function() {
    return {
      userId: "",
    };
  },
  // 컴포넌트 메소드 정의
  methods: {
    getUserId() {
      // return this.$store.state.userId;
      // return this.$store.getters.getUserId;
      return this.$store.getters["getUserId"];
    },
    changeUserIdByMutation() {
      this.$store.commit("setUserId", this.userId);
    },
    changeUserIdByAction() {
      this.$store.dispatch("setUserIdByAsync", { userId: this.userId, duration: 3000 });
    },
  },
  computed: {
    computedUserId() {
      // return this.$store.state.userId;
      // return this.$store.getters.getUserId;
      return this.$store.getters["getUserId"];
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
