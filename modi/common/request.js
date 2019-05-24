import config from './config.js'

// 封装post方法
async function post(url, data) {
	return new Promise(function(resolve, reject) {
		uni.request({
			url: config.host + url,
			method: 'POST',
			header: {
				"content-type": 'application/x-www-form-urlencoded'
			},
			data,
			success: function(data) {
				resolve(data)
			},
			fail: function() {
				// 回调失败时
				if (typeof reject == 'function') {
					reject(data);
				} else {
					console.log(data);
				}
			}
		})
	})
}
//检测用户名是否已注册
export function checkLoginName(loginName) { // 参数：用户名
	return post('m/user/checkLoginName', {
		loginName
	}).then(function(data) {
		return data
	})
}
//检测手机号是否已注册
export function checkUserMobile(mobile) { // 参数：手机号
	return post('m/user/checkUserMobile', {
		mobile
	}).then((data) => {
		return data
	})
}
//获取手机验证码
export function getDynamicCode(mobile,dynamicCodeType) { // 参数：手机号  验证码类型
	return post('m/code/getDynamicCode', {
		mobile,
		dynamicCodeType     // 0-用户注册  1-手机号登录 2- 修改密码 ....（后续还会增加，及时增加注释）
	}).then((data) => {
		return data
	})
}
//注册
export function regist(loginName, password, mobile, dynamicCode) { // 参数：用户名，密码，手机号，验证码
	return post('m/user/regist', {
		loginName,
		password,
		mobile,
		dynamicCode
	}).then((data) => {
		return data
	})
}
//修改密码
export function modifyPassword(password, mobile, dynamicCode) { // 参数：密码，手机号，验证码
	return post('m/userInfo/modifyPassword', {
		password,
		mobile,
		dynamicCode
	})
}
//手机验证码登录
export function mobileLogin(mobile,dynamicCode) { // 参数: 手机号 验证码
	return post('m/login/mobileLogin', {
		mobile,
		dynamicCode
	})
}
//账号密码登录
export function nameLogin(loginName,password) { // 参数: 用户名 密码
	return post('m/login/nameLogin', {
		loginName,
		password
	})
}
//用户信息补全
export function perfectInfo(id,loginName,password) { // 参数: 用户id  用户名  密码
	return post('m/login/perfectInfo', {
		id,
		loginName,
		password
	})
}
