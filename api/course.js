import request from '@/utils/request'

export default({
    // 课程 条件查询带分页
    getCourseList(page, limit, searchObj) {
      return request({
        url: `/eduservice/courseFront/getCourseFrontList/${page}/${limit}`,
        method: 'post',
        data: searchObj
      })
    },

    // 课程分类
    getAllSubject() {
      return request({
        url: `/eduservice/subject/getAllSubject`,
        method: 'get'
      })
    }

})