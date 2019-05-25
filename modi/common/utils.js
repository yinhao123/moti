export function checkMobile (mobile) {
	let reg = /^1[3456789]\d{9}$/
	return reg.test(mobile)
}

export function checkPassword (password) {
	let reg = /^[\w.]{6,20}$/
	return reg.test(password)
}
export function checkIdCard(str) {
	let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return reg.test(str)
}