import request from '@/utils/request'

export default({
    // 根据手机号发送验证码
    sendSMS(phone) {
        return request({
            url: `/edumsm/msm/sendSMS/${phone}`,
            method: 'get'
        })
    },

    // 用户注册
   UserRegister(formItem) {
    return request({
        url: `/educenter/ucenter/register/`,
        method: 'post',
        data: formItem
    })
   }


})