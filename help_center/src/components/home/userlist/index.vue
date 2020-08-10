<template>
  <div class="userlist">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>账号列表</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >添加</el-button
          >
        </div>
        <div class="text item">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="username" label="账号" width="180">
            </el-table-column>
            <el-table-column prop="realname" label="实名" width="180">
            </el-table-column>
            <el-table-column prop="idType" label="证件号"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="handleEdit(scope.row.id)"
                  type="text"
                  size="small"
                  >修改</el-button
                >
                <el-button
                  @click="handleDel(scope.row.id)"
                  type="text"
                  size="small"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          username: "admin01",
          realname: "王小虎",
          idType: "130130199407282730"
        },
        {
          id: 2,
          username: "admin02",
          realname: "王小虎",
          idType: "130130199407282731"
        },
        {
          id: 3,
          username: "admin03",
          realname: "王小虎",
          idType: "130130199407282732"
        },
        {
          id: 4,
          username: "admin04",
          realname: "王小虎",
          idType: "130130199407282733"
        }
      ]
    };
  },
  methods: {
    handleEdit(id) {
      console.log("修改" + id);
    },
    handleDel(id) {
      console.log("删除" + id);
    }
  }
};
</script>

<style>
.userlist {
  width: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
