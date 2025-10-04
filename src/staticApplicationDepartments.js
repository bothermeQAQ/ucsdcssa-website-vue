// 部门招新入口配置
// slug 将用于路由 /application/:slug
// image 位于 public/zhaoxin 下（放在 public 里可直接通过 /zhaoxin/xxx 访问）
export const applicationDepartments = [
  {
    name: '开发部',
    slug: 'tech',
    image: '/zhaoxin/开发部招新.png'
  },
  {
    name: '宣传部',
    slug: 'design',
    image: '/zhaoxin/宣传部招新.png'
  },
  {
    name: '新媒体部',
    slug: 'media',
    // 如果暂时没有图片, 可在 public/zhaoxin 中补充文件名一致的图片
    image: '/zhaoxin/新媒体部招新.png'
  },
  {
    name: '人事部',
    slug: 'hr',
    image: '/zhaoxin/人事部招新.jpg'
  },
  {
    name: '外联部',
    slug: 'outreach',
    image: '/zhaoxin/外联部招新.jpg'
  },
  {
    name: '文体部',
    slug: 'events',
    image: '/zhaoxin/文体部招新.jpg'
  },
  {
    name: '学术部',
    slug: 'academic',
    image: '/zhaoxin/学术部招新.png'
  },
  {
    name: '职业发展部',
    slug: 'career',
    image: '/zhaoxin/职发部招新.jpg'
  },
  {
    name: '研究生部',
    slug: 'graduate',
    image: '/zhaoxin/研究生部招新.png'
  }
]

export function findDepartmentBySlug (slug) {
  return applicationDepartments.find(d => d.slug === slug)
}
