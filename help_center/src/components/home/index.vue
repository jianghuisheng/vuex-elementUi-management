<template>
  <div class="Home">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #545c64;">
        <div class="top-text">
          <h1 class="title">VUEXMS管理系统</h1>
        </div>
        <el-menu
          :default-openeds="['1']"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>账号管理</template
            >
            <el-menu-item index="userlist">账号列表</el-menu-item>
            <el-menu-item index="useradd">添加账号</el-menu-item>
            <el-menu-item index="passwordedit">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>导航三</template
            >
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
          <router-view></router-view>
      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.el-container {
  height: 100% !important;
}
.el-menu {
  border-right: 0;
}
.top-text{
  text-align: center;
  padding: 30px 0;
  background-color: #333333;
  .title{
    color: #ffffff;
    font-weight: bold;
  }
}

</style>
