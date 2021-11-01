<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Props
    </div>
    <div class="card-body">
      <child-a
        :prop1="data1"
        :prop2="data2"
        :productNo="pno"
        :product-kind="pkind"
        :product-price="pprice"
      ></child-a>
      <hr />
      <child-b :product="product" v-bind="product"></child-b>
      <hr />
      <child-c
        :propA="3"
        :propB="5"
        :propC="7"
        :propD="'string-Data'"
        :propE="9"
        :propF="{ message: 'hello, vue' }"
        :propG="['red', 'green', 'blue']"
        :propI="5"
      ></child-c>
    </div>
  </div>
</template>

<script>
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";

export default {
  // component의 대표 이름(devtools에 표시되는 이름)
  name: "Exam01Props",
  // 추가하고 싶은 컴포넌트를 등록
  components: { ChildA, ChildB, ChildC },
  // 컴포넌트 데이터 정의
  data: function() {
    return {
      data1: "value1",
      data2: "value2",
      pno: "1",
      pkind: "bag",
      pprice: 1000,
      product: {
        no: 2,
        kind: "정장",
      },
    };
  },
  // 컴포넌트 메소드 정의
  methods: {},
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
