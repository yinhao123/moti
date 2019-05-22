import config from './config.js'

// user-controller
export async function checkLoginName(loginName) {
	let result = uni.request({
		url: config.host +'/m/user/checkLoginName',
		method: 'POST',
		header:{
			"content-type":'application/x-www-form-urlencoded'
		},
		data:{
			loginName
		}
	})
	console.log(result)
	return result
}

