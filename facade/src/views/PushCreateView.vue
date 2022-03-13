<template>
<el-row>
  <el-col :span="4" :offset="2">
    <el-card>
      <div>上传作品</div>
      <div>上传作品</div>
    </el-card>
  </el-col>
  <el-col :span="14" :offset="1">
    <router-view></router-view>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "PushCreateView"
}
</script>

<style scoped>

</style>