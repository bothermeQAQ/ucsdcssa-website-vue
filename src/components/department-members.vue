<template>
  <div class="members-container">
    <el-col>
      <el-row class="row-bg" :gutter="60">
        <el-col :span="6" v-for="(value, key, index) in members" :key="index">
          <department-tab 
            :photo-src="`${classified.backendAddress}/member/${departmentName}/${key}/${year}`"
            :member-name="key"
            :position="value['position']"
          />
        </el-col>
      </el-row>
    </el-col>
  </div>
</template>

<script setup>
import { classified } from "../classified";
import DepartmentTab from "./department-tab.vue";

// Define props to receive data from the parent component
const props = defineProps(["departmentName", "members", "year"]);

const currentYear = (new Date()).getFullYear();
</script>

<script>
export default {
  name: "DepartmentMembers",
};
</script>

<style scoped lang="less">
.section-title {
  text-align: center;
}
</style>