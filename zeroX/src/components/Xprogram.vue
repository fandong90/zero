<template>
    <el-row :gutter="20">
        <el-col  :span="12" v-for="item in data" v-bind:key="item.title" style="bottom:10px;margin-top:10px">
              <el-card shadow="hover" :body-style="{height:'400px',backgroundColor:item.backgroundColor}">
                  <h1 v-on:click="handleSelect(item.title)">{{item.title}}</h1>
                  
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name:'Xprogram',
    data () {
        return {
            data:[
                    { title: "Python",backgroundColor:'#409EFF'}
                   ,{title:"Scala",backgroundColor:'#67C23A'}
                   ,{title:"Java",backgroundColor:'#E6A23C'}
                   ,{title:"Javascript",backgroundColor:'#F56C6C'}
                 ]
        }
    },
    methods:{
        handleSelect(name){
             let msg='该功能'+name+'暂未开通，尽请期待！';
             switch(name){
                 case "Python":this.$router.push({ path: '/Python/List' } );break;
                 case "Scala":this.$message(msg);break;
                 case "Java":this.$message(msg);break;
                 case "Javascript":this.$message(msg);break;
             }
        }
    }
}
</script>

