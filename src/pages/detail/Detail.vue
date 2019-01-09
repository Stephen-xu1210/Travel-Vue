<template>
	<div>
		<detail-banner></detail-banner>
		<detail-recommend></detail-recommend>
	</div>
</template>
<script>
	import DetailBanner from './components/Banner'
	import DetailRecommend from './components/Recommend'
	export default{
		name:'Detail',
		components:{
			DetailBanner,
			DetailRecommend
		}
	}
</script>
<style lang="stylus" scoped>
	
</style>