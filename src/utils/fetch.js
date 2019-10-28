import wepy from '@wepy/core';
export default class fetch {
  static request(method, url, data, contentType) {
    let param = {
      url: url,
      method: method,
      data: data,
      header: {}
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
      header: {},
      formData: data,
    }
    console.log(param)
    return wx.uploadFile(param)
  }
  static get(url, data) {
    return this.request('GET', url, data, 'application/x-www-form-urlencoded')
  }
  static post(url, data) {
    return this.request('POST', url, data, 'application/x-www-form-urlencoded')
  }
  static upload(url, filepath, data) {
    console.log(url, filepath, data)
    return this.uploadFile(url, filepath, data)
  }
}
