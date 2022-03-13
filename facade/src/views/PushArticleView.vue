<template>
  <el-main>
    <el-card>
      <span>作品信息</span>

      <el-input v-model="title"
                maxlength="50"
                placeholder="文章标题"
                show-word-limit
                type="text">

      </el-input>

      <el-input v-model="info"
                maxlength="230"
                placeholder="文章简介"
                show-word-limit
                type="textarea">

      </el-input>


      <el-input v-model="content"
                maxlength="10000"
                placeholder="文章内容"
                show-word-limit
                type="textarea">

      </el-input>

      <el-button @click="commit">发布</el-button>
    </el-card>
  </el-main>
</template>

<script>
import {Network} from "@/api/Network";

export default {
  name: "PushArticleView",
  data(){
    return{
      title:'',
      content:'',
      info:''
    }
  },
  methods:{
    commit(){
      let that = this
        Network.publishCreator({
          "categoryId": 1,
          "contentText": that.content,
          "info": that.info,
          "mainImg": "",
          "payType": 0,
          "publishTime": "",
          "status": 0,
          "title": that.title,
          "type": 0
        }).then(resp=>{
          alert(resp.data.data())
        }).catch()
    }
  }
}
</script>

<style scoped>

</style>