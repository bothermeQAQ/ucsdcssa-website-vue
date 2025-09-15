<template>
  <department-breadcrumb :department-name="departmentName"/>
  <department-intro :department-name="departmentName" :department-data="departmentData" :year="year"/>
  <department-members :department-name="departmentName" :members="departmentData['members']" :year="year"/>
  <el-backtop style="color: rgba(196, 86, 86, 255); --el-backtop-hover-bg-color: rgba(253, 226, 226, 255);"/>
</template>

<script setup>
import DepartmentIntro from "../components/department-intro.vue";
import DepartmentBreadcrumb from "../components/department-breadcrumb.vue";
import DepartmentMembers from "../components/department-members.vue";
import {useRoute} from "vue-router";
import {inject, watch} from "vue";

const route = useRoute()
// params现在必须定义在地址里了 https://www.cnblogs.com/liao-yi/articles/17028269.html
let departmentName = $ref(route.params.departmentName)
let year = $ref(route.params.year)
let departmentData = $ref({})

const axios = inject("axios")

// 从后端获取部门数据
async function getDepartmentData(departmentName, year) {
  departmentData = (await axios.get(`/department/${departmentName}/${year}`)).data
}

// 监听路由带来的部门变化
watch(
  () => [route.params.departmentName, route.params.year], // Watch both departmentName and year
  ([newDepartmentName, newYear], [oldDepartmentName, oldYear] = []) => {
    // Fallback to empty array for previous values
    if (newDepartmentName && newYear) {
      departmentName = newDepartmentName;
      year = newYear;
      // Clear departmentData to avoid data inconsistency
      departmentData = {};
      getDepartmentData(departmentName, year); // Pass both departmentName and year
    } else {
      console.warn("Missing departmentName or year in route params");
    }
  },
  { immediate: true }
);
</script>

<script>
export default {
  name: "department"
}
</script>

<style scoped lang="less">
</style>