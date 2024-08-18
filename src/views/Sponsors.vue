<!-- 这只是一个模版文件:> -->

<template>
  <div class="sponsors">
    <h1>Sponsors</h1>
    <!-- 这里是赞助商内容 -->

    <!-- 赞助商 -->
        <el-col :span="9">  <el-row class="follow" justify="center" > Sponsors </el-row>  
        <el-row justify="center">

        <!-- <el-col :span="2" class="icon-sponsor">
          <el-image :src="getAssetsFile('panda-express.png')" class="icon sponsor-container tiktok"></el-image>
        </el-col> -->
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('panda-express.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; ">
                Panda Express
              </div>
            </template>
          </el-popover>
        </el-col>
        
        

        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('tapioca-express.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Tapioca Express
              </div>
            </template>
          </el-popover>
        </el-col>
        
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('yogurt-world.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Yogurt World
              </div>
            </template>
          </el-popover>
        </el-col>
        
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('taco-villa.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Taco Villa
              </div>
            </template>
          </el-popover>
        </el-col>
        
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right">
            <template #reference>
              <el-image :src="getAssetsFile('spot-ktv.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Spot KTV
              </div>
            </template>
          </el-popover>
        </el-col>
        
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('eastern-dynasty.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Eastern Dynasty
              </div>
            </template>
          </el-popover>
        </el-col>
        

       
        </el-row>

        <!-- second row -->
      

          <el-row justify="center">
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('blue-pepper.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Blue Pepper
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('fan-fan.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Fan Fan
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('starbucks.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Starbucks
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('youmi.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Youmie
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('kanpai.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    KANPAI
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('o-billiard-cafe.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    O Billiard Cafe
                  </div>
                </template>
              </el-popover>
            </el-col>
    
          

         
        </el-row>

          <!-- third row -->
          <el-row justify="center">

            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('rakiraki.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    RAKIRAKI
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('shanghai-cafe.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                     Shanghai Cafe
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('dumpling-inn.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Dumpling Inn
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('m-and-j.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    M&J 798
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('si-chuan-garden.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Spicy City
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('bbking.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    BB KING
                  </div>
                </template>
              </el-popover>
            </el-col>
            


          

          </el-row>

        <!-- fourth row -->
        <el-row justify="center">
       
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('sizzling-pot-king.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Sizzling Pot King 
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('chakaa.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Chakaa 
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('du-entertainment.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  DU Entertainment
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('encounter.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Encounter
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('k.ma.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  K.MA
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('vivi-bubble-tea.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  ViVi Bubble Tea
                </div>
              </template>
            </el-popover>
          </el-col>
  
        </el-row>

        <!-- fifth row -->
        <el-row justify="center">
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('yin-tang.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Yin Tang
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('wu-hu.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Wu Hu
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('hai-si.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                 Hair Star 
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('nobel-chef.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  The Nobel Chef
                </div>
              </template>
            </el-popover>
          </el-col>
        </el-row>
      </el-col>
    
  </div>
</template>

<script>
export default {
  name: "Sponsors"
}
</script>

<style scoped>
.sponsors {
  padding: 20px;
}
</style>
