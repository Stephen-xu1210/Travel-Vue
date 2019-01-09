<template>
	<div>
		<detail-banner></detail-banner>
		<detail-recommend></detail-recommend>
		<detail-header></detail-header>
		<div class="content"></div>
	</div>
</template>
<script>
	import DetailBanner from './components/Banner'
	import DetailRecommend from './components/Recommend'
	import DetailHeader from './components/Header'
	export default{
		name:'Detail',
		components:{
			DetailBanner,
			DetailRecommend,
			DetailHeader
		}
	}
</script>
<style lang="stylus" scoped>
	.content
		height:50rem
</style>