<template>
    <el-table row-key="id" :data="tableData" style="width: 100%">
        <el-table-column label="日期" width="180">
            <template slot-scope="scope, column, index">
                <span v-if="scope.row.children">
                    <span v-if="column==0&&index==0"></span>
                    <i>...{{index}}</i>
                    <!-- <span>{{ JSON.stringify(scope.row.children)}}</span> -->
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </span>
                <span v-else>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </span>
            </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                >
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                >
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
            id: 2,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              children: [{
              id: 310,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 321,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
            id: 3,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
            id: 4,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
            id: 5,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>