<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">게시물 목록</div>
    <div class="card-body">
      <router-link class="btn btn-success btn-sm mb-2" to="/menu07/board/writeform"
        >생성</router-link
      >
      <div v-if="page != null">
        <table class="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-center" style="width:70px">번호</th>
              <th class="text-center">제목</th>
              <th class="text-center" style="width:90px">글쓴이</th>
              <th class="text-center" style="width:120px">날짜</th>
              <th class="text-center" style="width:70px">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="board in page.boards" :key="board.bno">
              <td class="text-center">{{ board.bno }}</td>
              <td>
                <router-link
                  :to="`/menu07/board/read?bno=${board.bno}&pageNo=${page.pager.pageNo}&hit=true`"
                  >{{ board.btitle }}</router-link
                >
              </td>
              <td class="text-center">{{ board.mid }}</td>
              <td class="text-center">{{ new Date(board.bdate).toLocaleDateString() }}</td>
              <td class="text-center">{{ board.bhitcount }}</td>
            </tr>
            <tr>
              <td colspan="5" style="text-align: center;">
                <button class="btn btn-outline-success btn-sm mr-1" @click="changePageNo(1)">
                  처음
                </button>
                <button
                  v-if="page.pager.groupNo > 1"
                  class="btn btn-outline-warning btn-sm mr-1"
                  @click="changePageNo(page.pager.startPageNo - 1)"
                >
                  이전
                </button>
                <button
                  v-for="pageNo in range(page.pager.startPageNo, page.pager.endPageNo)"
                  :key="pageNo"
                  :class="
                    `btn ${
                      pageNo == page.pager.pageNo ? 'btn-primary' : 'btn-outline-primary'
                    } btn-sm mr-1`
                  "
                  @click="changePageNo(pageNo)"
                >
                  {{ pageNo }}
                </button>
                <button
                  v-if="page.pager.groupNo < page.pager.totalGroupNo"
                  class="btn btn-outline-warning btn-sm mr-1"
                  @click="changePageNo(page.pager.endPageNo + 1)"
                >
                  다음
                </button>
                <button
                  class="btn btn-outline-success btn-sm"
                  @click="changePageNo(page.pager.totalPageNo)"
                >
                  맨끝
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <alert-dialog
      v-if="alertDialog"
      :loading="loading"
      :message="alertDialogMessage"
      @close="alertDialog = false"
    ></alert-dialog>
  </div>
</template>

<script>
import board from "@/apis/board";
import AlertDialog from "@/components/menu07/AlertDialog.vue";
export default {
  // component의 대표 이름(devtools에 표시되는 이름)
  name: "List",
  // 추가하고 싶은 컴포넌트를 등록
  components: { AlertDialog },
  // 컴포넌트 데이터 정의
  data: function() {
    return { alertDialog: false, alertDialogMessage: "", loading: false, page: null };
  },
  // 컴포넌트 메소드 정의
  methods: {
    getBoardList(pageNo) {
      this.loading = true;
      this.alertDialog = true;
      board
        .getBoardList(pageNo)
        .then(response => {
          this.loading = false;
          this.alertDialog = false;
          this.page = response.data;
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 403) {
              this.$router.push("/menu07/auth/jwtauth");
            }
          } else {
            this.alertDialogMessage = "네트워크 통신 오류";
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },

    changePageNo(pageNo) {
      // 같은 컴포넌트 내에서 URL만 변경
      this.$router.push(`/menu07/board/list?pageNo=${pageNo}`).catch(() => {});
      // watch에서 데이터를 가져온다.
    },

    range(start, end) {
      const arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  // 컴포넌트가 생성될 때 생성되는 훅
  created() {
    let pageNo = this.$route.query.pageNo;
    if (pageNo === "undefined") {
      pageNo = 1;
    }
    this.getBoardList(pageNo);
  },
  watch: {
    // 브라우저의 back 버튼을 이용해서 URL이 변경되었을 때 데이터 갱신을 위해 $route 감시
    $route(to, from) {
      if (to.query.pageNo) {
        // URL이 변경되면 해당 페이지 내용 가져오기
        this.getBoardList(to.query.pageNo);
      } else {
        // pageNo가 없을 경우 기본 1로 설정
        this.getBoardList(1);
      }
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
