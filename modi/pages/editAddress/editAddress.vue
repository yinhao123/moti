<template>
	<view class="content">
		<form>
			<view class="formItem">
				<input class="formInput" type="text" v-model="receiveName" placeholder="姓名"/>
			</view>
			<view class="formItem">
				<input class="formInput" type="text"  v-model="receivePhone" placeholder="电话"/>
			</view>
			<view class="formItem">
				<view class="formInput" :style="!pickerText.label?'color: #808080;':''" 
					@tap="showMulLinkageThreePicker">
					{{pickerText?pickerText:"省份 城市 区县"}}
				</view>
				<input type="hidden" style="display: none;" v-model="pickerText.cityCode"/>
				<input type="hidden" style="display: none;" v-model="pickerText.label"/>
			</view>
			<view class="formItem">
				<input class="formInput" type="text" v-model="userAddress" placeholder="详细地址"/>
			</view>
		</form>	
		<view class="formBtn">
			<!-- #ifdef MP-WEIXIN -->
			<view class="wxAddress">从微信导入</view>
			<!-- #endif -->
			<view class="submitForm" @tap="submitAddress">保存</view>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import { saveAddress,updateAddress } from '@/common/request.js'
	import { checkMobile } from '../../common/utils.js'
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		data() {
			return {
				editType:'',
				// 城市三级联动
				themeColor: '#00bb50',
				cityPickerValueDefault: [0, 0, 1],
				pickerText: '',
				pickerCode: '',
				// 地址相关信息
				receiveName:'', //姓名
				receivePhone:'', //电话
				userAddress:'', //详细地址
			}
		},
		components:{
			mpvueCityPicker
		},
		onLoad: function (e){
			console.log(e.type);
			this.editType = e.type;
		},
		methods: {
			submitAddress:async function(){
				console.log(1)
				if (this.receiveName === "") {
					this.errorHand('收货人姓名不能为空')
					return false
				}
				if (this.receivePhone === "") {
					this.errorHand('收货人电话不能为空')
					return false
				}
				if (!checkMobile(this.receivePhone)) {
					console.log(this.receivePhone)
					this.errorHand('请输入有效的手机号码');
					return false
				}
				if (this.pickerText === "") {
					this.errorHand('请选择收货地址')
					return false
				}
				if (this.userAddress === "") {
					this.errorHand('请填写收货详细地址')
					return false
				}
				let succ;
				if(this.editType == 'add'){
					succ = await saveAddress(this.receiveName,this.receivePhone,this.pickerText,this.pickerCode,this.userAddress);
				}else if(this.editType == 'edit'){
					succ = await updateAddress(this.receiveName,this.receivePhone,this.pickerText,this.pickerCode,this.userAddress);
				}
				console.log(succ)
				if(succ.data.code == 0){
					uni.navigateTo({
						url: '/pages/address/address'
					})
				}
			},
			errorHand(text) { // 错误提示框
				uni.showToast({
					icon: 'none',
					title: text,
				})
				return false
			},
			// 三级联动选择
			showMulLinkageThreePicker:function (){
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm:function (event){
				this.pickerText = event.label;
				this.pickerCode = event.cityCode;
				console.log(event)
			},
			onCancel:function (e){
				console.log(e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		height: 100%;
		background: #ffffff;
		.formItem{
			padding: 0 40upx;
			display: flex;
			align-items: center;
			.formInput{
				width: 100%;
				height: 120upx;
				line-height: 120upx;
				box-sizing: border-box;
				border-bottom: 1upx solid #eeeeee;
			}
		}
		.formBtn{
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			position: fixed;
			width: 100%;
			bottom: 36upx;
			z-index: 999;
			.wxAddress{
				background: #ffffff;
				color: #63b34e;
				border: solid 2upx #63b34e;
				box-sizing: border-box;
				width: 90%;
				margin: 0 auto;
				height: 90upx;
				text-align: center;
				line-height: 90upx;
				border-radius: 10upx;
				margin-bottom: 20upx;
			}
			.submitForm{
				width: 90%;
				margin: 0 auto;
				height: 90upx;
				color: #ffffff;
				background: #050505;
				text-align: center;
				line-height: 90upx;
				border-radius: 10upx;
			}
		}
	}
</style>
