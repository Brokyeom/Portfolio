<section>
	<nav>
		<div class="nav_options">
			<a href="/">자기소개</a>
			<a href="/projects">프로젝트</a>
			<a href="/activities">대외활동</a>
		</div>
	</nav>
	<div class="content_area">
		<slot />
	</div>
</section>

<style>
	section {
		display: flex;
	}
	.nav_options {
		display: flex;
		flex-direction: column;
		width: 15rem;
		height: 100vh;

		margin: 2rem;
	}
	nav a {
		color: violet;
	}
	.content_area {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
