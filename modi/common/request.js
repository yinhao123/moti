import config from './config.js'

// 封装post方法
async function post (url, data) {
	return await uni.request({
		url: config.host + url,
		method: 'POST',
		header: {
			"content-type": 'application/x-www-form-urlencoded'
		},
		data
	})
}

// user-controller
export function checkLoginName (loginName) { // 参数：用户名
	return post('/m/user/checkLoginName', {
		loginName
	})
}

export function checkUserMobile (mobile) { // 参数：手机号
	return post('/m/user/checkUserMobile', {
		mobile
	})
}

export function getDynamicCode (mobile) { // 参数：手机号
	return post('/m/user/getDynamicCode', {
		mobile
	})
}

export function regist (loginName, password, mobile, dynamicCode) { // 参数：用户名，密码，手机号，验证码
	return post('/m/user/regist', {
		loginName,
		password,
		mobile,
		dynamicCode
	})
}


