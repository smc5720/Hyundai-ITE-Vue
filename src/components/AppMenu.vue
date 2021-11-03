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
      ><router-link to="/menu02/exam06computedbinding" class="nav-link text-warning"
        >계산된 바인딩</router-link
      ><router-link to="/menu02/exam07template" class="nav-link text-warning"
        >템플릿 컴포넌트</router-link
      >
    </li>
    <li class="nav-item mt-2">
      <h6 class="text-white">Menu03: Event Handling & Watch</h6>
      <router-link to="/menu03/exam01eventhandling" class="nav-link text-warning"
        >이벤트 처리</router-link
      ><router-link to="/menu03/exam02watch" class="nav-link text-warning"
        >데이터 변경 감시</router-link
      >
    </li>
    <li class="nav-item mt-2">
      <h6 class="text-white">Menu04: Data Delivery</h6>
      <router-link to="/menu04/exam01props" class="nav-link text-warning"
        >부모에서 자식으로 전달(props 이용)</router-link
      ><router-link to="/menu04/exam02eventemit" class="nav-link text-warning"
        >자식에서 부모로 전달(event 이용)</router-link
      ><router-link to="/menu04/exam03inject" class="nav-link text-warning"
        >의존 데이터 삽입(inject 이용)</router-link
      ><router-link to="/menu04/exam04ref" class="nav-link text-warning"
        >Ref를 이용한 접근</router-link
      >
    </li>
    <li class="nav-item mt-2">
      <h6 class="text-white">Menu05: LifeCycle Hook</h6>
      <router-link to="/menu05/exam01lifecyclehook" class="nav-link text-warning"
        >라이프사이클 훅</router-link
      >
    </li>
    <li class="nav-item mt-2">
      <h6 class="text-white">Menu06: Vuex State Management</h6>
      <router-link to="/menu06/exam01rootstate" class="nav-link text-warning"
        >루트 상태 읽기 및 변경</router-link
      ><router-link to="/menu06/exam02counterstate" class="nav-link text-warning"
        >하위 상태 읽기 및 변경</router-link
      >
    </li>
    <li class="nav-item mt-2">
      <h6 class="text-white">Menu07: Axios AJAX</h6>
      <router-link to="/menu07/exam01asynccontrol" class="nav-link text-warning"
        >비동기 작업 도중에 보여줄 스피너</router-link
      ><router-link to="/menu07/auth/jwtauth" class="nav-link text-warning">JWT 인증</router-link>
      <router-link to="/menu07/board/list" class="nav-link text-warning">게시물 목록</router-link>
    </li>
  </ul>
</template>
