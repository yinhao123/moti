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

// user-controller
//检测用户名是否已注册
export function checkLoginName(loginName) { // 参数：用户名
	return post('/m/user/checkLoginName', {
		loginName
	}).then(function(data){
		console.log(data.statusCode);
	})
}
//检测手机号是否已注册
export function checkUserMobile(mobile) { // 参数：手机号
	return post('/m/user/checkUserMobile', {
		mobile
	})
}
//获取用户注册验证码
export function getDynamicCode(mobile) { // 参数：手机号
	return post('/m/user/getDynamicCode', {
		mobile
	})
}
//注册
export function regist(loginName, password, mobile, dynamicCode) { // 参数：用户名，密码，手机号，验证码
	return post('/m/user/regist', {
		loginName,
		password,
		mobile,
		dynamicCode
	})
}

//user-info-controller
//获取修改密码手机验证码
export function getDynamicCodeUserInfo(mobile) { // 参数: 手机号
	return post('/m/userInfo/getDynamicCode', {
		mobile
	})
}
//修改密码
export function modifyPassword(password, mobile, dynamicCode) { // 参数：密码，手机号，验证码
	return post('/m/userInfo/modifyPassword', {
		password,
		mobile,
		dynamicCode
	})
}
//login-controller
//获取手机登录验证码
export function getDynamicCodeLogin(mobile) { // 参数: 手机号
	return post('/m/login/getDynamicCode', {
		mobile
	})
}
//手机验证码登录
export function mobileLogin(mobile,dynamicCode) { // 参数: 手机号 验证码
	return post('/m/login/mobileLogin', {
		mobile,
		dynamicCode
	})
}
//账号密码登录
export function nameLogin(loginName,password) { // 参数: 用户名 密码
	return post('/m/login/nameLogin', {
		loginName,
		password
	})
}
//用户信息补全
export function perfectInfo(id,loginName,password) { // 参数: 用户id  用户名  密码
	return post('/m/login/perfectInfo', {
		id,
		loginName,
		password
	})
}
