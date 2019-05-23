<template>
	<view class="content">
		<view class="title">输入验证码</view>
		<view class="text">6位验证码已发送至</view>
		<view class="mobile">
			<view class="left">
				<span>+86</span>
				<text>{{mobile}}</text>
			</view>
			<view class="right">
				{{codeText}}
			</view>
		</view>
		<view class="codeCon">
			<view class="codeItem" v-for="(item,index) in codeArr" :key="index">
				<input @input="onInput($event,index)" type="number" :value="item.val"
					maxlength="1" :focus="focusIndex==index?true:false" >
			</view>
		</view>
		<view class="getCode" :class="getCode?'canClick':''" @tap="getCodeFun">
			重新发送验证码
		</view>
	</view>
</template>

<script>
	import { mobileLogin,getDynamicCodeLogin } from '@/common/request.js';
	export default {
		data() {
			return {
				focusIndex:0,
				mobile:'',
				dynamicCode:'',
				codeText:'',
				time:60,
				codeArr:[{val:''},{val:''},{val:''},{val:''},{val:''},{val:''}],
				getCode:false
			}
		},
		onLoad:function (option) {
			this.mobile = option.mobile;
			this.clock();
		},
		methods: {
			clock: function (){
				let clock = window.setInterval(() => {
					this.getCode = false;
					this.time--;
					this.codeText = this.time + 's';
					if (this.time <= 0) {
						window.clearInterval(clock);
						this.time = 60;
						this.codeText = '';
						this.getCode = true;
					}
				}, 1000);
			},
			onInput:function (e,index){
				if(this.focusIndex == index){
					this.focusIndex++;
					this.dynamicCode += e.detail.value
				}else{
					this.focusIndex = 0
				}
				if(this.dynamicCode.length == 6){
					this.mobileLogin();
				}
			},
			mobileLogin: async function (){
				let succ = await mobileLogin(this.mobile,this.dynamicCode);
				if(succ.data.code == 0){
					uni.switchTab({
						url:"/pages/index/index"
					})
				}else{
					uni.show({
						'title':succ.data.msg
					})
				}
			},
			getCodeFun: async function(){
				this.focusIndex = 0;
				for(let i = 0; i < codeArr.length; i++){
					codeArr[i].val = ''
				}
				if(this.getCode){
					let succ = await getDynamicCodeLogin(this.mobile);
					if(succ.data.code == 0){
						this.clock();
					}
				}else{
					uni.showToast({
						'title':'已发送'
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		padding: 120upx 80upx;
		height: 100%;
		background: #fff;
		.title{
			font-size: 48upx;
			font-family: MicrosoftYaHei-Bold;
		}
		.text{
			margin-top: 60upx;
			font-size: 24upx;
			color: #999;
		}
		.mobile{
			margin-top: 30upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left{
				font-size: 30upx;
				color: #000;
				span{
					margin-right: 30upx;
				}
			}
			.right{
				font-size: 22upx;
				color: #999;
			}
		}
		.codeCon{
			display: flex;
			justify-content: space-around;
			flex-wrap: nowrap;
			.codeItem{
				width: 12%;
				height: 100upx;
				display: flex;
				align-items:flex-end; 
				input{
					text-align: center;
					height: 100%;
					border-bottom: 1px solid #e3e3e3;
				}
			}
		}
		.getCode{
			font-size: 24upx;
			color: #666;
			margin-top: 40upx;
		}
		.canClick{
			color: #ff4a64;
		}
	}
</style>
