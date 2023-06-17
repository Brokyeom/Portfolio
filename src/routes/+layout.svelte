<script>
	import '../app.css';
</script>

<header class="sticky flex flex-row justify-center items-center w-full h-24 px-48">
	<nav class="flex flex-row gap-8">
		<a href="/">Introduce</a><a href="/portfolio">Portfolio</a><a href="activities">Activities</a>
	</nav>
</header>

<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.800);
		color: white;
	}
</style>
