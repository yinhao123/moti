<template>
	<view class="content">
		<view class="hint-wrapper">
			<text class="hint-text">当前绑定手机号</text>
			<text class="hint-phone">{{oldPhone}}</text>
		</view>
		<view class="submit-list">
			<view class="submit-item">
				<text class="hint">+86</text>
				<input type="number" name="newPhone" placeholder="请输入新手机号" v-model="newPhone" />
				<text class="iconfont moti-round_close_fill_light" @tap="clearPhone"></text>
			</view>
			<view class="submit-item">
				<text class="hint iconfont moti-yanzhengma" @tap="clear">&#xe647;</text>
				<input type="text" name="code" placeholder="请输入验证码" v-model="code" />
				<view class="getCode" @tap="getDynamicCode">获取验证码</view>
			</view>
		</view>
		<view class="hint-text">修改手机后，可以使用新手机号登录MOTI到家</view>
		<view class="buttom-wrapper">
			<view class="buttom" >
				确定更改手机号码
			</view>
		</view>
	</view>
</template>

<script>
	import {getDynamicCode} from '@/common/request.js'
	export default {
		data() {
			return {
				oldPhone: '',
				sendPhone:'',
				newPhone:'',
				code: ''
			};
		},
		onLoad: function (option) { //接收从个人设置也穿过来的手机号并隐藏中间四位
			var str = option.phone
			this.sendPhone = str;
			 this.oldPhone = str.slice(0, 3) + ' **** ' + str.slice(7);
    },
		methods:{
			clearPhone:function(){
				this.newPhone=''
			},
			getDynamicCode: async function(){
				let result = await getDynamicCode(this.sendPhone, 0)
			
				let code = result.data.code
			}
		}
		
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		background: #f6f6f6;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.hint-text {
			font-family: MicrosoftYaHei;
			font-size: 22upx;
			font-weight: normal;
			font-stretch: normal;
			color: #999999;
		}

		.hint-wrapper {
			width: 100%;
			height: 165upx;
			padding-top: 120upx;
			display: flex;
			flex-direction: column;
			justify-content: center;

			text {
				text-align: center;
			}

			.hint-text {
				margin-bottom: 40upx;
			}

			.hint-phone {
				font-family: MicrosoftYaHei;
				font-size: 30upx;
				font-weight: normal;
				font-stretch: normal;
				color: #000000;
			}
		}

		.submit-list {
			background: #ffffff;

			.submit-item {
				height: 98upx;
				padding-right: 30upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 2upx solid #f6f6f6;

				.hint {
					width: 120upx;
					text-align: center;
					font-size: 24upx;
				}

				input {
					flex: 1;
					font-size:24upx; 
				}

				.iconfont {
					color: #999999;
					font-size: 34upx;
				}

				.moti-yanzhengma {
					font-size: 48upx;
				}

				.getCode {
					width: 180upx;
					height: 60upx;
					background-color: #fa5151;
					border-radius: 8upx;
					text-align: center;
					line-height: 60upx;
					color: #ffffff;
					font-family: MicrosoftYaHei;
					font-size: 22upx;
				}
			}
		}

		>.hint-text {
			padding-top: 80upx;
			text-align: center;
		}

		.buttom-wrapper {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: flex-end;

			.buttom {
				margin-bottom: 40upx;
				width: 690upx;
				height: 82upx;
				background-color: #050505;
				border-radius: 10upx;
				text-align: center;
				line-height: 82upx;
				font-size: 24upx;
				color: #ffffff;
			}
		}
	}
</style>
