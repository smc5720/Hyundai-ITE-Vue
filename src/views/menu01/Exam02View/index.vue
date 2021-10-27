<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Exam02View</div>
    <div class="card-body">
      <sub-a-component class="mb-2" />
      <!-- 프로그램 방식 화면 이동 -->
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl()">/menu/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl">/menu/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl()">/menu/exam01view</button>
    </div>
  </div>
</template>

<script>
import SubAComponent from "./SubAComponent";

export default {
  // component의 대표 이름(devtools에 표시되는 이름)
  name: "Exam02View",
  // 추가하고 싶은 컴포넌트를 등록
  components: { SubAComponent },
  // 컴포넌트 데이터 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {
    goUrl() {
      this.$router.push("/menu01/exam01view");
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
