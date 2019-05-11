<template>
	<view class="content">
		<template v-if="addressList.length > 0">
			<view></view>
		</template>
		<template v-else>
			<view>暂无收货地址，请添加</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
