import fetch from '@/utils/fetch'
let syInfo = wx.getSystemInfoSync();

const PRODUCTION_URL = 'https://jz.yofish.com' // 线上环境
const DEV_URL = 'http://10.0.51.79:8000/api' // 测试环境

export const REQ_URL = syInfo.platform == 'devtools' ? DEV_URL : PRODUCTION_URL;

// 获取appid  token
export const getUserId = (data) => {
  let pathUrl = '/user/login'
  return fetch.post(REQ_URL + pathUrl, data, 'application/x-www-form-urlencoded')
}


// 添加流水上传图片
export const uploadImg = (data) => {
  let pathUrl = '/sync/syncSingleImg'
  let tmp = {}
  for (let i in data) {
    if (i != 'filePath') {
      tmp[i] = data[i]
    }
  }
  return fetch.upload(REQ_URL + pathUrl, data.filePath, tmp)
}
