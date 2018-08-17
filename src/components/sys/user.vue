<template>
  <re-panel>
    <h3 class="box-title" slot="header" style="width: 100%">
      <el-row style="width:100%">
        <el-col :span="12">
          <router-link :to="{ path: 'userAdd'}">
            <el-button type="primary" icon="plus">新增</el-button>
          </router-link>
        </el-col>
        <el-col :span="12">
          <div class="el-input" style="width: 200px; float:right;">
            <i class="el-input__icon el-icon-search"></i>
            <input type="text" placeholder="输入用户名称" v-model="searchkey" @keyup.enter="search($event)"
                  class="el-input__inner">
          </div>
        </el-col>
      </el-row>
    </h3>
    <div slot="body">
      <el-table :data="tableData.rows"
      border
      style="width:100%"
      v-loading="listLoading"
      @selection-change="handleSelectionChange">
      <el-table-column prop="id" type="selection" width="50"></el-table-column>
      <el-table-column label="照片" width="76">
        <template>
          <img :src="scope.row.avatar" style="height:35px;vertical-align: middle;" alt="">
        </template>
      </el-table-column>
      <el-table-column prop='name' label="名称"></el-table-column>
      <el-table-column  prop="nickName"  label="登录用户名"></el-table-column>
      <el-table-column  prop="email" label="邮箱"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{scope.row.satus === 1 ? '已激活' : '未激活'}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="285">
        <template slot-scope="scope">
          <el-button size="small" type="default" icon="edit" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button  size="small"  type="info"icon="setting" @click="handleRoleConfig(scope.$index, scope.row)">配置角色</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
  </re-panel>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
