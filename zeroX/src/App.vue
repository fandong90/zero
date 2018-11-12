<template>
    <div id="app">
      <el-container>
        <el-header>
            <el-menu  :default-active="activeIndex" mode="horizontal" background-color='#545c64'   @select="handleSelect">
              <el-menu-item  style="color:#fff;margin-left:200px"  index="1">
                <router-link to="XRecommend" style="text-decoration-line: none;" >推荐</router-link>
              </el-menu-item>
              <el-submenu index="2">
                  <template slot="title" text-color="#fff" style="color:#fff;">个人文章</template>
                  <el-menu-item index="2-1" ><router-link style="text-decoration-line: none;color:#fff;" to="Xhadoop">hadoop</router-link></el-menu-item>
                  <el-menu-item index="2-2" ><router-link style="text-decoration-line: none;color:#fff;" to="Xhive">hive</router-link></el-menu-item>
                  <el-menu-item index="2-3" ><router-link style="text-decoration-line: none;color:#fff;" to="Xspark">spark</router-link></el-menu-item>
                  <el-menu-item index="2-4" ><router-link style="text-decoration-line: none;color:#fff;" to="Xprolang">progamming language</router-link></el-menu-item>
              </el-submenu>
              <el-menu-item style="float:right;" index="3"><i class="el-icon-setting"></i></el-menu-item>
            </el-menu>
      </el-header>
      <el-container>
      <el-main>
          <router-view/>
      </el-main>
      </el-container>
      <el-footer>

      </el-footer>
      </el-container>
  </div>
</template>

<script>
/*eslint indent: "error"*/
export default {
  name: 'App',
  data () {
    return {
      activeIndex:"1"
    }
  },
  methods:{
      handleSelect(key, keyPath)
      {
          switch(key){
            case "3":this.$message('该功能暂未开通，尽请期待！');break;
          }
      },
      handleOpen(key,keyPath){

      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 body{
   padding:0px 0px;
   margin:0px 0px;
 }
 .el-header{
   padding:0px 0px;
 }
 .font{
    color:#fff;
 }
</style>
