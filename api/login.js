import request from '@/utils/request'

export default({
    // 手机号密码登录
    userLogin(userInfo) {
        return request({
            url: `/educenter/ucenter/login`,
            method: 'post',
            data: userInfo
        })
    },

    // 根据 token 获取用户信息
    getUserInfoByToken() {
      return request({
        url: `/educenter/ucenter/getUserInfo`,
        method: 'get'
    })
    }


})