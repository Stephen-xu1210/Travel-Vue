<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">城市
			<span class="iconfont city-icon">&#xe64a;</span>
		</div>
	</div>
</template>
<script>
  export default{
    name : 'HomeHeader'
  }
</script>
<!-- @符号是代表src目录  通常路径写为'@/assets/.../...'就可以找到src下的文件
	但是在style样式中 如若使用@   前面一定要加~    即~@


	scoped属性  是为了让之中的css样式  只在当前页面生效   这样不会与其他页面css冲突
 -->
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
	display:flex
	height:.86rem
	line-height:.86rem
	color:#ffffff
	// background:#00bcd4
	background:$bgColor
.header-input
	flex:1
	color:lightgray
	height:.64rem
	line-height:.64rem
	background:#ffffff
	border-radius:.1rem
	margin-top:.12rem
	margin-left:.2rem
.header-left
	width:.64rem
	float:left
.header-right
	width:1.24rem
	float:right
.city-icon
	font-size:.24rem
</style>