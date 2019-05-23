<template>
	<view class="wrapper">
		<form action="">
			<view class="from-list">
				<view>
					<text class="iconfont user-icon">&#xe61a;</text>
					<input type="text" v-model="loginName" name="user" placeholder="请输入用户名" />
				</view>
				<view>
					<text class="iconfont">&#xe655;</text>
					<input type="number" v-model="mobile" name="user" placeholder="请输入手机号" />
				</view>
				<view>
					<text class="iconfont">&#xe647;</text>
					<input type="text" name="authCode" v-model="dynamicCode" placeholder="请输入验证码" />
					<button @click="getDyNamicCodeButt" :class="{canResend: canResend}">{{buttonText}}</button>
				</view>
				<view>
					<text class="iconfont lock" @click="changePassword">&#xe6b3;</text>
					<input type="text" :password="showRepeatPassword" name="password" v-model="password" placeholder="请输入登录密码" />
					<text class="uni-icon uni-icon-eye" :class="[!showRepeatPassword ? 'uni-active' : '']" @click="changeRepeatPassword"></text>
					<!-- <text class="iconfont is-show" @click="changePassword">&#xe73d;</text> -->
				</view>
				<view>
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" :password="showPassword" name="repeatPassword" v-model="repeatPassword" placeholder="请再次输入登录密码" />
					<text class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></text>
					<!-- <text class="iconfont is-show" @click="changeRepeatPassword">&#xe7b2;</text> -->
				</view>
			</view>
			<button class="register" @click="register">注册</button>
		</form>
		<uni-popup :show="showTips" position="middle" mode="fixed" :msg="tips" @hidePopup="togglePopup(false)" />
	</view>
</template>

<script>
	import UniPopup from '../../components/uni-popup/uni-popup'
	import {
		checkMobile,
		checkPassword
	} from '../../common/utils.js'
	import {
		getDynamicCode
	} from '@/common/request.js'
	export default {
		data() {
			return {
				loginName: '',
				mobile: '',
				dynamicCode: '',
				password: '',
				repeatPassword: '',
				showTips: false,
				tips: '手机号格式错误',
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
					this.showTips = true
					// return false
				}

				if (!this.canResend) {
					return false
				}

				let result = await getDynamicCode(this.mobile) // 获取验证码
				console.log(result)

				if (result.code) {
					this.countDown()
				}

			},
			togglePopup() { // 弹窗消失
				this.showTips = false
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
			register() { // 注册
				if (!checkMobile(this.mobile)) {
					this.showTips = true
					this.tips = '手机号格式有误'
					return false
				}
				
				if (!checkPassword(this.password)) {
					this.showTips = true
					this.tips = '密码格式有误'
					return false
				}
				
				if (this.password !== this.repeatPassword) {
					this.showTips = true
					this.tips = '密码输入不一致'
					return false
				}
				
				if (this.dynamicCode === "") {
					this.showTips = true
					this.tips = '验证码为空'
					return false
				}
				
				let result = regist(this.loginName, this.password, this.mobile, this.dynamicCode )
				if (result.code === 0) {
					uni.navigateTo({
						url: 'pages/index/index'
					})
				}
				else {
					this.showTips = true
					this.tips = result.msg
					return false
				}
			},
			changePassword () {
				this.showPassword = !this.showPassword;
			},
			changeRepeatPassword () {
				this.showRepeatPassword = !this.showRepeatPassword
			}
		},
		components: {
			UniPopup
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
