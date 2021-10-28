<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <h6 class="text-white">Home</h6>
      <router-link to="/" class="nav-link text-warning">Home</router-link>
      <router-link to="/about" class="nav-link text-warning">About</router-link>
    </li>
    <li class="nav-item mt-2">
      <h6 class="text-white">Menu01: Routing</h6>
      <router-link :to="{ name: 'menu01_exam01view' }" class="nav-link text-warning"
        >선언적 방식 화면 이동</router-link
      ><router-link to="/menu01/exam02view" class="nav-link text-warning"
        >프로그램 방식 화면 이동</router-link
      ><router-link to="/menu01/exam03view" class="nav-link text-warning">중첩된 라우트</router-link
      ><router-link to="/menu01/exam04view" class="nav-link text-warning"
        >이름이 있는 라우터 뷰</router-link
      ><router-link to="/menu01/exam05view" class="nav-link text-warning">
        URL 데이터 전달</router-link
      >
    </li>
    <li class="nav-item mt-2">
      <h6 class="text-white">Menu02: Component</h6>
      <router-link to="/menu02/exam01expressions" class="nav-link text-warning"
        >표현식 바인딩</router-link
      ><router-link to="/menu02/exam02directives" class="nav-link text-warning"
        >디렉티브 바인딩</router-link
      ><router-link to="/menu02/exam03attrbinding" class="nav-link text-warning"
        >속성 바인딩</router-link
      ><router-link to="/menu02/exam04formbinding" class="nav-link text-warning"
        >양방향 바인딩</router-link
      ><router-link to="/menu02/exam05forrepeatbinding" class="nav-link text-warning"
        >반복 바인딩</router-link
      >
    </li>
  </ul>
</template>
