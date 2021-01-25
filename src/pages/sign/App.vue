<template>
  <div>
    <el-dialog
        title="签到信息填写"
        :visible.sync="visible">


      <el-form ref="dataForm" :model="dataForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="dataForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="dataForm.mobile" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="this.dataFormSubmit">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>

<script>
export default {
  data() {
    return {
      visible: true,
      companyId: 1,
      dataForm: {
        name: 'ff',
        mobile: 'ff'
      }
    }
  },
  methods: {
    dataFormSubmit() {
      this.$http({
        url: this.$http.adornUrl('/app/saveSignInfo'),
        method: 'post',
        data: this.$http.adornData({
          'companyId': this.companyId,
          'name': this.dataForm.name,
          'mobile': this.dataForm.mobile,
        })
      }).then(({data}) => {
        if (data & data.code === 0) {
          this.$alert('操作成功')
          this.$message({
            message: '操作成功',
            type: 'success',
            duration: 1500,
            onClose: () => {
              this.visible = false
              // this.$emit('refreshDataList')
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
