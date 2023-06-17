<script>
	import '../app.css';
</script>

<header class="sticky flex flex-row justify-center items-center w-full h-24 px-48">
	<nav class="flex flex-row gap-8">
		<a href="/">Introduce</a><a href="/portfolio">Portfolio</a><a href="activities">Activities</a>
	</nav>
</header>

<article class="px-48 pt-20">
<slot />
</article>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.800);
		color: white;
	}

	a:hover {
		color : red;
	}
</style>
