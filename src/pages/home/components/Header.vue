<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont header-icon-one">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.city}}
				<span class="iconfont city-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>
<script>
  export default{
    name : 'HomeHeader',
    props:{
    	city:String
    }
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
	height:$HeaderHeight
	line-height:$HeaderHeight
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
	padding-left:.2rem
.header-left
	width:.64rem
	float:left
.header-right
	width:1.14rem
	float:right
	margin-left:.1rem
	color:#fff
.city-icon
	font-size:.24rem
.header-icon-one
	margin-left:.2rem
</style>