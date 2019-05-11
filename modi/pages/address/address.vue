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
						<view class="">icon</view>
					</view>
					<view class="addressEdit">
						<view class="">
							check
							<label for="">
								设为默认地址
							</label>
						</view>
						<view class="">
							删除
						</view>
					</view>
				</view>
			</view>
			<view class="addBtn">
				<view class="addNewAddress">添加新地址</view>
			</view>
		</template>
		<template v-else>
			<view  class="noAddress">
				<view>
					暂无收货地址，请添加
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList:[
					{id:0,name:"木木0",tel:"13333333333",address:"北京市回龙观大街隆景源三区3号楼4单元213",checkStatus:true},
					{id:1,name:"木木1",tel:"13333333333",address:"北京市回龙观大街隆景源三区3号楼4单元213",checkStatus:false}
				]
			}
		},
		methods: {
			
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
