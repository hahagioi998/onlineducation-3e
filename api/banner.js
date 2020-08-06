import request from '@/utils/request'

export default({
    // banner 数据
    getListBanner() {
        return request({
            url: '/educms/bannerFront/getAllBanner',
            method: 'get'
        })
    }

    // 热门课程, 名师
    

})