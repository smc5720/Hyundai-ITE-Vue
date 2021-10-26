<template>
  <div class="card">
    <div class="card-header">
      HelloWorld
    </div>
    <div class="card-body">
      <div class="hello">
        <h1>Welcome to Vue!</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
