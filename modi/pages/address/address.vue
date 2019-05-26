<template>
	<view class="content">
		<template v-if="addressList.length > 0">
			<view class="addressCon">
				<view class="addressItem" v-for="(item,index) in addressList" :key="index">
					<view class="userInfo">
						<span>{{item.name}}</span>
						<span class="tel">{{item.tel}}</span>
					</view>
					<view class="userAddres">
						<view class="">{{item.address}}</view>
						<view class="iconfont moti-bianji" @tap="toEditAddress('edit')"></view>
					</view>
					<view class="addressEdit">
						<view class="">
							<radio-group @change="radioChange(item.value)">
								<label for="">
									<radio :value="item.value" :checked="item.checkStatus" style="transform:scale(0.7)" color="#ff0000" />
									设为默认地址
								</label>
							</radio-group>
						</view>
						<view class="del" @tap="delAddress" data-id="item">
							删除
						</view>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="noAddress">
				<view>
					暂无收货地址，请添加
				</view>
			</view>
		</template>
		<view class="addBtn">
			<view class="addNewAddress" @tap="toEditAddress('add')">添加新地址</view>
		</view>
	</view>
</template>

<script>
	import { listAddress,queryUserDefaultAddress,defaultAddress,deleteAddress } from '@/common/request.js';
	export default {
		data() {
			return {
				addressList:[]
			}
		},
		mounted: function (){
			this.getAddressList()
		},
		methods: {
			//获取地址list
			getAddressList: async function (){
				let succ = await listAddress();
				if(succ.data.code == 0){
					this.addressList = succ.data.result.rows;
				}
			},
			radioChange:function (addressId){
				for (let i = 0; i < this.addressList.length; i++) {
					this.addressList[i].checkStatus?this.addressList[i].checkStatus = false:this.addressList[i].checkStatus = true;
				}
			},
			toEditAddress:function (type){
				uni.navigateTo({
					url: "/pages/editAddress/editAddress?type="+type
				});
			},
			delAddress: async function (e){
				console.log(e.target)
				let addressId = e.target 
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		height: 100%;
		.addressCon{
			height: 100%;
			.addressItem{
				height: 280upx;
				background: #ffffff;
				margin-top: 30upx;
				padding: 70upx 30upx 0;
				.userInfo{
					.tel{margin-left: 50upx}
				}
				.userAddres{
					display: flex;
					justify-content: space-between;
				}
				.addressEdit{
					font-size: 22upx;
					color: #9a9a9a;
					margin-top: 44upx;
					display: flex;
					justify-content: space-between;
				}
			}
		}
		.addBtn{
			display: flex;
			align-items: center;
			position: fixed;
			width: 100%;
			bottom: 36upx;
			z-index: 999;
			.addNewAddress{
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
		.noAddress{
			height: 100%;
			display: flex;
			align-items: center;
			color: #9a9a9a;
			view{
				width: 100%;
				font-size: 30upx;
				text-align: center;
			}
		}
	}
	
</style>
