<template>
  <div class="parent">
    <el-row class="box">
      <el-col :span="18" :offset="3">
        <el-row v-for="list in typeList" class="one-row">
          <el-col v-for="(item,index) in list" :span="6" :offset="index===0?0:3">
            <el-card @click="onClick(item)">
              {{ item }}
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: "ChooseCreateType",
  data() {
    return {
      typeList: [
        [1],
      ]
    }
  },
  methods:{
    onClick(item){
      alert(item)
    }
  }
}
</script>

<style scoped>
.box {
  margin-top: 50px;
}

.one-row{
  margin-top: 60px;
}
</style>