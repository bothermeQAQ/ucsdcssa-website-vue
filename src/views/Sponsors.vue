<template>
  <div class="sponsors">
    <div class="hero">
      <h1 class="section-title">Sponsors</h1>
      <p class="section-subtitle">感谢所有合作伙伴一直以来的支持 · Minimal, clear, and focused</p>
    </div>
    
    <!-- 普通赞助商 -->
    <div class="sponsors-grid">
      <div 
        v-for="sponsor in sponsors" 
        :key="sponsor.name"
        class="sponsor-card"
      >
        <el-popover 
          placement="top" 
          :width="320"
          trigger="hover"
          popper-class="sponsor-popover"
        >
          <template #reference>
            <a :href="sponsor.url" target="_blank" v-if="sponsor.url" class="sponsor-link" rel="noopener noreferrer" :aria-label="'Open ' + sponsor.name + ' website in a new tab'">
              <el-image 
                :src="getAssetsFile(sponsor.image)" 
                class="sponsor-icon"
                fit="contain"
                :alt="sponsor.name"
              />
            </a>
            <el-image 
              v-else
              :src="getAssetsFile(sponsor.image)" 
              class="sponsor-icon"
              fit="contain"
              :alt="sponsor.name"
            />
          </template>
          <template #default>
            <div class="sponsor-details">
              <h3 class="sponsor-name">{{ sponsor.name }}</h3>
              <p class="sponsor-description">{{ sponsor.description }}</p>
              <div class="sponsor-info">
                <div v-if="sponsor.address" class="address-section">
                  <i class="el-icon-location"></i>
                  <span>{{ sponsor.address || '地址待更新' }}</span>
                </div>
                <div v-if="sponsor.discount" class="discount-section">
                  <i class="el-icon-price-tag"></i>
                  <span class="discount-text">{{ sponsor.discount }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-popover>
      </div>
    </div>

    <!-- CSSA Card Partners Section -->
  <h1 class="section-title cssa-partners-title">CSSA Card Partners</h1>
    
    <div class="sponsors-grid">
      <div 
        v-for="partner in cssaPartners" 
        :key="partner.name"
        class="sponsor-card partner-card"
      >
        <el-popover 
          placement="top" 
          :width="320"
          trigger="hover"
          popper-class="sponsor-popover partner-popover"
        >
          <template #reference>
            <a :href="partner.url" target="_blank" v-if="partner.url" class="sponsor-link" rel="noopener noreferrer" :aria-label="'Open ' + partner.name + ' website in a new tab'">
              <el-image 
                :src="getAssetsFile(partner.image)" 
                class="sponsor-icon"
                fit="contain"
                :alt="partner.name"
              />
            </a>
            <el-image 
              v-else
              :src="getAssetsFile(partner.image)" 
              class="sponsor-icon"
              fit="contain"
              :alt="partner.name"
            />
          </template>
          <template #default>
            <div class="sponsor-details">
              <h3 class="sponsor-name">{{ partner.name }}</h3>
              <p class="sponsor-description">{{ partner.description }}</p>
              <div class="sponsor-info">
                <div v-if="partner.address" class="address-section">
                  <i class="el-icon-location"></i>
                  <span>{{ partner.address || '地址待更新' }}</span>
                </div>
                <div v-if="partner.discount" class="discount-section highlight">
                  <i class="el-icon-price-tag"></i>
                  <span class="discount-text">{{ partner.discount }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-popover>
      </div>
    </div>

    <!-- 其他赞助商 -->
  <h2 class="section-title other-sponsors-title">Other Sponsors</h2>
    
    <div class="sponsors-grid">
      <div 
        v-for="other in otherSponsors" 
        :key="other.name"
        class="sponsor-card"
      >
        <el-popover 
          placement="top" 
          :width="320"
          trigger="hover"
          popper-class="sponsor-popover"
        >
          <template #reference>
            <a :href="other.url" target="_blank" v-if="other.url" class="sponsor-link" rel="noopener noreferrer" :aria-label="'Open ' + other.name + ' website in a new tab'">
              <el-image 
                :src="getAssetsFile(other.image)" 
                class="sponsor-icon"
                fit="contain"
                :alt="other.name"
              />
            </a>
            <el-image 
              v-else
              :src="getAssetsFile(other.image)" 
              class="sponsor-icon"
              fit="contain"
              :alt="other.name"
            />
          </template>
          <template #default>
            <div class="sponsor-details">
              <h3 class="sponsor-name">{{ other.name }}</h3>
              <p class="sponsor-description">{{ other.description }}</p>
              <div class="sponsor-info">
                <div v-if="other.address" class="address-section">
                  <i class="el-icon-location"></i>
                  <span>{{ other.address || '地址待更新' }}</span>
                </div>
                <div v-if="other.discount" class="discount-section">
                  <i class="el-icon-price-tag"></i>
                  <span class="discount-text">{{ other.discount }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sponsors",
  data() {
    return {
      sponsors: [
        {
          name: "Panda Express",
          image: "panda-express.png",
          url: "https://www.pandaexpress.com/",
          description: "美式中餐连锁快餐品牌，以新鲜制作的中式菜品为特色，提供橙子鸡、左宗棠鸡等经典美食。",
          address: "", // 留空，用户可后续填入
          discount: ""
        },
        {
          name: "Tapioca Express",
          image: "tapioca-express.png",
          url: "https://tapiocaexpress.com/",
          description: "知名台式茶饮连锁品牌，专营珍珠奶茶、果茶和台式小食，为您提供正宗的台湾味道。",
          address: "",
          discount: "10% off"
        },
        {
          name: "Yogurt World",
          image: "yogurt-world.png",
          url: "https://www.instagram.com/yogurtworld.ucsd/",
          description: "新鲜酸奶专门店，提供多种口味的手工酸奶和健康配菜，是健康生活的完美选择。",
          address: "",
          discount: "10% off"
        },
        {
          name: "Taco Villa",
          image: "taco-villa.png",
          url: "https://tacovilla.net/",
          description: "正宗墨西哥风味餐厅，提供新鲜制作的墨西哥卷饼、塔可和传统墨西哥美食。享用到最鲜美、最地道的墨西哥特色美食。",
          address: "",
          discount: "10% off"
        },
        {
          name: "Spot KTV",
          image: "spot-ktv.png",
          url: "https://spot-ktv.com-place.com/",
          description: "SPOT KTV 是圣地亚哥一处充满活力的卡拉 OK 聚会地，集美味的台式与中式料理、愉悦的氛围以及难忘的唱歌体验于一身。这里以地道又可口的招牌菜而闻名，例如香辣牛肉面、牛肉卷和盐酥鸡，都深受食客喜爱。客人在此不仅能享用到美味佳肴，还能体验到优质的服务与充满欢乐的环境——无论是朋友聚会还是夜晚小酌，这里都是绝佳的选择。现代而温馨的氛围，加上维护良好的隔音包间，为卡拉 OK 提供了理想的体验，使 SPOT KTV 成为兼具娱乐与美食的首选之地。",
          address: "7327 Clairemont Mesa Blvd, San Diego, CA 92111",
          discount: "15% off (Cash Only)"
        },
        {
          name: "Eastern Dynasty",
          image: "eastern-dynasty.png",
          url: "https://eastern-dynasty.thaitomseattle.com/",
          description: "粤品 高档中餐厅，专门提供粤菜和川菜，以精致的菜品和优雅的环境著称。",
          address: "4690 Convoy St, B109, San Diego, CA 92111",
          discount: ""
        }
      ],
      cssaPartners: [
        {
          name: "Na Tart 蛋挞",
          image: "natart蛋挞.png",
          url: "https://natartca.com/",
          description: "Na Tart stands for Nature Art. We reinvent the classic Portuguese egg tart with crispy layers and silky custard, infused with Asian-inspired flavors. Rooted in tradition, elevated with creativity every bite is a taste of nature and art.",
          address: "5252 Balboa Avenue, San Diego, CA 92117",
          discount: "10% off (minimal 10 dollars)"
        },
        {
          name: "Blue Pepper",
          image: "blue-pepper.png",
          url: "https://www.bluepepperucsd.com/",
          description: "时尚韩式料理餐厅，提供正宗韩国烤肉、石锅拌饭和各种韩式小菜。",
          address: "",
          discount: "10% off (minimal 10 dollars)"
        },
        {
          name: "Chakaa",
          image: "chakaa.png",
          url: "https://www.chakaateashoppe.com/",
          description: "我们为您提供多样美味的饮品与小食，例如芝士桃子乌龙、波波冬瓜奶茶、冬瓜茶、瑞士可可，以及波波西柚冰沙。我们位于 111 号公路，欢迎您线上点单，选择外带或外送！",
          address: "",
          discount: "10% off"
        },
        {
          name: "Youmie",
          image: "youmi.png",
          url: "https://www.yomiesricexyogurt.us/",
          description: "一家源自中国的酸奶饮品品牌，以其独特的紫米酸奶饮品和现点现做的制作方式而闻名，提供富含益生菌的健康饮品。该品牌强调使用优质酸奶作为奶源，并搭配多种水果、谷物等配料，制作出浓郁饱腹的酸奶饮料，产品系列丰富，如紫米系列、新鲜水果酸奶等。",
          address: "",
          discount: "10% off（Cash only）"
        },
        {
          name: "DU Entertainment",
          image: "du-entertainment.png",
          url: "https://www.instagram.com/du_entertainment_/?hl=en",
          description: "50+款桌游与精选剧本♟ 优质DM在线开本🚗",
          address: "",
          discount: "15% off"
        },
        {
          name: "Nice 2 Meet U",
          image: "encounter.png",
          url: "https://www.nanianyujian.com/",
          description: "那年遇见串串”是成都遇见餐饮管理有限公司旗下于2016年打造的一个好品牌，主要的特色就是各种正宗的成都串串，上百种食材，让你一次吃过瘾，没有任何的遗憾。发展的几年时间里，品牌一直注重树立自己的形象和打出知名度，成为了成都城里一个非常好的品牌。",
          address: "",
          discount: "15% off (credit card), 20% off (cash)"
        },
        {
          name: "Yin Tang",
          image: "yin-tang.png",
          url: "https://www.yintangsandiego.com/",
          description: "隐烫 我们的火锅汤底由多种精选食材精心熬制而成，口感醇厚、滋味悠长，让人回味无穷。牛肉、羊肉、猪肉和海鲜均来自以高品质著称的本地供应商，确保新鲜、健康与极致的美味。",
          address: "",
          discount: "10% off（Cash only）"
        },
        {
          name: "Zhengxin",
          image: "Zhengxin.png",
          url: "https://zhengxinca.com/",
          description: "正新鸡排连锁店，以台式炸鸡和各种小食为主打，口味正宗，价格亲民。",
          address: "",
          discount: "20% off cash, 10% off credit card"
        },
        {
          name: "BB King",
          image: "bbking.png",
          url: "https://www.douyin.com/user/MS4wLjABAAAAnYlIa3ZbQpFFNiSnsijc0MPBVW2MKuVmLH-0iHDxNAM",
          description: "BB king SD 首屈一指的剧本杀店 有帅气DM和一堆好玩的剧本 DM十分专业",
          address: "",
          discount: "10% off CSSA card, 20% off officer"
        },
        {
          name: "Wonderland Majiang",
          image: "wonderlan.png",
          url: "",
          description: "麻将娱乐中心，提供舒适的麻将环境和专业服务，是休闲娱乐的好去处。",
          address: "",
          discount: "20% off"
        },
        {
          name: "Calvin's Korean Chicken",
          image: "Calvin.png",
          url: "https://calvinskhotchicken.square.site/",
          description: "韩式炸鸡专门店，提供正宗韩式炸鸡和各种韩式配菜，外酥内嫩，口味绝佳。",
          address: "",
          discount: "5% off"
        },
        {
          name: "Júewèi",
          image: "juewei.png",
          url: "https://www.lingshi.us/collections/juewei",
          description: "绝味鸭脖连锁店，以麻辣鸭脖和各种卤味小食为特色，是下酒好伴侣。",
          address: "",
          discount: "10% off"
        },
        {
          name: "Xinjiang Barbeque",
          image: "xinjiang.png",
          url: "https://www.sd.xinjiangbbq.us/",
          description: "新疆烤肉餐厅，提供正宗新疆烤羊肉串和各种西域美食，体验丝绸之路风情。",
          address: "",
          discount: "10% off"
        },
        {
          name: "Hometown Taste",
          image: "Hometown-taste.png",
          url: "https://www.hometowntastechineserestaurant.com/",
          description: "家乡味中餐厅，专营传统中式家常菜，用心烹饪，让您品尝到家的味道。",
          address: "",
          discount: "20% off"
        }
      ],
      // 其他普通赞助商
      otherSponsors: [
        {
          name: "Fan Fan",
          image: "fan-fan.png",
          url: "https://fanfangroup.com/",
          description: "UCSD Fan-Fan is located in SIXTH College of UC San Diego and mainly offers various cuisines, drinks, milk teas, snacks, and more from both Eastern and Western cultures. Guided by values of unity, health, happiness, quality, innovation, and dreams, Fan-Fan is on a mission to promote Eastern culinary culture and provide excellent service to all faculty and students on campus, striving to become a well-known food brand in the UC system. Fan-Fan is a brother alliance enterprise with famous San Diego Chinese restaurant “Taste of Hunan”. To better satisfy customers’ taste buds, Fan-Fan introduces a different daily mystery dish as a way of thanking everyone for their support and attention.",
          address: "",
          discount: "20% off"
        },
        {
          name: "Starbucks",
          image: "starbucks.png",
          description: "全球知名咖啡连锁品牌，提供高品质咖啡饮品和轻食，是学习工作的理想场所。",
          url: "https://www.starbucks.com/",
          address: "",
          discount: ""
        },
        {
          name: "KANPAI",
          image: "kanpai.png",
          description: "日式居酒屋，提供正宗日本料理和清酒，感受地道的日本文化氛围。",
          url: "https://kanpaibbqsd.com/",
          address: "",
          discount: ""
        },
        {
          name: "O Billiard Cafe",
          image: "o-billiard-cafe.png",
          description: "台球厅，休闲台球, 朋友聚会的完美选择。",
          url: "https://o-zone-billiard-cafe.cafes-city.com/",
          address: "",
          discount: ""
        },
        {
          name: "RAKIRAKI",
          image: "rakiraki.png",
          description: "Authentic Japanese cuisine including ramen, tsukemen (dipping noodles), charcoal-fired yakitori, curry, ramen burgers, and more.",
          url: "https://rakirakiramen.com/",
          address: "",
          discount: ""
        },
        {
          name: "Shanghai Cafe",
          image: "shanghai-cafe.png",
          description: "上海菜餐厅，专营江南菜系，以精致的本帮菜和优雅环境著称。",
          url: "https://kanpaibbqsd.com/",
          address: "",
          discount: ""
        },
        {
          name: "Dumpling Inn",
          image: "dumpling-inn.png",
          description: "饺子专门店，手工制作各种口味饺子和中式面食，传承传统手艺。",
          url: "https://kanpaibbqsd.com/",
          address: "",
          discount: ""
        },
        {
          name: "M&J 798",
          image: "m-and-j.png",
          description: "Newly opened professional Salon Located in Irvine, CA",
          url: "https://www.instagram.com/mandj798/",
          address: "",
          discount: ""
        },
        {
          name: "Spicy City",
          image: "si-chuan-garden.png",
          description: "过桥缘 Bustling, unadorned Chinese restaurant specializing in Sichuan dishes loaded with chiles. 四川菜餐厅，以正宗川菜和火锅为特色，让您感受巴蜀风味的魅力。",
          url: "https://www.spicycitysd.com/",
          address: "",
          discount: ""
        },
        {
          name: "Sizzling Pot King",
          image: "sizzling-pot-king.png",
          description: "铁板烧餐厅，现场制作各种铁板料理，享受视觉与味觉的双重盛宴。",
          url: "https://sizzlingpotkingtogo.com/",
          address: "8058 Clairemont Mesa Blvd, San Diego, CA 92111",
          discount: ""
        },
        {
          name: "ViVi Bubble Tea",
          image: "vivi-bubble-tea.png",
          description: "100+ store locations across 13 countries. ✨A drink and food brand inspired by Taiwan, proudly founded in the New York.",
          url: "https://www.instagram.com/vivibubbletea/?hl=en",
          address: "",
          discount: ""
        },
        {
          name: "Wu Hu",
          image: "wu-hu.png",
          description: "现代中餐厅，融合传统与创新，提供精致中式料理和舒适用餐环境。",
          url: "https://www.yelp.com/biz/wuhu-tea-and-deli-san-diego-5",
          address: "5665 Lindo Paseo #1, San Diego, CA 92115",
          discount: ""
        },
        {
          name: "Hair Star",
          image: "hai-si.png",
          description: "专业美发沙龙，提供剪发、染发、造型等全方位美发服务，让您焕发新形象。",
          url: "https://kanpaibbqsd.com/",
          address: "4681 Convoy St Ste G San Diego, CA 92111",
          discount: ""
        },
        {
          name: "The Nobel Chef",
          image: "nobel-chef.png",
          description: "豪記私房菜 这家深受喜爱的餐厅专注于正宗精致的粤菜，以家庭式分享的方式呈现，既适合轻松的聚会，也适合特别的场合。顾客们赞不绝口的招牌菜有炸嫩豆腐和脆皮烧肉，许多人更是为了出色的玉米羹和西湖牛肉羹而频频光顾。餐厅温馨的氛围、贴心的服务，以及对品质的坚持，让每一次用餐都成为难忘的体验。无论是堂食还是外带，The Noble Chef 都是一颗永不让人失望的美食明珠。",
          url: "https://kanpaibbqsd.com/",
          address: "6159 Balboa Ave San Diego, CA 92111",
          discount: ""
        },
        {
          name: "K.MA",
          image: "k.ma.png",
          description: "卡玛造型 是圣地亚哥领先的美发沙龙，在全市设有三家交通便利的门店。无论您需要的是精致的剪发、亮丽的染色，还是奢华的护理，我们的专业发型师都会根据您的独特需求量身打造专属服务。立即预约吧！",
          url: "https://kmasalonsandiego.com/",
          address: "6780 Miramar Rd suite 108, San Diego, CA 92121, USA",
          discount: ""
        }
      ]
    }
  },
  methods: {
    getAssetsFile(fileName) {
      return new URL(`../assets/${fileName}`, import.meta.url).href;
    }
  }
}
</script>

<style scoped>
.sponsors {
  padding: 56px 24px 96px;
  max-width: 1240px;
  margin: 0 auto;
  background: #f8f9fb;
  min-height: 100vh;
}

.hero {
  text-align: center;
  margin: 24px 0 8px;
}

.section-title {
  text-align: center;
  font-size: 36px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
  color: #0b0d12;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 15px;
  margin: 0 auto 32px;
}

.cssa-partners-title,
.other-sponsors-title {
  margin-top: 72px;
  font-size: 28px;
  color: #0b0d12;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 28px;
  margin: 20px 0 72px;
  padding: 0 4px;
  isolation: isolate; /* create new stacking context for z-index */
}

.sponsor-card {
  position: relative;
  transition: box-shadow 300ms ease, filter 250ms ease;
  cursor: pointer;
  z-index: 0;
  background: transparent;
}

.sponsor-card:hover {
  /* no vertical movement to avoid overlap */
  z-index: 2;
}

.sponsor-link {
  display: block;
  text-decoration: none;
}

.sponsor-icon {
  width: 100%;
  height: 132px;
  border-radius: 16px;
  border: 1px solid rgba(12, 14, 20, 0.08);
  box-shadow: 0 4px 16px rgba(12, 14, 20, 0.06);
  transition: box-shadow 300ms ease, filter 250ms ease, border-color 300ms ease;
  background: linear-gradient(180deg, #ffffff, #fafbff);
  padding: 20px;
  object-fit: contain;
  filter: grayscale(0.45) contrast(1.05) saturate(0.9);
  overflow: hidden;
  box-sizing: border-box;
  pointer-events: none; /* ensure hover state is triggered on card/link */
}

.sponsor-card:hover .sponsor-icon {
  box-shadow: 0 10px 24px rgba(12, 14, 20, 0.12);
  filter: grayscale(0) contrast(1) saturate(1);
  border-color: rgba(12, 14, 20, 0.12);
}

.partner-card .sponsor-icon {
  border: 1px solid rgba(12, 14, 20, 0.12);
  background: linear-gradient(180deg, #ffffff, #fafbff);
  box-shadow: 0 6px 20px rgba(12, 14, 20, 0.10);
}

.partner-card:hover .sponsor-icon {
  box-shadow: 0 12px 28px rgba(12, 14, 20, 0.16);
}

/* 弹窗样式 */
:deep(.sponsor-popover) {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(12, 14, 20, 0.18);
  border: 1px solid rgba(12, 14, 20, 0.08);
}

:deep(.partner-popover) {
  background: #ffffff;
}

.sponsor-details {
  padding: 16px 18px 18px;
  text-align: left;
  background: #ffffff;
}

.sponsor-name {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 700;
  color: #0b0d12;
  letter-spacing: -0.01em;
}

.sponsor-description {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.65;
  color: #4b5563;
  text-align: left;
}

.sponsor-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.address-section,
.discount-section {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
}

.address-section {
  background: #f3f4f6;
  color: #6b7280;
}

.discount-section {
  background: #0b0d12;
  color: #ffffff;
  font-weight: 600;
}

.discount-section.highlight {
  background: #111827;
}

.discount-text {
  font-weight: 700;
}

.address-section i,
.discount-section i {
  font-size: 16px;
  opacity: 0.7;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .sponsors-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 22px;
  }
}

@media (max-width: 768px) {
  .sponsors {
    padding: 32px 16px 72px;
  }
  
  .section-title {
    font-size: 28px;
    margin: 0 0 6px;
  }
  
  .other-sponsors-title {
    font-size: 22px;
  }
  
  .sponsors-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 18px;
    padding: 0 4px;
  }
  
  .sponsor-icon {
    height: 108px;
    padding: 14px;
  }
  
  :deep(.sponsor-popover) {
    max-width: 320px !important;
  }
  
  .sponsor-details {
    padding: 14px 16px 16px;
  }
  
  .sponsor-name {
    font-size: 16px;
  }
  
  .sponsor-description {
    font-size: 13.5px;
  }
}

@media (max-width: 480px) {
  .sponsors-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  
  .sponsor-icon {
    height: 96px;
    padding: 12px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .other-sponsors-title {
    font-size: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sponsor-card,
  .sponsor-icon {
    transition: none !important;
  }
}
</style>



