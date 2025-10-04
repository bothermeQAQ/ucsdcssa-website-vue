<template>
  <div class="application-dept">
    <div class="back" @click="goBack">← 返回招新入口</div>
    <div v-if="dept">
      <h1>{{ dept.name }} 招新（占位页）</h1>
      <p class="tip">此页面目前为占位，后续将添加{{ dept.name }}的专属介绍、岗位、以及报名表单。</p>
      <div class="preview" v-if="dept.image">
        <img :src="dept.image" :alt="dept.name" />
      </div>
      <el-divider />
      <h2>通用报名表（暂时共享）</h2>
      <iframe
        class="form-frame"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfaqiePyewGlCKrZS4G59Es_0BG_MSIm52e1C7b8PGgqoaFxg/viewform?embedded=true"
        width="1000"
        height="1886"
      >Loading…</iframe>
    </div>
    <div v-else class="not-found">
      <h1>未找到该部门</h1>
      <p>请返回上一页重新选择。</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { findDepartmentBySlug } from '../staticApplicationDepartments'

const route = useRoute()
const router = useRouter()
const dept = findDepartmentBySlug(route.params.slug)

function goBack () {
  router.push({ name: 'ApplicationPortal' })
}
</script>

<style scoped lang="less">
.application-dept {
  padding: 2rem 2vw 4rem;
  h1 { text-align: center; font-size: clamp(1.8rem,3vw,3rem); margin: 0 0 1rem; }
  h2 { text-align: center; font-size: 1.3rem; margin: 2rem 0 1rem; }
  .tip { text-align: center; color: #ddd; max-width: 820px; margin: 0 auto 1.5rem; line-height: 1.5; }
  .back { cursor: pointer; color: #3a93ff; margin-bottom: 1rem; font-weight: 600; width: fit-content; }
  .preview { max-width: 420px; margin: 0 auto 2rem; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 18px -6px rgba(0,0,0,.5); }
  .preview img { width: 100%; display: block; object-fit: cover; }
  .form-frame { width: 80%; margin: 0 10%; border: none; }
  .not-found { text-align: center; padding: 4rem 1rem; }
}

@media (max-width: 900px) {
  .application-dept { padding: 1.2rem 0.6rem 3rem; }
  .application-dept .form-frame { width: 100%; margin: 0; }
}
</style>
