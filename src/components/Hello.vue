<template>
  <div class="hello">
  <!-- <img src="../assets/logo.png"> -->
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-weight: normal;
  text-align: center;
}

a {
  color: #42b983;
}
</style>
