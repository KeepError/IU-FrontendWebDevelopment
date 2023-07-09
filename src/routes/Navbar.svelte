<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<h1 id="header-name">Egor Kuziakov</h1>
	<nav>
		<a href="{base}/">About Me</a>
		<a href="{base}/comic">Comic</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	header {
		margin-top: 20px;
		font-size: 16px;
	}

	#header-name {
		font-size: 24px;
		font-weight: 600;
	}

	header a {
		margin: 0 20px;
		text-decoration: none;
		color: black;
		transition: 0.3s;
	}

	header a:hover {
		color: #646464;
	}
</style>
