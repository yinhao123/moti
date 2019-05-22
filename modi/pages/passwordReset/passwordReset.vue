<template>
	<view class="wrapper">
		<form action="" @submit="formSubmit">
			<view class="from-list">
				<view class="from-items"> 
					<text class="iconfont">&#xe655;</text>
					<input @change="checkRules('mobile')" type="number" name="mobile" placeholder="请输入手机号"  v-model="mobile"/>
				</view>
				<view class="from-items codeCon">
					<view class="code">
						<text class="iconfont">&#xe647;</text>
						<input @change="checkRules('dynamicCode')" type="text" name="dynamicCode" placeholder="请输入验证码" v-model="dynamicCode" />
					</view>
					<view class="getCode" @tap="getCode" :class="!iphoneCheck?'codeNot':''">
						{{codeText}}
					</view>
				</view>
				<view class="from-items">
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" @change="checkRules('password')" 
						password="true" name="password" placeholder="请输入新密码" v-model="password" />
					<text class="iconfont is-show">&#xe7b2;</text>
				</view>
				<view class="from-items">
					<text class="iconfont lock">&#xe6b3;</text>
					<input type="text" @change="checkRules('repeatPassword')" 
						password="true"  name="repeatPassword" placeholder="请再次输入密码" v-model="repeatPassword"/>
					<text class="iconfont is-show">&#xe7b2;</text>
				</view>
				<view class="from-items errText">
					{{codeText}}
				</view>
			</view>
			<button>确认提交</button>
		</form>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				mobile:'',
				dynamicCode:'',
				password:'',
				repeatPassword:'',
				rulesCheck:false,
				iphoneCheck:false,
				codeText:'获取验证码',
				errMsg:''
			};
		},
		methods:{
			checkRules: function (inputType){
				switch (inputType){
					case "mobile":
						if(this.mobile != ""){
							var reg=/^1[3456789]\d{9}$/;
							if(!reg.test(this.mobile)){
								this.errMsg = "请输入有效的手机号码"
							}else{
								this.iphoneCheck = true;
							}
						}else{
							this.errMsg = "请输入手机号码"
						}
						break;
					default:
						break;
				}
			},
			getCode:function (){
				
			},
			formSubmit: function (e) {
				if(rulesCheck){
					
				}
			}
		}
	}
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
					.code{
						display: flex;
						justify-content: space-around;
					}
					.getCode{
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
					input{
						flex:1;
					}
					button{
						width: 180upx;
						height: 60upx;
						background:#ff4a64;
						border-radius:8px; 
						font-size: 22upx;
						color:#ffffff;
					}
					.lock {
						margin-left: 5upx;
						margin-right: 34upx;
						font-size: 38upx;
					}
				}
				.codeCon{
					justify-content: space-between;
					padding-right: 30upx;
				}
				.codeNot{
					background: #f6f6f6!important;
					color: #ccc!important;
				}
				.errText{
					background: none;
					font-size: 22upx;
					color: #fa5151;
				}
			}
			
			button {
				width: 690upx;
				height: 82upx;
				background:#050505;
				border-radius:10upx;
				color: #ffffff;
				font-size: 24upx;
				line-height: 82upx;
				margin-bottom:40upx;
			}
		}
	}
</style>
