import request from '@/utils/request'

export default({
    // 热门课程, 名师
    getIndexData() {
        return request({
            url: '/eduservice/indexfront/index',
            method: 'get',
        })
    }

})