<template>
	<view class="content">
		<text class="hint">身份信息仅对自己可见</text>
		<view class="submit-list">
			<view class="submit-item">
				<text class="hint">真实姓名</text>
				<input type="text" name="userName" placeholder="请输入您的真实姓名" v-model="userName" />
				<text class="iconfont moti-round_close_fill_light" @tap="clearUserName"></text>
			</view>
			<view class="submit-item">
				<text class="hint">身份证号</text>
				<input type="text" name="idCard" placeholder="请输入您的18位身份证号" v-model="idCard" />
				<text class="iconfont moti-round_close_fill_light"  @tap="clearIdCard"></text>
			</view>
		</view>
		<text class="hint">身份信息一旦保存，无法修改</text>
		<view class="buttom-wrapper">
			<view class="buttom" @tap="perfectId">
				保存
			</view>
		</view>
	</view>
</template>

<script>
	import {
		checkIdCard
	} from '@/common/utils.js'
	import {
		perfectId
	} from '@/common/request.js'

	export default {
		data() {
			return {
				userName: '',
				idCard: ''
			};
		},
		methods: {
			//身份证名字和证号
			perfectId: async function() {
				let result = await perfectId(this.userName, this.idCard)
				let code = result.data.code;
				switch (code) {
					case '0':
						uni.showModal({
							content: "认证成功",
							showCancel: false
						})
						break;
					case '1':
						uni.showModal({
							content: "系统异常",
							showCancel: false,
						})
						break;
					case '2':
						uni.showModal({
							content: "参数错误",
							showCancel: false
						})
						break;
					case '3':
						uni.showModal({
							content: "您还未登录，是否返回到登录页",
							confirmText: "确定",
							cancelText: "取消",
							success: function(res) {
								if (res.confirm) {
									uni.navigateTo({
										url: '../../logIn/logIn'
									})
								}
							}
						})
						break;
				}
			}
			,
			clearUserName:function(){
				this.userName = ''
			},
			clearIdCard:function() {
				this.idCard=''
			}
		},
		
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.hint,
		.submit-item {
			padding: 0 30upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 22upx;
		}

		.hint {
			height: 82upx;
			line-height: 82upx;
			font-family: MicrosoftYaHei;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 0px;
			color: #666666;
		}

		.submit-list {
			background: #ffffff;

			.submit-item {
				border-bottom: 2upx solid #f6f6f6;

				.hint {
					padding-left: 0;
					color: #000000;
				}

				input {
					flex: 1
				}

				.iconfont {
					padding: 5upx;
					color: #3e3e3e;
					opacity: 0.4;
				}
			}
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
