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
				if (data.data.code === "3") { // 未登录
					uni.showToast({
						icon: 'none',
						title: '请您先登录！',
						position: 'top'
					})
					setTimeout(() => {
						uni.navigateTo({ // 跳转到登录页
							url: '/pages/login/login'
						})
					}, 500)
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

//封装图片上传方法
async function upimage(url, images) {
	return new Promise(function(resolve,reject) {

		uni.uploadFile({
			url: config.host + url,
			fileType: 'image',
			// header: {
			// 	"content-type": 'application/x-www-form-urlencoded'
			// },
			filePath: images,
			name: 'file',
			success: function(res1) {
				console.log(res1);
				resolve(res1);
			},
			fail: function(err1) {
				console.log(err1);
				reject(err1);
			}
		})
	})
}

//检测用户名是否已注册
export function checkLoginName(loginName) { // 参数：用户名
	return post('/user/checkLoginName', {
		loginName
	})
}
//检测手机号是否已注册
export function checkUserMobile(mobile) { // 参数：手机号
	return post('/user/checkUserMobile', {
		mobile
	})
}

//获取手机验证码
export function getDynamicCode(mobile, dynamicCodeType) { // 参数：手机号  验证码类型
	return post('/code/getDynamicCode', {
		mobile,
		dynamicCodeType // 0-用户注册  1-手机号登录 2- 修改密码 ....（后续还会增加，及时增加注释）
	}).then((data) => {
		return data
	})
}
//注册
export function regist(loginName, password, mobile, dynamicCode) { // 参数：用户名，密码，手机号，验证码
	return post('/user/regist', {
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
	return post('/userInfo/modifyPassword', {
		password,
		mobile,
		dynamicCode
	})
}
//手机验证码登录
export function mobileLogin(mobile, dynamicCode) { // 参数: 手机号 验证码
	return post('/login/mobileLogin', {
		mobile,
		dynamicCode
	})
}
//账号密码登录
export function nameLogin(loginName, password) { // 参数: 用户名 密码
	return post('/login/nameLogin', {
		loginName,
		password
	})
}
//用户信息补全
export function perfectInfo(id, loginName, password) { // 参数: 用户id  用户名  密码
	return post('/login/perfectInfo', {
		id,
		loginName,
		password
	})
}
//提交用户身份证号码
export function perfectId(userName, idCard){//参数：用户id 用户姓名 身份证号码
	return post('/userInfo/modifyPassword', {
		userName,
		idCard
	})
}
//用户修改头像
export function changeHeadIcon(file) {
	console.log("c测试"+file)
	return upimage('/userInfo/uploadAvatarPic', file);


}


// 商品模块
// 商品spu信息
export function goodsSpuQuery(id) { // 参数： 商品的spuId
	return post('/goodsSpu/goodsSpuQuery', {
		id
	})
}

// 商品分类查询
export function queryCategroyList(parentId) { // 参数： 商品分类上级id
	return post('/goodsSpu/queryCategroyList', {
		parentId
	})
}

// 根据类目查询商品SPU
export function queryGoodsSpuByCategroy(cId, page, rows) { // 参数：商品分类的id， 页号， 每页条数
	return post('/goodsSpu/queryGoodsSpuByCategroy', {
		cId,
		page,
		rows
	})
}

// 商品SKU数据查询
export function queryGoodsSku(spuId, attributes) { // 参数： 商品spuId， 商品属性id组合
	return post('/goodsSku/queryGoodsSku', {
		spuId,
		attributes
	})
}

// 购物车部分
//增加商品到购物车
export function addCar(skuId, num) { // 参数： skuId: 商品的id ， 增加的商品数量
	return post('/car/addCar', {
		skuId,
		num
	})
}

// 获得用户购物车信息
export function getCar() {
	return post('/car/getCar')
}

// 删除购物车商品
export function subCar(skuId) { // 参数：商品id
	return post('/car/subCar', {
		skuId
	})
}

// 减少购物车商品数量
export function subCarNum(skuId, num) { // 参数： 商品ID， 减少的商品数量
	return post('/car/subCarNum', {
		skuId,
		num
	})
}

// 登录后,同步购物车信息
/*
传参示例：
carSkuList: [
  {
    "num": "string",
    "price": "string",
    "singlePrice": "string",
    "skuId": "string",
    "skuName": "string",
    "spuId": "string",
    "spuName": "string"
  }
]
*/
export function syncBuyCar(carSkuList) { // 参数： 商品信息集合
	return post('/car/syncBuyCar', {
		carSkuList
	})
}

/**
 *	收货地址相关接口
 **/
//根据用户id查询用户的地址列表
export function listAddress(){//参数：用户id,这里后台可以从session中获取，不用前端传入参
	return post('/receiverAddress/listAddress', {
		
	})
}
//根根据用户id查询用户默认收货地址
export function queryUserDefaultAddress(){//参数：用户id,这里后台可以从session中获取，不用前端传入参
	return post('/receiverAddress/queryUserDefaultAddress', {
	
	})
}
//根据用户id设置地址对应的id的状态设置为默认地址
export function defaultAddress(){//参数：地址id
	return post('/receiverAddress/defaultAddress', {
		id
	})
}
//根据地址id删除一条收货地址
export function deleteAddress(){//参数：地址id
	return post('/receiverAddress/deleteAddress', {
		id
	})
}
//根据用户id保存用户的姓名，电话，收货地址，收货地址详情
export function saveAddress(){ //参数：
	return post('/receiverAddress/saveAddress', {
		receiveName,	//收货人姓名
		receivePhone,	//收货人电话
		codeProvinceCode,
		codeProvinceName,
		codeCityCode,
		cityName,
		codeDistrictCode,
		districtName,
		userAddress
	})
}
//根据用户id修改用户的姓名，电话，收货地址，收货地址详情
export function updateAddress(){ //参数：
	return post('/receiverAddress/updateAddress', {
		receiveName,	//收货人姓名
		receivePhone,	//收货人电话
		codeProvinceCode,
		codeProvinceName,
		codeCityCode,
		cityName,
		codeDistrictCode,
		districtName,
		userAddress
	})
}
export function loadInfo(){//查询用户信息
	return post('/userInfo/loadInfo').then(function(res){
		
		console.log(res);
		uni.setStorage({
		key: 'userInfo',
		data: res.data.result,
		success: function () {
        console.log('Save userInfo success.');
	
    }
});
		
	})
}
// 根据用户id修改用户的性别 生日 城市
export function saveUserInfo(sex,birthday){
	return post('/userInfo/updateInfo',
	{
		// provinceCode,
		// provinceName,
		// cityCode,
		// cityName,
		// districtCode,
		// districtName,
		birthday,
		sex
	}
	)
	
}