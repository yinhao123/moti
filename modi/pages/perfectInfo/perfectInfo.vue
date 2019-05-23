<template>
	<view class="content">
		<view class="headBox">
			<text>头像</text>
			<view class="imageBox">
				<view class="headIcon">
					<image src="../../static/22.png"></image>
				</view>
				<text class="iconfont moti-right"></text>
			</view>
		</view>
		<view class="commonInfo">
			<text>用户名/昵称</text>
			<view class="rightContent">
				<text>MOTI1973</text>
				<text class="iconfont moti-right"></text>
			</view>

		</view>
		<view class="commonInfo mt20">
			<text>手机号</text>
			<view class="rightContent">
				<text>17700019900</text>
				<text class="iconfont moti-right"></text>
			</view>

		</view>
		<view class="commonInfo">
			<text>身份认证</text>
			<view class="rightContent">
				<text class="identify">完善个人信息，享受更多服务</text>
				<text class="iconfont moti-right"></text>
			</view>
		</view>
		<view class="commonInfo mt20">
			<text>性别</text>
			<view class="rightContent">
				<text class="sel">选择</text>
				<text class="iconfont moti-right"></text>
			</view>
		</view>
		<view class="commonInfo">
			<text>生日</text>
			<view class="rightContent">
				<text class="sel">选择</text>
				<text class="iconfont moti-right"></text>
			</view>
		</view>
		<view class="commonInfo">
			<text>城市</text>
			<view class="rightContent">
				<text class="sel">选择</text>
				<text class="iconfont moti-right"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.content {
		height: 100%;
		.headBox {
			display: flex;
			height: 170upx;
			align-items: center;
			padding: 0 30upx;
			background-color: #ffffff;
			border-bottom: 2upx solid #f6f6f6;
			justify-content: space-between;

			.imageBox {
				display: flex;
				align-items: center;

				.headIcon {
					image {
						width: 120upx;
						height: 120upx;
						border-radius: 50%;
					}
				}

				text {
					color: #999999;
				}
			}
		}

		.mt20 {
			margin-top: 20upx;
		}

		.commonInfo {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #ffffff;
			padding: 0 30upx;
			height: 98upx;

			.rightContent {
				.moti-right {
					color: #999999;
				}
			}

			.identify {
				color: #ea9b4d;
			}

			.sel {
				color: #999999
			}
		}
	}
</style>
