<template>
	<view class="wrapper">
		<form action="" @submit="formSubmit">
			<view class="from-list">
				<view class="from-items">
					<text class="iconfont">&#xe655;</text>
					<input @change="checkRules('mobile')" type="number" name="mobile" placeholder="请输入手机号" v-model="mobile" />
				</view>
				<view class="from-items codeCon">
					<view class="code">
						<text class="iconfont">&#xe647;</text>
						<input @change="checkRules('dynamicCode')" type="text" name="dynamicCode" placeholder="请输入验证码" v-model="dynamicCode" />
					</view>
					<view class="getCode" @tap="getCode" :class="canClick ? '' : 'codeNot'">{{ codeText }}</view>
				</view>
				<view class="from-items">
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" @change="checkRules('password')" :password="showRepeatPassword" name="password" placeholder="请输入新密码" v-model="password" />
					<!-- <text class="iconfont is-show">&#xe7b2;</text> -->
					<text class="uni-icon uni-icon-eye" :class="[!showRepeatPassword ? 'uni-active' : '']" @click="changeRepeatPassword"></text>
				</view>
				<view class="from-items">
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" @change="checkRules('repeatPassword')" :password="showPassword" name="repeatPassword" placeholder="请再次输入密码" v-model="repeatPassword" />
					<!-- <text class="iconfont is-show">&#xe7b2;</text> -->
					<text class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></text>
				</view>
				<view class="from-items errText">{{ errMsg }}</view>
			</view>
			<button @tap="formSubmit">确认提交</button>
		</form>
	</view>
</template>

<script>
import { getDynamicCode, modifyPassword } from '@/common/request.js';
import { checkMobile, checkPassword } from '../../common/utils.js'
export default {
	data() {
		return {
			mobile: '',//手机号
			dynamicCode: '',//验证码
			password: '',//密码
			repeatPassword: '',//确认密码
			
			iphoneCheck: false,//手机号状态
			codeCheck:false,//验证码状态
			pwdCheck:false,//密码状态
			pwdCheckSame:false,//确认密码
			
			canClick:true,//倒计时
			codeText: '获取验证码',
			totalTime: 60,
			errMsg: '',
			showPassword: true,
			showRepeatPassword: true 
		};
	},
	methods: {
		checkRules: function(inputType) {
			switch (inputType) {
				case 'mobile':
					if (!checkMobile(this.mobile)) {
						this.errMsg = '请输入有效的手机号码';
					} else {
						this.iphoneCheck = true;
						this.canClick = true;
						this.errMsg = ''
					}

					break;
				case 'dynamicCode':
					console.log(this.dynamicCode)
					if(this.dynamicCode == ''){
						this.errMsg = "请输入验证码"
					}else{
						this.codeCheck = true;
						this.errMsg = ''
					}
					break;
				case 'password':
					if(this.password == ''){
						this.errMsg = "请输入密码"
					}else{
						if (!checkPassword(this.password)) {
							this.errMsg = '密码需要由6~20位数字，字母或符号组成';
						} else {
							this.pwdCheck = true;
							this.errMsg = ''
						}
					}
					break;
				case 'repeatPassword':
					if(this.repeatPassword == ''){
						this.errMsg = "请再次输入密码"
					}else{
						if(this.repeatPassword == this.password){
							this.pwdCheckSame = true;
							this.errMsg = ''
						}else{
							this.errMsg = "两次密码需保持一致"
						}
					}
					break;
				default:
					break;
			}
		},
		async getCode () {
			!checkMobile(this.mobile) && (this.errMsg = '手机号码格式有误')
			
			if (!this.canClick || !this.iphoneCheck) return; //改动的是这两行代码
			
			let {data} = await getDynamicCode(this.mobile, 2) // 获取验证码
			data.code === "0" ?
				this.countDown() // 开始倒计时
			:
				this.errMsg = data.msg
		},
		countDown() { // 倒计时
			this.canClick = false;
			this.codeText = `${this.totalTime}s后重发`
			let timer = setInterval(() => {
				this.totalTime --
				this.codeText = `${this.totalTime}s后重发`
				if (this.totalTime === 0) {
					clearInterval(timer)
					this.totalTime = 60
					this.canClick = true
					this.codeText = "获取验证码"
				}
			}, 1000)
		},
		formSubmit: async function(e) {
			console.log("iphoneCheck: " + this.iphoneCheck + "; codeCheck: " + this.codeCheck + "; pwdCheck: " + this.pwdCheck + "; pwdCheckSame: " + this.pwdCheckSame)
			if (this.iphoneCheck && this.codeCheck && this.pwdCheck && this.pwdCheckSame) {
				
				let {data} = await modifyPassword(this.password, this.mobile, this.dynamicCode)
				if (data.code === "0") {
					uni.showToast({
						title: "修改成功！",
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 1000)
				}
				else {
					this.errMsg = data.msg
				}
			}
		},
		changePassword () {
			this.showPassword = !this.showPassword;
		},
		changeRepeatPassword () {
			this.showRepeatPassword = !this.showRepeatPassword
		}
	}
};
</script>

<style lang="scss" scoped>
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
		.from-list {
			.from-items {
				height: 98upx;
				padding: 0 30upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #ffffff;
				border: 1px solid #f6f6f6;
				.code {
					display: flex;
					justify-content: space-around;
				}
				.getCode {
					width: 180upx;
					height: 60upx;
					background: #fa5151;
					color: #fff;
					font-size: 22upx;
					text-align: center;
					line-height: 60upx;
					border-radius: 8upx;
				}
				.iconfont {
					font-size: 48upx;
					margin-right: 30upx;
				}
				input {
					flex: 1;
				}
				button {
					width: 180upx;
					height: 60upx;
					background: #ff4a64;
					border-radius: 8px;
					font-size: 22upx;
					color: #ffffff;
				}
				.lock {
					margin-left: 5upx;
					margin-right: 34upx;
					font-size: 38upx;
				}
			}
			.codeCon {
				justify-content: space-between;
				padding-right: 30upx;
			}
			.codeNot {
				background: #f6f6f6 !important;
				color: #ccc !important;
			}
			.errText {
				background: none;
				font-size: 22upx;
				color: #fa5151;
			}
		}

		button {
			width: 690upx;
			height: 82upx;
			background: #050505;
			border-radius: 10upx;
			color: #ffffff;
			font-size: 24upx;
			line-height: 82upx;
			margin-bottom: 40upx;
		}
	}
}
</style>
