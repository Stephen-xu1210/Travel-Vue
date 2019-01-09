<template>
	<div class="box">
		<div class="main-item border-bottom">
			<span class="iconfont item-font">&#xe63b;</span>
			去哪儿推荐
		</div>
		<div class="price-item border-bottom">
			<div class="price-left">
				<p class="title">汤山一号温泉度假区门票成人票</p>
				<p class="other">
					<span class="iconfont right-font">&#xe61e;</span>
					21:00前随买随用
				</p>
				<span class="back-price">随时退</span>
			</div>
			<div class="price-right">
				<p class="item-price">￥118</p>
				<div class="right-btn">预定</div>
			</div>
		</div>
		<div class="price-item border-bottom">
			<div class="price-left">
				<p class="title">汤山一号温泉度假区门票+汤山一号温泉度假区自助餐票成人票</p>
				<p class="other">
					<span class="iconfont right-font">&#xe61e;</span>
					20:45前随买随用
				</p>
				<span class="back-price">随时退</span>
			</div>
			<div class="price-right">
				<p class="item-price">￥168</p>
				<div class="right-btn">预定</div>
			</div>
		</div>
		<div class="price-item border-bottom">
			<div class="price-left">
				<p class="title">【优质精选】汤山一号景区成人票（含自助餐）！-免预约-电子票</p>
				<p class="other">
					<span class="iconfont right-font">&#xe61e;</span>
					23:00前随买随用
				</p>
				<span class="back-price">随时退</span>
			</div>
			<div class="price-right">
				<p class="item-price">￥161</p>
				<div class="right-btn">预定</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'DetailRecommend'
	}	
</script>
<style lang="stylus" scoped>
.box
	background:#fff
	.main-item
		font-size:.32rem
		padding:.2rem
		.item-font
			color:red
	.price-item
		display:flex
		padding:.3rem
		justify-content:space-between
		.price-right
			padding:.2rem
		.title
			font-size:.32rem
			margin:.1rem 0
		.other
			font-size:.24rem
			margin-bottom:.1rem
		.right-font
			color:rgb(55,198,192)
		.item-price
			color:rgb(243,152,57)
			text-align:center
		.right-btn
			color:#fff
			background:rgb(243,152,57)
			border-radius:.1rem
			height:.64rem
			line-height:.64rem
			width:1.5rem
			text-align:center
		.back-price
			font-size:.24rem
			border:1px solid lightblue
			color:rgb(55,198,192)
</style>