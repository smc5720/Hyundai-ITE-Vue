<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">Exam07View</div>
    <div class="card-body">
      <div>kind: {{ kind }}</div>
      <div>color: {{ color }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // component의 대표 이름(devtools에 표시되는 이름)
  name: "Exam07View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트 데이터 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메소드 정의
  methods: {},
  // property(prop) 정의
  props: ["kind", "color"],
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
