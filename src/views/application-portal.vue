<template>
  <div class="application-portal">
    <div class="cards-wrapper">
      <div
        v-for="dept in departments"
        :key="dept.slug"
        class="dept-card"
        @click="goDept(dept.slug)"
      >
        <div class="img-wrapper" :class="{'no-image': !hasImage(dept.image)}">
          <img v-if="hasImage(dept.image)" :src="dept.image" :alt="dept.name" />
          <div v-else class="fallback">{{ dept.name }}</div>
          <div class="overlay">
            <h2>{{ dept.name }}</h2>
            <span class="badge">招新进行中！</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { applicationDepartments as departments } from '../staticApplicationDepartments'

const router = useRouter()

function goDept (slug) {
  router.push({ name: 'ApplicationDepartment', params: { slug } })
}

function hasImage (src) {
  // 简单判断: 有文件名且不是占位
  return src && !src.includes('新媒体部招新.png-missing')
}
</script>

<style scoped lang="less">
.application-portal { padding: 4rem 2vw 3rem; }

.cards-wrapper {
  display: grid;
  gap: 3.2rem 3.6rem; // 增大横向纵向间距
  grid-template-columns: repeat(2, minmax(0, 1fr)); // 始终两列
  width: 100%;
  max-width: 1400px; // 限制最大宽度，防止超宽屏卡片过大
  margin: 0 auto; // 居中
  align-items: stretch;
  padding: 0 1rem; // 两侧留一点呼吸空间
}

.dept-card {
  cursor: pointer;
  position: relative;
  aspect-ratio: 1 / 1; // 正方形
  border-radius: 18px;
  overflow: hidden;
  transition: transform .28s ease, box-shadow .28s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 14px 34px -12px rgba(0,0,0,.6), 0 6px 16px -6px rgba(0,0,0,.5);
  }
}

.img-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: #0d141b;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 60%; // 稍微往下裁一点
    display: block;
    filter: brightness(.92) contrast(1.05) saturate(1.1);
    transition: transform .6s ease;
  }
  .fallback {
    color: #fff;
    font-size: 1.4rem;
    letter-spacing: .1em;
    text-align: center;
    padding: 1rem;
  }
  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem 1.1rem 1.2rem;
    background: linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.15) 40%, rgba(0,0,0,0));
    h2 { margin: 0 0 .5rem; font-size: 1.35rem; color: #fff; font-weight: 600; text-shadow: 0 2px 6px rgba(0,0,0,.6); }
  .badge { width: fit-content; background: #8b0000; color: #fff; font-weight: 600; padding: .30rem .70rem; border-radius: 6px; font-size: .78rem; letter-spacing: .06em; box-shadow: 0 3px 10px -3px rgba(0,0,0,.55); }
  }
  &:hover img { transform: scale(1.05); }
}

// 移除原 info 区域（合并到 overlay）

@media (hover: none) and (max-width: 800px) {
  .dept-card:hover { transform: none; }
  .application-portal { padding: 2.8rem 0.6rem 3rem; }
  .cards-wrapper { gap: 1.6rem 1.8rem; padding: 0 .4rem; }
}

/* 如果屏幕非常窄仍坚持两列，自动减小间距与字体 */
@media (max-width: 460px) {
  .cards-wrapper { gap: .8rem; }
  .img-wrapper .overlay h2 { font-size: 1.05rem; }
  .img-wrapper .overlay .badge { font-size: .66rem; padding: .24rem .5rem; }
}
</style>
