import request from '@/utils/request'

export default({
    // 热门课程
    getHotCourses() {
        return request({
            url: '/eduservice/indexfront/hotCourses',
            method: 'get',
        })
    },

    // 热门讲师
    getHotTeachers() {
        return request({
            url: '/eduservice/indexfront/hotTeachers',
            method: 'get',
        })
    },


})