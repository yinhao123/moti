import config from './config.js'

// 封装post方法
async function post(url, data) {
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
export function checkLoginName(loginName) {
	let result = post('/m/user/checkLoginName', {
		loginName
	})
	return result
}

