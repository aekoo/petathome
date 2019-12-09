import fetch from '@/utils/fetch'

const PRODUCTION_URL = 'https://petinhome.net/api' // 线上环境
const DEV_URL = 'https://petinhome.net/api' // 测试环境
// const DEV_URL = 'http://10.0.51.79:8000/api' // 测试环境

let envVersion = __wxConfig.envVersion, baseUrl = '';
console.log(envVersion);
switch (envVersion) {
  case 'develop': //开发版  
  case 'trial'://体验版  
    baseUrl = DEV_URL;
    break;
  case 'release'://正式版
    baseUrl = PRODUCTION_URL;
    break;
}

export const REQ_URL = baseUrl;

// 获取appid  token
export const getUserId = (data) => {
  let pathUrl = '/user/login'
  return fetch.post(REQ_URL + pathUrl, data)
}



// 首页banner
export const getBanner = (data) => {
  let pathUrl = '/banner/queryBanner'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 顶部滚动文字
export const getTopScrollingText = (data) => {
  let pathUrl = '/banner/queryTopScrollingText'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 预约服务状态
export const getServerAvailable = (data) => {
  let pathUrl = '/config/queryServerAvailable'
  return fetch.get(REQ_URL + pathUrl, data)
}




// 查询订单
export const getOrders = (data) => {
  let pathUrl = '/order/queryOrders'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 下单
export const placeAnOrder = (data) => {
  let pathUrl = '/order/placeAnOrder'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 申请退款
export const refundOrder = (data) => {
  let pathUrl = '/order/refund'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 取消订单
export const cancelOrder = (data) => {
  let pathUrl = '/order/cancel'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 订单支付
export const payOrder = (data) => {
  let pathUrl = '/order/pay'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 订单评价
export const evaluation = (data) => {
  let pathUrl = '/order/evaluation'
  return fetch.post(REQ_URL + pathUrl, data)
}


// 高级服务
export const queryAdvancedService = (data) => {
  let pathUrl = '/config/queryAdvancedService'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 钥匙交接
export const queryKeysList = (data) => {
  let pathUrl = '/config/queryKeysList'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 宠物数量
export const queryPetNumberList = (data) => {
  let pathUrl = '/config/queryPetNumberList'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 宠物数量--狗专用
export const queryDogPetNumber = (data) => {
  let pathUrl = '/config/queryDogPetNumber'
  return fetch.get(REQ_URL + pathUrl, data)
}



// 个人信息
export const gainUserInfo = (data) => {
  let pathUrl = '/user/queryUserInfo'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 更新个人信息
export const editUserInfo = (data) => {
  let pathUrl = '/user/editUserInfo'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 更新头像
export const updateAvatar = (data) => {
  let pathUrl = '/user/updateAvatar'
  return fetch.post(REQ_URL + pathUrl, data)
}



// 查询品种
export const gainPetKinds = (data) => {
  let pathUrl = '/pet/queryPetKinds'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 我的宠物
export const gainMyPet = (data) => {
  let pathUrl = '/pet/queryMyPet'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 宠物详情
export const gainPetDetail = (data) => {
  let pathUrl = '/pet/queryDetail'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 添加修改宠物信息
export const addOrUpdatePet = (data) => {
  let pathUrl = '/pet/addOrUpdate'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 删除宠物
export const deletePet = (data) => {
  let pathUrl = '/pet/delete'
  return fetch.post(REQ_URL + pathUrl, data)
}



// 加入铲屎官
export const joinTeam = (data) => {
  let pathUrl = '/shovel/join'
  return fetch.post(REQ_URL + pathUrl, data)
}




// 我的地址列表
export const gainAddressList = (data) => {
  let pathUrl = '/address/queryAddressListByUserId'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 查询地址详情
export const gainAddressDetail = (data) => {
  let pathUrl = '/address/queryAddressDetail'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 添加或修改地址
export const addOrUpdateAddress = (data) => {
  let pathUrl = '/address/addOrUpdateAddress'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 删除地址
export const deleteAddress = (data) => {
  let pathUrl = '/address/deleteAddress'
  return fetch.post(REQ_URL + pathUrl, data)
}



// 查询活动
export const gainActivityInfo = (data) => {
  let pathUrl = '/activity/queryActivityInfo'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 活动购买
export const activityPlaceAnOrder = (data) => {
  let pathUrl = '/activity/placeAnOrder'
  return fetch.post(REQ_URL + pathUrl, data)
}


// 文件上传
export const uploadFile = (data) => {
  let pathUrl = '/file/upload'
  let tmp = {}
  for (let i in data) {
    if (i != 'file') {
      tmp[i] = data[i]
    }
  }
  return fetch.upload(REQ_URL + pathUrl, data.file, tmp)
}
