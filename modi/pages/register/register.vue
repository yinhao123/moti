<template>
	<view class="wrapper">
		<form action="">
			<view class="from-list">
				<view>
					<text class="iconfont user-icon">&#xe61a;</text>
					<input type="text" confirm-type="next" v-model="loginName" focus name="user" placeholder="请输入用户名" />
				</view>
				<view>
					<text class="iconfont">&#xe655;</text>
					<input type="number" v-model="mobile" name="user" placeholder="请输入手机号" />
				</view>
				<view>
					<text class="iconfont">&#xe647;</text>
					<input type="text" name="authCode" v-model="dynamicCode" placeholder="请输入验证码" />
					<button @tap="getDyNamicCodeButt" :class="{canResend: canResend}">{{buttonText}}</button>
				</view>
				<view>
					<text class="iconfont lock" @tap="changePassword">&#xe6b3;</text>
					<input type="text" :password="showRepeatPassword" name="password" v-model="password" placeholder="请输入登录密码" />
					<text class="uni-icon uni-icon-eye" :class="[!showRepeatPassword ? 'uni-active' : '']" @tap="changeRepeatPassword"></text>
					<!-- <text class="iconfont is-show" @click="changePassword">&#xe73d;</text> -->
				</view>
				<view>
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" :password="showPassword" name="repeatPassword" v-model="repeatPassword" placeholder="请再次输入登录密码" />
					<text class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @tap="changePassword"></text>
					<!-- <text class="iconfont is-show" @click="changeRepeatPassword">&#xe7b2;</text> -->
				</view>
			</view>
			<button class="register" @tap="register">注册</button>
		</form>
	</view>
</template>

<script>
	import {
		checkMobile,
		checkPassword
	} from '../../common/utils.js'
	import {
		getDynamicCode,
		regist,
		checkLoginName,
		checkUserMobile
	} from '@/common/request.js'
	
	export default {
		data() {
			return {
				loginName: '',
				mobile: '',
				dynamicCode: '',
				password: '',
				repeatPassword: '',
				showCount: 60, // 倒计时秒数

				canResend: true, // 是否可以重新发送验证码
				buttonText: "获取验证码", // 获取验证码按钮:
				showPassword: true,
				showRepeatPassword: true
			}
		},
		methods: {
			async getDyNamicCodeButt() { // 获取验证码
				if (!checkMobile(this.mobile)) {
					this.errorHand('手机号码格式有误')
					return false
				} 
				
				if (!this.canResend) return false

				let {data} = await getDynamicCode(this.mobile, 0) // 获取验证码

				if (data.code === "0") {
					this.countDown() // 开始倒计时
				}

			},
			countDown() { // 倒计时
				this.canResend = false
				this.buttonText = `${this.showCount}s后重发`
				let timer = setInterval(() => {
					this.showCount --
					this.buttonText = `${this.showCount}s后重发`
					if (this.showCount === 0) {
						clearInterval(timer)
						this.showCount = 60
						this.canResend = true
						this.buttonText = "获取验证码"
					}
				}, 1000)
			},
			async register() { // 注册
				let {data} = await checkLoginName(this.loginName)  // 校验账号是否已注册
				if (data.code !== "0") {
					this.errorHand( data.code === "20" || data.code === '1' ? data.msg : '账号错误')
					return false
				}
				
				if (!checkMobile(this.mobile)) {
					this.errorHand('手机号格式有误')
					return false
				}
				
				let {data: dataM} = await checkUserMobile(this.mobile)  // 效验手机号是否已经注册
				if (dataM.code !== "0") {
					this.errorHand(dataM.code === "20" || data.codeM === "1" ? dataM.msg : '手机号错误')
					return false
				}
				
				
				if (this.dynamicCode === "") {
					this.errorHand('验证码为空')
					return false
				}
				
				if (!checkPassword(this.password)) {
					this.errorHand('密码需要由6~20位数字，字母或符号组成')
					return false
				} 
				
				if (this.password !== this.repeatPassword) {
					this.errorHand('两次密码输入不一致')
					return false
				}
				
				let {data: dataR} = await regist(this.loginName, this.password, this.mobile, this.dynamicCode )
				if (dataR.code === "0") {
				
					uni.showToast({
						title: '注册成功！',
					})
					
					setTimeout(() => {
						uni.navigateBack()
					}, 1000)
					
				}
				else {
					this.errorHand(dataR.msg)
					return false
				}
			},
			errorHand(text) { // 错误提示框
				uni.showToast({
					icon: 'none',
					title: text,
				})
				return false
			},
			changePassword () {
				this.showPassword = !this.showPassword;
			},
			changeRepeatPassword () {
				this.showRepeatPassword = !this.showRepeatPassword
			}
		}
	
	}
</script>

<style lang="scss">
	.wrapper {
		height: 100%;
		width: 100%;
		background: #f6f6f6;
		padding-top: 20upx;
		display: flex;
		align-items: stretch;

		form {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-content: center;
			position: relative;

			.from-list {
				view {
					height: 98upx;
					padding: 0 30upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #ffffff;
					border: 1px solid #f6f6f6;

					.iconfont {
						font-size: 48upx;
						margin-right: 30upx;
						color: #999999;
					}

					.is-show {
						margin-right: 0;
						font-size: 46upx;
					}

					input {
						flex: 1;
						font-family: MicrosoftYaHei;
						color: #999999;
					}

					button {
						width: 180upx;
						height: 60upx;
						border-radius: 8px;
						font-size: 22upx;
						background: #999999;
						color: #ffffff;
						&.canResend {
							background: #ff4a64;
						}
						
					}

					.lock {
						margin-left: 5upx;
						margin-right: 34upx;
						font-size: 38upx;
					}
				}
			}

			.register {
				width: 690upx;
				height: 82upx;
				background: #050505;
				border-radius: 10upx;
				color: #ffffff;
				font-size: 24upx;
				line-height: 82upx;
				margin-bottom: 40upx;
				position: absolute;
				bottom: 30upx;
				left: 50%;
				margin-left: -345upx;
			}
		}
	}
</style>
