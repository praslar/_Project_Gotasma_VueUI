<template>
  <footer class="main-footer">
    <strong> {{ year }}
    <span>TMA solution  </span>DC-14</strong>
  </footer>
</template>

<script>
export default {
  name: 'DashFooter',
  data: function () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style>
span {
color: lightskyblue;
}
</style>
