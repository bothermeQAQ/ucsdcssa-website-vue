<template>
  <div class="sponsors">
    <h1>Sponsors</h1>

    <el-row justify="center" gutter="20">
      <el-col :span="2" class="icon-sponsor" v-for="(sponsor, index) in sponsors" :key="index">
        <el-popover placement="right">
          <template #reference>
            <el-image :src="getAssetsFile(sponsor.image)" class="icon sponsor-container sponsors"/>
          </template>
          <template #default>
            <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
              {{ sponsor.name }}
            </div>
          </template>
        </el-popover>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Sponsors",
  data() {
    return {
      sponsors: [
        { name: 'Panda Express', image: 'panda-express.png' },
        { name: 'Tapioca Express', image: 'tapioca-express.png' },
        { name: 'Yogurt World', image: 'yogurt-world.png' },
        { name: 'Taco Villa', image: 'taco-villa.png' },
        { name: 'Spot KTV', image: 'spot-ktv.png' },
        { name: 'Eastern Dynasty', image: 'eastern-dynasty.png' },
        { name: 'Blue Pepper', image: 'blue-pepper.png' },
        { name: 'Fan Fan', image: 'fan-fan.png' },
        { name: 'Starbucks', image: 'starbucks.png' },
        { name: 'Youmie', image: 'youmi.png' },
        { name: 'KANPAI', image: 'kanpai.png' },
        { name: 'O Billiard Cafe', image: 'o-billiard-cafe.png' },
        { name: 'RAKIRAKI', image: 'rakiraki.png' },
        { name: 'Shanghai Cafe', image: 'shanghai-cafe.png' },
        { name: 'Dumpling Inn', image: 'dumpling-inn.png' },
        { name: 'M&J 798', image: 'm-and-j.png' },
        { name: 'Spicy City', image: 'si-chuan-garden.png' },
        { name: 'BB KING', image: 'bbking.png' },
        { name: 'Sizzling Pot King', image: 'sizzling-pot-king.png' },
        { name: 'Chakaa', image: 'chakaa.png' },
        { name: 'DU Entertainment', image: 'du-entertainment.png' },
        { name: 'Encounter', image: 'encounter.png' },
        { name: 'K.MA', image: 'k.ma.png' },
        { name: 'ViVi Bubble Tea', image: 'vivi-bubble-tea.png' },
        { name: 'Yin Tang', image: 'yin-tang.png' },
        { name: 'Wu Hu', image: 'wu-hu.png' },
        { name: 'Hair Star', image: 'hai-si.png' },
        { name: 'The Nobel Chef', image: 'nobel-chef.png' }
      ]
    };
  },
  methods: {
    getAssetsFile(name) {
      return new URL(`../assets/${name}`, import.meta.url).href;
    }
  }
}
</script>

<style scoped>
.sponsors {
  padding: 20px;
}
.icon-sponsor {
  margin-bottom: 20px;
}
</style>
