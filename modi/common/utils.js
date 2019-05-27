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
	set(goods) { // 传参可以是一个对象，也可以是一个包含多个商品对象的数组
		let cache = this.getCartCache()
		let jsonString = ''
		
		if (typeof goods !== "object") return false  // 参数不合规。只能传array和object对象
		
		if (cache) { // 若已经有购物车缓存
			cache = JSON.parse(cache)
			cache.goodsList = cache.goodsList.concat(goods) // 追加购物车信息到缓存，不管参数是数组还是对象，直接添加
			jsonString = JSON.stringify({goodsList: cache.goodsList})
		}
		else { // 若无购物车缓存
			jsonString = JSON.stringify({goodsList: this.isArray(goods) ? goods : [goods]}) // 参数效验，保证goodsList的值是一个数组
		}
		
		//设置缓存
		uni.setStorageSync('moti_cart', jsonString)
	},
	
	// 获取所有缓存的购物车信息
	get() {
		let cache = uni.getStorageSync('moti_cart')
		if (cache) return JSON.parse(cache)
	},
	
	// 删除缓存的购物车信息
	delete(spuId) { // 参数：商品Id，可以是一个数值，也可以是一个包含商品ID的数组
	
		let cache = this.getCartCache()
		let args = this.isArray(spuId) ? spuId : [spuId] // 参数处理，保证解析后的参数是一个数组
		if (!cache) return false 
		
		let goodsList = cache.goodsList
		
		!args.length && goodsList.splice(0, goodsList.length) // 若不传参，则默认清空所有
		
		goodsList.forEach((item) => {
			let indexes = args.indexOf(item.spuId)
			if (args.indexOf(item.spuId) !== -1) {
				goodsList.splice(indexes, 1)
			}
		})
	},
	// 判断是否是数组，作为判断参数用
	isArray(args) {
		return Array.isArray(args)
	}
}