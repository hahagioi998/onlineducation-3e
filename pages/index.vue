<template>
  
  <div>
    <!-- 幻灯片 开始 -->
    <div>
      <el-carousel :interval="5000" arrow="always" :height="bannerHeight + 'px'" loop>
        <el-carousel-item v-for="banner in bannerList" :key="banner.id">
          <img :src="banner.imageUrl" :alt="banner.title" style="width: 100%; height: inherit" >
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 幻灯片 结束 -->
    
     <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="course in courses" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        class="img-responsive"
                        :alt="course.title"
                        style="width: 257px; height: 154px"
                      >
                      <div class="cc-mask">
                        <a href="#" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a href="#" :title="course.title" class="course-title fsize18 c-333">{{course.title}}</a>
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green" v-if="Number(course.price) === 0">
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">{{course.buyCount}}人学习</i>
                        |
                        <i class="c-999 f-fA">{{course.viewCount}}浏览量</i>
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/course" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">名师大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="teacher in teachers" :key="teacher.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a href="/teacher/1" :title="teacher.name">
                        <img :alt="teacher.name" :src="teacher.avatar">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a href="/teacher/1" :title="teacher.name" class="fsize18 c-666">{{teacher.name}}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{teacher.career}}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p class="c-999 f-fA">{{teacher.intro}}</p>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/teacher" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '@/api/banner'
import index from '@/api/index'

export default {
  data () {
    return {
      // 图片父容器高度
      bannerHeight: 699,
      // 浏览器宽度
      screenWidth: 0,
      bannerList: [],
      courses: [],
      teachers: [],
    }
  },

  created() {
    // 调用 查询banner数据 的方法
    this.getListBanner()
    // 热门课程和讲师
    this.getHotCourse()
    this.getHotTeacher()
  },

  methods:{
    // 查询 banner 数据
    getListBanner() {
      banner.getListBanner()
      .then(response => {
        this.bannerList = response.data.data.banners
      })
    },

    // 热门课程和名师
    getHotCourse() {
      index.getHotCourses()
      .then(response => {
        this.courses = response.data.data.courses
      })
      
    },
    getHotTeacher() {
      index.getHotTeachers()
      .then(response => {
        this.teachers = response.data.data.teachers
      })
    },




    setSize: function () {
      // 通过浏览器宽度(图片宽度)计算高度  
      this.bannerHeight = 600 / 1550 * this.screenWidth
    },
  },

  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth
    this.setSize()
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.setSize()
    }
  },

}
</script>