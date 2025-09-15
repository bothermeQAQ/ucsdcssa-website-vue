<template>
  <el-container>
    <el-header class="common">

      <el-row justify="space-between" align="middle">

        <!--CSSA LOGO-->
        <el-col :span="12" :offset="2">
          <el-row align="middle">
            <el-image class="logo" :src="getAssetsFile('logo-with-text.png')" fit="contain"></el-image>
          </el-row>
        </el-col>

        <el-col :span="10">
          <el-row justify="space-between" align="middle">
            <!-- 改语言按钮  -->
            <el-col :span="2.5">
              <div>
                <el-button plain link class="el-dropdown-link" id="home-page-button" @click="switchLanguage()">
                  <el-icon :size = "20">
                    <!-- <Switch />   Element Plus 提供的图标库，基于 SVG 实现 -->
                    <!-- 设置中英互译按钮图片 -->
                  <img src="/src/assets/translation.png" alt="Switch Language" style="width: 20px; height: 20px;"/>
                </el-icon>
              </el-button>
                </div>
            </el-col>

            <!--主页按钮-->
            <!--<el-col :span="2.5">-->
            <el-col :span="2.5">
              <div>
                <el-button plain class="el-dropdown-link" id="home-page-button" link
                           @click="router.replace({name: 'Home'}); clearButtonState('home-page-button');">{{ $t("nav.home") }}
                </el-button>
              </div>
            </el-col>

            <!--访问移动端页面按钮-->
            <el-col :span="4.5">
              <div>
                <el-button plain class="el-dropdown-link" id="mobile-page-button"  link @click="openMobilePage">
                  {{ $t("nav.mobile") }}
                </el-button>
              </div>
            </el-col>

            <!--关于CSSA按钮-->
            <!--锚点做起来太麻烦，感觉没有必要，先去掉吧-->
            <!--<el-col :span="4.5">-->
            <!--  <div>-->
            <!--    <el-button type="plain" class="el-dropdown-link" link @click="goAnchor('homeintro')">关于CSSA</el-button>-->
            <!--  </div>-->
            <!--</el-col>-->

            <!--学生服务折叠面板-->
            <el-col :span="3">
              <el-dropdown>
          <span class="el-dropdown-link">
            {{ $t("nav.service") }}
            <el-icon class="el-icon--right">
              <arrow-down/>
            </el-icon>
          </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <!--pdf文件太大了，打包的时候不会被编译成代码。因此需要放在public文件夹里面。这样打包的时候会被直接复制到dist文件夹中。-->
                    <a href="/一城一程——UCSD%20CSSA新生手册%205.0_compressed.pdf" target="_blank">
                      <el-dropdown-item>{{ $t("nav.resources.cssaManual") }}</el-dropdown-item>
                    </a>
                    <a href="https://mp.weixin.qq.com/s/sFuOISwjORAB46fc_CrCeQ" target="_blank">
                      <el-dropdown-item>{{ $t("nav.resources.newStudentResources") }}</el-dropdown-item>
                    </a>
                    <a href="https://mp.weixin.qq.com/s/nYxpPqBgKjTkYPmhf7qJMg" target="_blank">
                      <el-dropdown-item>{{ $t("nav.resources.welcomeMeeting") }}</el-dropdown-item>
                    </a>
                    <router-link to="/home/application">
                      <el-dropdown-item>{{ $t("nav.resources.applicationPage") }}</el-dropdown-item>
                    </router-link>
                    <a href="/Study Guidelines for CSE 11 at UCSD.pdf" target="_blank">
                      <el-dropdown-item>{{ $t("nav.resources.studyGuideCSE11") }}</el-dropdown-item>
                    </a>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>

            <!--活动折叠面板-->
            <!--  <el-col :span="3.75">-->
            <!--    <el-dropdown>-->
            <!--<span class="el-dropdown-link">-->
            <!--  活动-->
            <!--  <el-icon class="el-icon&#45;&#45;right">-->
            <!--    <arrow-down/>-->
            <!--  </el-icon>-->
            <!--</span>-->
            <!--      <template #dropdown>-->
            <!--        <el-dropdown-menu>-->
            <!--          <el-dropdown-item>活动主页</el-dropdown-item>-->
            <!--          <el-dropdown-item>开学季活动</el-dropdown-item>-->
            <!--          <el-dropdown-item>春节系列活动</el-dropdown-item>-->
            <!--          <el-dropdown-item>春季篮球赛</el-dropdown-item>-->
            <!--        </el-dropdown-menu>-->
            <!--      </template>-->
            <!--    </el-dropdown>-->
            <!--  </el-col>-->
            
            <!-- 部门折叠面板 -->
            <el-col :span="4">
            <el-dropdown >
              <span class="el-dropdown-link">
                {{ $t("nav.department") }}
                <el-icon class="el-icon--right">
                  <arrow-down/>
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu >
                  <!-- 2024-2025 -->
                  <el-dropdown-item>
                    <el-dropdown trigger="hover" placement="right-start"> 
                      <span class="el-dropdown-link">
                        2024-2025
                        <el-icon class="el-icon--right">
                          <arrow-right/>
                        </el-icon>
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item @click="goToDepartment('开发部', '2025')">{{ $t("nav.depart.development") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('人事部', '2025')">{{ $t("nav.depart.hr") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('外联部', '2025')">{{ $t("nav.depart.externalRelations") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('文体部', '2025')">{{ $t("nav.depart.cultureAndSports") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('新媒体部', '2025')">{{ $t("nav.depart.newMedia") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('宣传部', '2025')">{{ $t("nav.depart.promotion") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('学术部', '2025')">{{ $t("nav.depart.academic") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('职业发展部', '2025')">{{ $t("nav.depart.professional") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('研究生部', '2025')">{{ $t("nav.depart.masters") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('主席团', '2025')">{{ $t("nav.depart.executiveTeam") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('荣誉部员', '2025')">{{ $t("nav.depart.honoraryMember") }}</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </el-dropdown-item>

                  <!-- 2023-2024 -->
                  <el-dropdown-item>
                    <el-dropdown trigger="hover" placement="right-start">
                      <span class="el-dropdown-link">
                        2023-2024
                        <el-icon class="el-icon--right">
                          <arrow-right/>
                        </el-icon>
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item @click="goToDepartment('开发部', '2024')">{{ $t("nav.depart.development") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('人事部', '2024')">{{ $t("nav.depart.hr") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('外联部', '2024')">{{ $t("nav.depart.externalRelations") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('文体部', '2024')">{{ $t("nav.depart.cultureAndSports") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('新媒体部', '2024')">{{ $t("nav.depart.newMedia") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('宣传部', '2024')">{{ $t("nav.depart.promotion") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('学术部', '2024')">{{ $t("nav.depart.academic") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('职业发展部', '2024')">{{ $t("nav.depart.professional") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('研究生部', '2024')">{{ $t("nav.depart.masters") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('主席团', '2024')">{{ $t("nav.depart.executiveTeam") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('荣誉部员', '2024')">{{ $t("nav.depart.honoraryMember") }}</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </el-dropdown-item>

                  <!-- 2022-2023 -->
                  <el-dropdown-item>
                    <el-dropdown trigger="hover" placement="right-start">
                      <span class="el-dropdown-link">
                        2022-2023
                        <el-icon class="el-icon--right">
                          <arrow-right/>
                        </el-icon>
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item @click="goToDepartment('开发部', '2023')">{{ $t("nav.depart.development") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('人事部', '2023')">{{ $t("nav.depart.hr") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('外联部', '2023')">{{ $t("nav.depart.externalRelations") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('文体部', '2023')">{{ $t("nav.depart.cultureAndSports") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('新媒体部', '2023')">{{ $t("nav.depart.newMedia") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('宣传部', '2023')">{{ $t("nav.depart.promotion") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('学术部', '2023')">{{ $t("nav.depart.academic") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('职业发展部', '2023')">{{ $t("nav.depart.professional") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('研究生部', '2023')">{{ $t("nav.depart.masters") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('主席团', '2023')">{{ $t("nav.depart.executiveTeam") }}</el-dropdown-item>
                          <el-dropdown-item @click="goToDepartment('荣誉部员', '2023')">{{ $t("nav.depart.honoraryMember") }}</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>


            <!--校内社团介绍折叠面板-->
            <!--  <el-col :span="6">-->
            <!--    <el-dropdown>-->
            <!--<span class="el-dropdown-link">-->
            <!--  校内社团介绍-->
            <!--  <el-icon class="el-icon&#45;&#45;right">-->
            <!--    <arrow-down/>-->
            <!--  </el-icon>-->
            <!--</span>-->
            <!--      <template #dropdown>-->
            <!--        <el-dropdown-menu>-->
            <!--          <el-dropdown-item>CES 中国工程学会</el-dropdown-item>-->
            <!--          <el-dropdown-item>Chinese Computer Community</el-dropdown-item>-->
            <!--          <el-dropdown-item>剧本杀&跑团社团</el-dropdown-item>-->
            <!--          <el-dropdown-item>FMO 国风音乐社团</el-dropdown-item>-->
            <!--          <el-dropdown-item>海螺心理</el-dropdown-item>-->
            <!--          <el-dropdown-item>三晤剧社</el-dropdown-item>-->
            <!--          <el-dropdown-item>CCDT 拂衣舞社</el-dropdown-item>-->
            <!--        </el-dropdown-menu>-->
            <!--      </template>-->
            <!--    </el-dropdown>-->
            <!--  </el-col>-->

            <!-- 关于我们部分 -->

            <!-- 关于我们结尾 -->
            <el-col :span="3">
              <el-dropdown>
            <span class="el-dropdown-link">
              {{ $t("nav.us") }}
              <el-icon class="el-icon--right">
                <arrow-down/>
              </el-icon>
            </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <a href="https://mp.weixin.qq.com/s/NPgJVadmqtCoHwW8m6zNYw" target="_blank">
                        <el-dropdown-item>{{ $t("nav.dropdown.clubFair") }}</el-dropdown-item>
                      </a>
                      <a href="https://mp.weixin.qq.com/s/ridNY9zyIwH0xYT6WbjFuw" target="_blank">
                        <el-dropdown-item>{{ $t("nav.dropdown.summerEcho") }}</el-dropdown-item>
                      </a>
                      <a href="https://mp.weixin.qq.com/s/ttK0D3K8h_zFERkrEGURTA" target="_blank">
                        <el-dropdown-item>{{ $t("nav.dropdown.academicInterview") }}</el-dropdown-item>
                      </a>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </el-col>

            <!-- 赞助商部分 -->
            <el-col :span="3">
              <div>
                <el-button plain class="el-dropdown-link" id="home-page-button" link
                           @click="router.replace({name: 'Sponsors'}); 
                           clearButtonState('home-page-button');">{{ $t("nav.sponsor") }}
                </el-button>
              </div>
            </el-col>
            <!-- 赞助商部分结尾 -->

            

          </el-row>
        </el-col>
      </el-row>
    </el-header>
  </el-container>

</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";
import {ArrowDown} from '@element-plus/icons-vue';
// import {Switch} from '@element-plus/icons-vue';  使用自定义图片
import {useRouter} from "vue-router"

const router = useRouter();



// 清除按钮点击后的状态，使其恢复到未点击状态。
// https://blog.csdn.net/qq_43586088/article/details/126367134
function clearButtonState(id) {
  document.getElementById(id).blur();
}

function goToDepartment(departmentName, year) {
  router.push({
    name: 'Department',
    // params现在必须定义在地址里了 https://www.cnblogs.com/liao-yi/articles/17028269.html
    params: {
      departmentName,
      year
    }
  })
}


function openMobilePage() {
  // Fixes dual-screen position                            Most browsers       Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top
  
  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height
  
  const w = 400
  const h = 600
  
  const left = ((width / 2) - (w / 2)) + dualScreenLeft
  const top = ((height / 2) - (h / 2)) + dualScreenTop
  const newWindow = window.open("../#/mobile/?force=mobile", "UCSD CSSA移动端网站", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbar=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)
  if (window.focus) {
    newWindow.focus()
  }
  // 清除按钮点击状态
  clearButtonState("mobile-page-button")
}
</script>

<script>
export default {
  name: "TheHeader",
  methods: {
    switchLanguage() {
      this.$changeLanguage();
    }
  }
}


</script>

<style scoped lang="less">
  .common {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo {
    width: 15vw;
  }

  .el-dropdown-link {
    font-family: sans-serif;
    font-size: 1vw;
    white-space: nowrap;
    vertical-align: baseline;
    line-height: 2.5vw;

    &:hover {
      color: rgba(196, 86, 86, 255);
    }
  }

  :deep(.el-dropdown-menu__item:not(.is-disabled):focus) {
    background-color: rgba(253, 226, 226, 255);
    color: rgba(196, 86, 86, 255);
  }

  .el-button:hover {
    color: rgba(196, 86, 86, 255);
  }

  .el-icon--right {
    margin-left: -0.15vw;
  }
  </style>