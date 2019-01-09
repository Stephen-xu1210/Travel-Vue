<template>
	<div>
			<router-link 
			tag="div" 
			class="header-abs" 
			to="/"
			v-show="showAbs"
			>
				<div class="iconfont back-icon">
					&#xe624;
				</div>
			</router-link>
		<div 
		class="header-fixed" 
		v-show="!showAbs"
		:style="opacityStyle"
		>
			景点详情
			<router-link to="/">
				<div class="iconfont header-icon-one">&#xe624;</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		name:'DetailHeader',
		data(){
			return{
				showAbs:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		methods:{
				handleScroll(){
					// top存储的是页面的滚动距离（相对于高度）
					const top = document.documentElement.scrollTop
					if(top > 50){
						let opacity = top/140
						opacity = opacity > 1 ? 1 : opacity
						this.opacityStyle = { opacity }
						this.showAbs = false
					}else{
						this.showAbs = true
					}
				}
		},
		activated(){
			this.$nextTick(function(){
				window.addEventListener('scroll',this.handleScroll)
			})
			
		},
		// 解绑全局事件 因为操作的对象是为window  会对全局造成影响；
		// 若只是在组件标签上 绑定事件  只会影响该组件   但操作window就会对全局造成影响 
		// 所以使用deactivated生命周期钩子   它是在即将离开页面  去往新页面时 会触发
		// 所以在离开本页面后  便移除这个全局事件监听  优化提升性能
		deactivated(){
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
	position:absolute
	left:.2rem
	top:.2rem
	width:.8rem
	height:.8rem
	line-height:.8rem
	border-radius:.4rem
	text-align:center
	background:rgba(0,0,0,.8)
	.back-icon
		color:#fff
		font-size:.4rem
.header-fixed
	position:fixed
	top:0
	left:0
	right:0
	height:$HeaderHeight
	line-height:$HeaderHeight
	text-align:center;
	color:#fff
	background:$bgColor
	font-size:.32rem
.header-icon-one
	position:absolute
	top:0
	left:0
	width:.64rem
	text-align:center
	font-size:.32rem
	color:#fff
</style>