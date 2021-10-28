<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <!-- 데이터 바인딩 -->
      <div>
        <img class="mr-2" src="@/assets/photos/photo1.jpg" width="300px" height="200px" />
        <img
          v-bind:src="require(`@/assets/photos/${photoFileName}`)"
          width="300px"
          height="200px"
        />
      </div>
      <hr />
      <!-- 요소 숨김 여부 -->
      <span v-if="sale">
        <img
          v-bind:src="require(`@/assets/photos/${photoFileName}`)"
          width="300px"
          height="200px"
        />
      </span>
      <span v-show="sale">
        <img
          v-bind:src="require(`@/assets/photos/${photoFileName}`)"
          width="300px"
          height="200px"
        />
      </span>
      <hr />
      <!-- HTML 태그 처리 -->
      <p>정보: {{ info }}</p>
      <p>정보: <span v-html="info"></span></p>
      <hr />
      <button class="btn btn-info btn-sm" @click="changeData()">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  // component의 대표 이름(devtools에 표시되는 이름)
  name: "Exam02Directives",
  // 추가하고 싶은 컴포넌트를 등록
  components: {},
  // 컴포넌트 데이터 정의
  data: function() {
    return {
      photoFileName: "photo2.jpg",
      sale: true,
      info: `<span style="background-color: #eeeeee">스타일 적용 확인</span>`,
    };
  },
  // 컴포넌트 메소드 정의
  methods: {
    changeData() {
      let rand = Math.floor(Math.random() * 16) + 1;
      this.photoFileName = "photo" + rand + ".jpg";
      this.sale = !this.sale;
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
