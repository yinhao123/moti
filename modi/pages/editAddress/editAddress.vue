<template>
	<view class="content">
		<form @submit="formSubmit" >
			<view class="formItem">
				<input class="formInput" type="text" value="" placeholder="姓名"/>
			</view>
			<view class="formItem">
				<input class="formInput" type="text" value="" placeholder="电话"/>
			</view>
			<view class="formItem">
				<view class="formInput" :style="!pickerText.label?'color: #808080;':''" 
					@tap="showMulLinkageThreePicker">
					{{pickerText.label?pickerText.label:"省份 城市 区县"}}
				</view>
				<input type="hidden" style="display: none;" name="address" :value="pickerText.label"/>
			</view>
			<view class="formItem">
				<input class="formInput" type="text" value="" placeholder="详细地址"/>
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
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		data() {
			return {
				// 城市三级联动
				themeColor: '#00bb50',
				cityPickerValueDefault: [0, 0, 1],
				pickerText: ''
			}
		},
		components:{
			mpvueCityPicker
		},
		methods: {
			submitAddress:function (){
				console.log("保存地址")
			},
			// 三级联动选择
			showMulLinkageThreePicker:function (){
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm:function (event){
				this.pickerText = event;
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
