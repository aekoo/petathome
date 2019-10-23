import wepy from '@wepy/core';
let syInfo = wx.getSystemInfoSync()
export default class fetch {
  static request(method, url, data, contentType) {
    let param = {
      url: url,
      method: method,
      data: data,
      header: {
        // source: '12100',
        // releaseVersion: '4.0.0', // 为了获取小程序关于我们接口数据 暂时写死为3.5.0 并不是小程序版本
        // mobileType: '3',
        // channel: 'miniProgram',
        // product: 'jz-wechat-mina',
        // deviceId: '', // 设备id
        // device: syInfo.model + ' ' + syInfo.system,
        // cuserid: wx.getStorageSync('cuserId') || ''
      }
    }
    if (contentType) {
      param.header['content-type'] = contentType
    }
    return wepy.wx.request(param)
  }
  static uploadFile(url, filePath, data) {
    let param = {
      url: url,
      filePath: filePath,
      name: 'file',
      header: {
        // ...data,
        // source: '12100',
        // mobileType: '3',
        // channel: 'miniProgram',
        // product: 'jz-wechat-mina',
        // deviceId: '', // 设备id
        // device: syInfo.model + ' ' + syInfo.system //
      }
    }
    console.log(param)
    return wx.uploadFile(param)
  }
  static get(url, data, contentType) {
    return this.request('GET', url, data, contentType)
  }
  static post(url, data, contentType) {
    return this.request('POST', url, data, contentType)
  }
  static upload(url, filepath, data) {
    console.log(url, filepath, data)
    return this.uploadFile(url, filepath, data)
  }
}
