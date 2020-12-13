import request from '@/utils/request'

export default({
  // 分页查询讲师
  getTeacherList(page, limit) {
    return request({
      url: `/eduservice/teacherFront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
    
  },

  // 讲师详情
  getTeacherInfo(teacherId) {
    return request({
      url: `/eduservice/teacherFront/getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    })
    
  },

})