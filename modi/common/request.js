import config from './config.js'

// 封装post方法
async function post(url, data) {
	return new Promise(function(resolve, reject) {
		uni.request({
			url: config.host + url,
			method: 'POST',
			header: {
				"Content-type": 'application/x-www-form-urlencoded',
				// "Authorization": '98ae451a-17ad-4cc0-84b6-d661d2cceba0'
			},
			data,
			success: function(data) {
				if (data.data.code === "3") { // 未登录
					uni.showToast({
						icon: 'none',
						title: '请您先登录！',
						position: 'top'
					})
				}
				resolve(data)
			},
			fail: function(err) {
				// 回调失败时
				console.log(err)
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
	return post('/m/user/checkLoginName', {
		loginName
	})
}
//检测手机号是否已注册
export function checkUserMobile(mobile) { // 参数：手机号
	return post('/m/user/checkUserMobile', {
		mobile
	})
}

//获取手机验证码
export function getDynamicCode(mobile,dynamicCodeType) { // 参数：手机号  验证码类型
	return post('/m/code/getDynamicCode', {
		mobile,
		dynamicCodeType     // 0-用户注册  1-手机号登录 2- 修改密码 ....（后续还会增加，及时增加注释）
	}).then((data) => {
		return data
	})
}
//注册
export function regist(loginName, password, mobile, dynamicCode) { // 参数：用户名，密码，手机号，验证码
	return post('/m/user/regist', {
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
	return post('/m/userInfo/modifyPassword', {
		password,
		mobile,
		dynamicCode
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
//提交用户身份证号码
export function perfectId(userName, idCard){//参数：用户id 用户姓名 身份证号码
	return post('/m/userInfo/modifyPassword', {
		userName,
		idCard
	})
}


// 商品模块
// 商品spu信息
export function goodsSpuQuery(id) { // 参数： 商品的spuId
	return post('/m/goodsSpu/goodsSpuQuery', {
		id
	})
}

// 商品分类查询
export function queryCategroyList(parentId) { // 参数： 商品分类上级id
	return post('/m/goodsSpu/queryCategroyList', {
		parentId
	})
}

// 根据类目查询商品SPU
export function queryGoodsSpuByCategroy(cId, page, rows) { // 参数：商品分类的id， 页号， 每页条数
	return post('/m/goodsSpu/queryGoodsSpuByCategroy', {
		cId,
		page,
		rows
	})
}

// 商品SKU数据查询
export function queryGoodsSku(spuId, attributes) { // 参数： 商品spuId， 商品属性id组合
	return post('/m/goodsSku/queryGoodsSku', {
		spuId,
		attributes
	})
}
