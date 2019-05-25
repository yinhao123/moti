<template>
	<view class="wrapper">
		<image src="../../static/logn.png" class="logn"></image>
		<template v-if="loginDefault">
			<form>
				<view class="loginType" @tap="changeDefault">验证码登录</view>
				<view class="input-wrapper">
					<text class="iconfont">&#xe660;</text>
					<input type="text" name="input" placeholder="请输入用户名" v-model="loginName"/>
					<i class="iconfont clear" @tap="clear('loginName')">&#xe80d;</i>
				</view>
				<view class="input-wrapper">
					<text class="iconfont">&#xe628;</text>
					<input type="text" password="true" name="input" placeholder="请输入密码" v-model="password" />
					<navigator url="/pages/passwordReset/passwordReset">忘记密码？</navigator>
				</view>
				<view class="errmsg">{{errmsg}}</view>
				<button @tap="login">登录</button>
				<view class="register">还没有账号?<span>去注册→</span></view>
			</form>
		</template>
		<template v-else>
			<form>
				<view class="loginType" @tap="changeDefault">账号密码登录</view>
				<view class="input-wrapper">
					<text><i class="iconfont">&#xe705;</i></text>
					<input type="text" name="input" placeholder="请输入手机号码" v-model="mobile"/>
					<i class="iconfont clear" @tap="clear('mobile')">&#xe80d;</i>
				</view>
				<button @tap="getCode">获取验证码</button>
				<view class="agreeMoti"><span>*</span>验证即代表您同意<span>《MOTI到家用户协议》</span></view>
			</form>
		</template>
		<!-- <view class="sign">
			<view class="text">微信登录</view>
			<view class="wechat">
				<i class="iconfont">&#xe67a;</i>
			</view>
		</view> -->
	</view>
</template>

<script>
	import {
		checkMobile,
		checkPassword
	} from '@/common/utils.js'
	import { nameLogin,getDynamicCode } from '@/common/request.js';
	// import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				loginDefault:true,
				loginName:'',
				password:'',
				mobile:'',
				errmsg:''
			}
		},
		methods: {
			
			changeDefault:function (){
				this.loginDefault == true ? this.loginDefault = false : this.loginDefault = true
			},
			clear:function (type){
				switch (type){
					case 'loginName':
						this.loginName = '';
						break;
					case 'mobile':
						this.mobile = '';
						break;
					default:
						break;
				}
			},
			//账号密码登录
			login:async function (){
				let succ = await nameLogin(this.loginName,this.password);
				if(succ.data.code == 0){
					// this.setLoginState(succ.data.result)
					uni.switchTab({
						url:"/pages/index/index"
					})
				}else{
					this.errmsg = succ.data.msg
				}
			},
			//获取验证码
			getCode: async function (){
				let succ = await getDynamicCode(this.mobile,'1');
				if(succ.data.code == 0){
					uni.navigateTo({
						url:'/pages/loginCode/loginCode?mobile='+this.mobile
					})
				}
			},
			// ...mapMutations(['setLoginState'])
		}
	}
</script>

<style lang="scss">
	.wrapper {
		min-height: 100%;
		min-width: 100%;
		background: url(../../static/dlybj.png) no-repeat center/cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.logn {
			width: 380upx;
			height: 160upx;
		}

		form {
			width: 670upx;
			padding-top: 130upx;
			margin-bottom: 30upx;
			.loginType{
				color: #fff;
				font-size: 24upx;
				margin-left: 20upx;
				margin-bottom: 40upx;
				opacity: .8;
			}
			.errmsg{
				height: 25upx;
				color: #ff4a64;
				font-size: 22upx;
				padding-left:10upx;
				margin: 0;
			}
			.input-wrapper {
				width: 100%;
				height: 88upx;
				background: #ffffff;
				border-radius: 44upx;
				opacity: 0.8;
				margin-bottom: 20upx;
				display: flex;
				align-items: center;
				.iconfont {
					margin: 0 30upx;
					font-size: 44upx;
					height: 88upx;
					line-height: 88upx;
					color: #3e3e3e;
				}
				.clear{
					opacity: .4;
				}
				navigator{
					font-size: 22upx;
					color: #ff4a64;
				}
				input {
					width: 425upx;
					line-height: 88upx;
					font-size: 26upx;
				}
			}
			.register,.agreeMoti {
				text-align: right;
				font-size: 26upx;
				color: #fefefe;
				margin-top: 40upx;
				span{
					color: #ff4a64;
					opacity: 1;
				}
			}
			.agreeMoti{
				padding-left: 20upx;
				text-align: left;
				font-size: 20upx;
			}
			button {
				margin-top: 60upx;
				width: 100%;
				height: 88upx;
				background-color: #ff4a64;
				border-radius: 44upx;
				color: #ffffff;
				font-size: 30upx;
				line-height: 88upx;
				text-align: center;
			}
			.register{
				color: #fff;
			}
		}
		.sign {
			margin-top: 100upx;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			flex-wrap: wrap;
			.wechat {
				width: 70upx;
				height: 70upx;
				text-align: center;
				line-height: 70upx;
				background: #fff;
				opacity: .4;
				border-radius: 50%;
				.iconfont{
					font-size: 34upx;
				}
			}
			.text {
				padding: 0 12upx;
				font-weight: 700;
				font-size: 20upx;
				font-weight: normal;
				font-family: SourceHanSansCN-Regular;
				color: #ffffff;
				opacity: 0.4;
				margin-bottom: 20upx;
			}
		}
	}
</style>
