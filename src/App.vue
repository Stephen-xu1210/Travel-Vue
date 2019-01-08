<template>
  <div id="app">
  	<!-- keep-alive 里的内容已经被缓存起来了 不用每次都重新渲染页面 -->
  	<transition name="fade">
	    <keep-alive>
	      <router-view/>
	    </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.fade-enter-active {
  transition: all .3s ease;
}
/*.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}*/
.fade-enter, .fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
</style>
