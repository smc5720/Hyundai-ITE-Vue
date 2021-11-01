<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Exam01LifeCycleHook</div>
    <div class="card-body">
      <p>data: {{ data }}</p>
      <hr />
      <button class="btn btn-info btn-sm" @click="changeData">변경</button>
      <hr />
      <child :data="data"></child>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  // component의 대표 이름(devtools에 표시되는 이름)
  name: "Exam01LifeCycleHook",
  // 추가하고 싶은 컴포넌트를 등록
  components: { Child },
  // 컴포넌트 데이터 정의
  data: function() {
    return { data: 0 };
  },
  // 컴포넌트 메소드 정의
  methods: {
    changeData() {
      this.data += Math.floor(10 * Math.random());
    },
  },
  // LifeCycleHook 정의
  beforeCreate() {
    console.log("beforeCreate state");
  },
  created() {
    console.log("created state");
  },
  beforeMount() {
    console.log("beforeMount state");
  },
  mounted() {
    console.log("mounted state");
  },
  beforeUpdate() {
    console.log("beforeUpdate state");
  },
  updated() {
    console.log("updated state");
  },
  beforeDestroy() {
    console.log("beforeDestroy state");
  },
  destroyed() {
    console.log("destroyed state");
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
