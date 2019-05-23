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
				<text>{{name}}</text>
				<text class="iconfont moti-right"></text>
			</view>

		</view>
		<view class="commonInfo mt20">
			<text>手机号</text>
			<view class="rightContent">
				<text>{{iphone}}</text>
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
		<picker mode="selector" >
			<view class="commonInfo mt20">
				<text>性别</text>
				<view class="rightContent">
					<text class="sel">{{sex}}</text>
					<text class="iconfont moti-right"></text>
				</view>
			</view>
		</picker>
		<picker mode="date" @change="getData">
			<view class="commonInfo">
				<text>生日</text>
				<view class="rightContent">
					<text class="sel">{{data?data:"选择"}}</text>
					<text class="iconfont moti-right"></text>
				</view>
			</view>
		</picker>
		<view class="commonInfo" @tap="showMulLinkageThreePicker">
			<text>城市</text>
			<view class="rightContent">
				<text class="sel">{{pickerText.label?pickerText.label:"选择"}}</text>
				<text class="iconfont moti-right"></text>
			</view>
		</view>
		<view class="save">
			<view class="save-content">保存</view>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
		<!-- 	<view class="modal">
			<view>
				<label class="radio">
					<radio value="r1" color="red"/>选中</label>
				<label class="radio">
					<radio value="r2" color="red"/>未选中</label>
			</view>

		</view> -->
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		data() {
			return {
				name: '126321',
				iphone: '1770001990',
				sex: '选择',
				data:'',
				themeColor: '#00bb50',
				cityPickerValueDefault: [0, 0, 1],
				pickerText: ''
			};
		},
		methods: {
			go: function(url) { //公用函数，用页面跳转传递参数 输入跳转地址
				uni.navigateTo({
					url: url
				})
			},
			showModal: () => {
				uni.showModal({
					showCancel: false,
				})
			},
			getData: function(e){
				this.data = e.detail.value
			},
			// 三级联动选择
			showMulLinkageThreePicker: function() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm: function(event) {
				this.pickerText = event;
			},
			onCancel: function(e) {
				console.log(e)
			}
		},
		components: {
			mpvueCityPicker
		}

	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

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

		.save {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			padding-bottom: 40upx;

			.save-content {
				width: 690upx;
				height: 82upx;
				background-color: #050505;
				border-radius: 10upx;
				color: #ffffff;
				line-height: 82upx;
				text-align: center;
				font-family: MicrosoftYaHei;
			}
		}

	}
</style>
