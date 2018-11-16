<template>
    <el-row>
        <el-row>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/Xprogram' }">progamming language</el-breadcrumb-item>
                <el-breadcrumb-item >Python</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row>
            <h1>欢迎你</h1>
        </el-row>
        <el-row>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基础学习" name="first">基础学习</el-tab-pane>
                <el-tab-pane label="心得" name="second">心得</el-tab-pane>
                <el-tab-pane label="爬虫分析" name="three">爬虫分析</el-tab-pane>
                <el-tab-pane label="面试" name="four">面试</el-tab-pane>
            </el-tabs>
        </el-row>
    </el-row>
</template>
<script>
export default {
    name: 'list',
    data () {
        return {
            activeName : 'first'
        }
    },
    methods:{
        handleClick(tab,event){
            console.log(tab,event)
        }
    }
}
</script>

