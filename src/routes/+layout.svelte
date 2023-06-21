<script>
	import '../app.css';
</script>

<header class="sticky flex flex-row justify-center items-center w-full h-24 px-48 shadow-xl">
	<nav class="flex flex-row gap-10">
		<a href="/">Introduce</a><a href="/portfolio">Portfolio</a><a href="activities">Activities</a>
	</nav>
</header>

<article class="px-48 pt-20">
	<slot />
</article>

<style lang="postcss">
	a {
		@apply text-xl;
	}
</style>
