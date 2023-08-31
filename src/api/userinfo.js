import request from '@/utils/request';

// 获取用户个人信息
export function getUserInfo() {
    return request({
        url: "/api/UserSystem/getUserInfo/",
        method: "GET",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("jwtToken")
        },
    })
}

// 修改用户信息
export function updateUserInfo(data){
    return request({
        url:"/api/UserSystem/update/",
        method:"POST",
        data:data,
    })
}

// 修改用户头像
export function modifyUserAvatar(data){
    return request({
        url:"/api/UserSystem/setAvatar/",
        method:"POST",
        headers: {
            'Content-Type': 'application/form-data',
            'Authorization': "Bearer " + localStorage.getItem("jwtToken")
        },
        data:data,
    })
}

// 获取用户头像信息
export function getUserAvatar(data){
    return request({
        url:"/api/UserSystem/getAvatar/",
        method:"GET",
        headers: {
            'Authorization': "Bearer " + localStorage.getItem("jwtToken")
        },
        data:data,
    })
}

// 分页获取用户收藏商品列表
export function getCollectedCommodity(data){
    return request({
        url:"https://mock.apifox.cn/m1/2970478-0-default/api/BuyerCenter/getCollectedCommodity/",
        method:"POST",
        headers:{
            'Authorization': "Bearer " + localStorage.getItem("jwtToken")
        },
        data:data,
    })
}

// 分页获取用户关注列表
export function getFollowedStore(data){
    return request({
        url:"https://mock.apifox.cn/m1/2970478-0-default/api/BuyerCenter/getFollowedStore/",
        method:"POST",
        headers:{
            'Authorization': "Bearer " + localStorage.getItem("jwtToken")
        },
        data:data,
    })
}

// 取消收藏商品
export function uncollectCommodity(data){
    return request({
        url:"https://mock.apifox.cn/m1/2970478-0-default/api/BuyerCenter/uncollectCommodity/",
        method:"POST",
        headers:{
            'Authorization': "Bearer " + localStorage.getItem("jwtToken")
        },
        data:data,
    })
}

// 取消关注店铺
export function unfollowStore(data){
    return request({
        url:"https://mock.apifox.cn/m1/2970478-0-default/api/BuyerCenter/unfollowStore/",
        method:"POST",
        headers:{
            'Authorization': "Bearer " + localStorage.getItem("jwtToken")
        },
        data:data,
    })
}