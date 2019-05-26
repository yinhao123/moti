const config = {}
config.host = process.env.NODE_ENV === 'development' 
	? 

		"/m" // 开发环境
	: 
		''	// 生产环境
export default config