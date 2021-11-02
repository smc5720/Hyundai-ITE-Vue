<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Child</div>
    <div class="card-body">
      <h6>Root State 읽기</h6>
      <p>userId 단방향 바인딩: {{ $store.state.userId }}</p>
      <p>userId 단방향 바인딩: {{ $store.getters.getUserId }}</p>
      <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId" /></p>
    </div>
  </div>
</template>

<script>
export default {
  // component의 대표 이름(devtools에 표시되는 이름)
  name: "Child",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트 데이터 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {},
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
