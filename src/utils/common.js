import wepy from '@wepy/core';
import store from '@/store';
import { getUserId } from '../api/index.js'

export const toastSelf = (title, duration) => {
  wx.showToast({
    title: title,
    icon: 'none',
    duration: duration
  })
}

export async function userLogin(flag) {
  // const store = getStore()
  let loginRes = null

  try {
    //wepy2 中使用promis一定要用wepy.wx替换wx
    loginRes = await wepy.wx.login()
  } catch (error) {
    toastSelf('登录失败', 2000)
    return -1
  }
  try {
    let userRes = await wepy.wx.getUserInfo()
    wx.showLoading({ title: '登录中' })
    let identify = await getUserId({
      jsCode: loginRes.code,
      nickName: userRes.userInfo.nickName,
      avatar: userRes.userInfo.avatarUrl,
      gender: userRes.userInfo.gender,
    })
    console.log('identify', identify);
    wx.hideLoading()

    if (identify.data.code !== 1) {
      toastSelf('登录失败', 2000)
      return -2
    } else {
      const { openId } = identify.data.results;
      wx.setStorageSync('openId', openId);
      wx.setStorageSync('userInfo', userRes.userInfo);
      // store.dispatch('setStoreData', { key: 'userInfo', value: userRes.userInfo })
      // store.dispatch('setStoreData', 'openId', openId)
      // let to = wx.getStorageSync('to');
      // console.log(to)
      // store.dispatch(changeUpdate())
      // if (flag) {
      //   console.log('重新授权')
      //   //重新授权
      //   if (to == 'record') {
      //     wx.reLaunch({
      //       url: '/pages/home?to=record'
      //     })
      //   } else {
      //     wx.reLaunch({
      //       url: '/pages/home'
      //     })
      //   }
      // }
      return 1
    }
  } catch (error) {
    console.log(error)
    wx.hideLoading()
    // if (!flag) {
    //   return wx.redirectTo({
    //     url: '/pages/home'
    //   })
    // }
  }
}




export async function sleep(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000 * i)
  })
}
/**
  @param {Function} fn ajax请求函数
  @param {Object} data 请求数据
  @param {Function} successFn 成功回调函数 code==1时
  @param {Boolean} isRecall 失败后是否重新调用
  @param {Function} otherCodeFn 处理失败的回调 code!=1 && code!=-5555
  @param {Boolean} isStr 返回值是否是json string 是的话要做parse处理
 */
export async function handleRes(fn, data, successFn, isRecall, otherCodeFn, isStr) {
  try {
    let result = await fn(data)
    if (result.statusCode != 200) {
      throw new Error()
    }
    if (isStr) {
      result.data = JSON.parse(result.data)
    }
    wx.hideLoading()
    if (result.data.code == 1) {
      successFn(result.data)
    } else if (result.data.code == -5555) {
      wx.redirectTo({
        url: '/pages/home'
      })
      toastSelf('重新登录中', 2000)
      // await userLogin(false)
      // if (isRecall) {
      // await handleRes(fn, data, successFn)
      // }
    } else {
      if (otherCodeFn) {
        return otherCodeFn(result.data)
      }
      toastSelf(result.data.desc, 2000)
    }
  } catch (error) {
    console.log(error)
    wx.hideLoading()
    toastSelf('请求网络失败', 2000)
  }
}

export const uuid = () => {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  var uuid = s.join('')
  return uuid
}

export const format = (date, format) => {
  var o = {
    "M+": date.getMonth() + 1, // month
    "d+": date.getDate(), // day
    "h+": date.getHours(), // hour
    "m+": date.getMinutes(), // minute
    "s+": date.getSeconds(), // second
    "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
    "S": date.getMilliseconds()// millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "")
      .substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
        : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}



export const throttle = (method, delay, duration) => {
  var timer = null;
  var begin = new Date();
  return () => {
    var context = this, args = arguments;
    // console.log(context,args)
    var current = new Date();
    clearTimeout(timer);
    if (current - begin >= duration) {
      method.apply(context, args);
      begin = current;
    } else {
      timer = setTimeout(() => {
        method.apply(context, args);
      }, delay);
    }
  }
}