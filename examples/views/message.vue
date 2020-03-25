<template>
  <button @click="handleClick">success</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$message({
        text: '成功'
      })
    }
  }
}
</script>

<style>

</style>