<template>
	<view class="content">
		<view class="headBox">
			<text>头像</text>
			<view class="imageBox" @tap="chageImage">
				<view class="headIcon">

					<image :src="headImage" mode=""></image>
				</view>
				<text class="iconfont moti-right"></text>
			</view>
		</view>

		<view class="commonInfo" @tap="goRename">
			<text>用户名/昵称</text>
			<view class="rightContent">
				<text>{{name}}</text>
				<text class="iconfont moti-right"></text>
			</view>
		</view>
		<view class="commonInfo mt20" @tap="goPhoneReset">
			<text>手机号</text>
			<view class="rightContent">
				<text>{{iphone}}</text>
				<text class="iconfont moti-right"></text>
			</view>

		</view>
		<view class="commonInfo" @tap="go('addID/addID')">
			<text>身份认证</text>
			<view class="rightContent">
				<text class="identify">完善个人信息，享受更多服务</text>
				<text class="iconfont moti-right"></text>
			</view>
		</view>
		<picker :range="sexOption" range-key="sex" @change="getSex">
			<view class="commonInfo mt20">
				<text>性别</text>
				<view class="rightContent">
					<text class="sel">{{sexText?sexText:'选择'}}</text>
					<text class="iconfont moti-right"></text>
				</view>
			</view>
		</picker>
		<picker mode="date" @change="getDate">
			<view class="commonInfo">
				<text>生日</text>
				<view class="rightContent">
					<text class="sel">{{date?date:'选择'}}</text>
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
	</view>
</template>

<script>
	import { changeHeadIcon,loadInfo } from '@/common/request.js'
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				name: '126321',
				iphone: '15233818144',
				headImage: '../../static/22.png',
				sexText: '',
				date: '',
				sex: 3,
				sexArray: ['男', '女'],
				sexOption: [{
						sex: '男'
					},
					{
						sex: '女'
					}
				],
				data: '',
				themeColor: '#00bb50',
				cityPickerValueDefault: [0, 0, 1],
				pickerText: ''

			};
		},
		onShow:function(){
			// console.log(this.$store.state.userInfo);
			// this.headImage = $store.state.userInfo;
			 console.log(loadInfo());
		},
		components: {
			mpvueCityPicker
		},

		methods: {
			go: function(url) { //公用函数，用页面跳转并传递参数
				uni.navigateTo({
					url: url
				})
			},
			goPhoneReset: function() {
				uni.navigateTo({
					url: 'phoneReset/phoneReset?phone=' + this.iphone
				})
			},
			goRename:function(){
				uni.navigateTo({
					url:'rename/rename?name='+this.name
				})
			},
			chageImage: async function() { //更换头像方法

				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
					success:  (res) => {
						console.log(JSON.stringify(res.tempFilePaths));
						console.log(this);
						// console.log(res.tempFilePaths[0]);
						let imag_path = res.tempFilePaths[0];
						this.headImage = res.tempFilePaths[0];
						changeHeadIcon(imag_path);
					}
				})
			},

			showModal: () => {
				uni.showModal({
					showCancel: false,
				})
			},
			//获取生日日期
			getDate: function(e) {
				this.date = e.detail.value
			},
			//获取性别
			getSex: function(e) {
				this.sex = e.detail.value;
				this.sexText = this.sexArray[this.sex]
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

			},
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
				background: #050505;
				border-radius: 10upx;
				color: #ffffff;
				line-height: 82upx;
				text-align: center;
				font-family: MicrosoftYaHei;
			}
		}
	}
</style>
