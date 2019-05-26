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

// 设置缓存购物车信息
export function setCartCache(goodsMsg) {
	let cache = JSON.parse(getCartCache())
	let jsonString = ''
	if (cache) {
		cache.goodsList = cache.goodsList.concat(goodsMsg) // 添加购物车信息到缓存
		jsonString = JSON.stringify({goodsList: cache.goodsList})
	}
	else {
		jsonString = JSON.stringify({goodsList: goodsMsg})
	}
	uni.setStorageSync('moti_cart', jsonString)
}

// 获取所有缓存的购物车信息
export function getCartCache() {
	return uni.getStorageSync('moti_cart')
}