<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Exam02EventEmit</div>
    <div class="card-body">
      <p>counter: {{ counter }}</p>
      <child
        @child-event-1="handleChildEvent1"
        @child-event-2="handleChildEvent2"
        :counter="counter"
        @counter-increment="handleCounterIncrement"
        @counter-decrement="handleCounterDecrement"
      ></child>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  // component의 대표 이름(devtools에 표시되는 이름)
  name: "Exam02EventEmit",
  // 추가하고 싶은 컴포넌트를 등록
  components: { Child },
  // 컴포넌트 데이터 정의
  data: function() {
    return {
      counter: 0,
    };
  },
  // 컴포넌트 메소드 정의
  methods: {
    handleChildEvent1(arg) {
      console.log("arg:", arg);
    },
    handleChildEvent2(arg1, arg2) {
      console.log("arg1:", arg1);
      console.log("arg2:", arg2);
    },
    handleCounterIncrement(value) {
      this.counter += value;
    },
    handleCounterDecrement(value) {
      this.counter -= value;
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
