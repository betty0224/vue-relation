<template>
  <re-panel>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="我的场景" name="first">我的场景凄凄切切</el-tab-pane>
    <el-tab-pane label="场景商店" name="second">
      <div class="content">
        <div class="searchList">
          <div class="card" v-for="item in cardDataList" :key="item.key">
            {{item.name}}
          </div>

          <el-pagination class="re-pagination"
            @current-change="handleCurrentChange"
            small=true
            :current-page="pagination.pageNo"
            :page-size="pagination.pageSize"
            layout="prev, pager, next"
            :total="pagination.total">
          </el-pagination>
        </div>
        <div class="history">
          <span>搜索历史</span>
          <re-panel>

          </re-panel>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="私库快照" name="third">私库快照</el-tab-pane>
  </el-tabs>
</re-panel>
</template>

<script>
import rePanel from './layout/panel.vue'
import {getanalysismodel} from '../service/getData'
export default {
  name: 'relationSearch',
  components: {
    rePanel
  },
  data () {
    return {
      activeName: 'first',
      cardDataList:[],
      cardData:[],
      pagination: {
            total: 0,
            pageNo: 1,
            pageSize: 10,
            parentId: 0
          },
    }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      loadData(){
        getanalysismodel('','',1).then(res => {
          if (res.code == 0) {
            this.pagination.total = res.obj.length;
            this.cardData = res.obj;
            this.cardDataList = res.obj.slice(0,12);
          }
        })
      },
      //--分页数据---
      handleCurrentChange(val) {
        this.pagination.pageNo = val;
        let page = (this.pagination.pageNo-1)*this.pagination.pageSize;
        this.cardDataList = this.cardData.slice(page,page + this.pagination.pageSize);
      }
    },
    created(){
      this.loadData();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content{
  padding-left: 15px;
}
.card{
  width: 210px;
  height: 156px;
  border: 1px solid #39f;
  margin-right: 15px;
  margin-bottom: 10px;
}
.re-pagination button:disabled {
    background-color: transparent !important;
}
.re-pagination .btn-prev,.re-pagination .btn-next,.re-pagination .el-pager{
  background: transparent;
}
.searchList{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 70%;
  height: 100%;
  float: left;
}
.history{
  width: 27%;
  float: right;
}
</style>
