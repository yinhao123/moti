import config from './config.js'

/*
	请求说明：
	post请求需要添加响应头为  application/x-www-form-urlencoded 。将参数转换成 query string。  以 form-data 的形式传参
	get请求，直接会将 参数 改成 query string
*/

// user-controller
export async function checkLoginName(loginName) {
	let result = uni.request({
		url: config.host +'/m/user/checkLoginName',
		method: 'POST',
		data: {
			loginName: "abcdefghi"
		},
		header: {
			"content-type": 'application/x-www-form-urlencoded'
		}
	})
	console.log(result)
	return result
}

