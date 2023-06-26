<script lang="ts">
	let portfolios: string[] = ['SOPT Web Admin', 'Pic.me', 'nori'];
	let currentProject: string = portfolios[0];

	const updateCurrentProject = (name: string) => {
		currentProject = name;
	};
</script>

<h2 class="text-5xl">포트폴리오</h2>

<article>
	<nav class="flex flex-row gap-10 mb-10">
		{#each portfolios as name (name)}
			<p
				class="text-3xl cursor-pointer hover:text-red-300"
				on:click={() => updateCurrentProject(name)}>
				{name}
			</p>
		{/each}
	</nav>
	<h3 class="text-4xl font-semibold">{currentProject}</h3>
</article>
