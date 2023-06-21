<script lang="ts">
	let identity: string[] = ['긍정적인', '끊임없이 탐구하는', '소통중심의'];
	let currentIndex = 0;
	let currentIdentity: string = identity[currentIndex];

	const updateIdentity = () => {
		if ((document as any).startViewTransition) {
			(document as any).startViewTransition(() => {
				currentIndex = (currentIndex + 1) % identity.length;
				currentIdentity = identity[currentIndex];
				return Promise.resolve();
			});
		} else {
			currentIndex = (currentIndex + 1) % identity.length;
			currentIdentity = identity[currentIndex];
		}
	};

	setInterval(updateIdentity, 2000);

	type SectionContent = {
		text: string;
		link?: string;
	};

	type Section = {
		title: string;
		content: SectionContent[];
	};

	let sections: Section[] = [
		{
			title: 'Contact',
			content: [{ text: 'Phone : 010 - 5787 - 1603' }, { text: 'Email : goindol40@gmail.com' }],
		},
		{
			title: 'Link',
			content: [
				{ text: 'Github', link: 'https://github.com/Brokyeom' },
				{ text: 'Velog', link: 'https://velog.io/@brokyeom' },
				{ text: 'HuggingFace', link: 'https://huggingface.co/Brokyeom' },
			],
		},
	];
</script>

<main>
	<h1 class="text-6xl font-extrabold leading-relaxed mb-20">
		안녕하세요, <span class="text-red-300">{currentIdentity}</span><br />
		웹 FE 개발자 김형겸입니다!
	</h1>

	<article class="flex gap-20">
		{#each sections as { title, content }}
			<section>
				<h2>{title}</h2>
				{#each content as { text, link }}
					<p>
						{#if link}
							<a href={link}>{text}</a>
						{:else}
							{text}
						{/if}
					</p>
				{/each}
			</section>
		{/each}
	</article>
</main>

<style lang="postcss">
	p {
		@apply text-2xl;
	}
</style>
