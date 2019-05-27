export function checkMobile(mobile) {
	let reg = /^1[3456789]\d{9}$/
	return reg.test(mobile)
}

export function checkPassword(password) {
	let reg = /^[\w.]{6,20}$/
	return reg.test(password)
}

export function checkIdCard(str) {
	let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return reg.test(str)
}
// 获取cookie值
export function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
	if (arr = document.cookie.match(reg))
		return unescape(arr[2])
	else
		return null;
}

//购物车缓存操作
export const cartCache = {
	// 设置缓存购物车信息
	set(goodsMsg) {
		let cache = this.getCartCache()
		console.log(cache)
		let jsonString = ''
		
		if (cache) { // 若已经有购物车缓存
			cache = JSON.parse(cache)
			cache.goodsList = cache.goodsList.concat(goodsMsg) // 追加购物车信息到缓存
			jsonString = JSON.stringify({goodsList: cache.goodsList})
		}
		else { // 若无购物车缓存
			jsonString = JSON.stringify({goodsList: [goodsMsg]})
		}
		
		//设置缓存
		uni.setStorageSync('moti_cart', jsonString)
	},
	
	// 获取所有缓存的购物车信息
	get() {
		return JSON.parse(uni.getStorageSync('moti_cart'))
	},
	
	// 删除缓存的购物车信息
	delete() {
		uni.removeStorageSync()
	}
}