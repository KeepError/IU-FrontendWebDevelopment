<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>

<div id="info">
	<h1 id="hello">Hello!</h1>
	<p id="bio">
		I'm <span class="bio-highlight">Egor Kuziakov</span><br />
		<span class="bio-highlight">Fullstack developer</span><br />
		studying at <span class="bio-highlight">Innopolis University</span>
	</p>
	<div id="skills">
		<p id="skills-header">Essential skills</p>
		<ul id="skills-list">
			<li class="skills-item">Python</li>
			<li class="skills-item">Web development</li>
			<li class="skills-item">SQL</li>
			<li class="skills-item">Deployment</li>
		</ul>
	</div>
	<div id="contacts">
		<p id="contacts-header">Contact me</p>
		<div id="contacts-cards">
			<!-- svelte-ignore a11y-missing-content -->
			<a
				href="mailto:e.kuziakov@innopolis.university"
				id="email"
				class="fa fa-envelope contacts-card"
			/>
			<!-- svelte-ignore a11y-missing-content -->
			<a href="https://github.com/KeepError" id="gh-link" class="fa fa-github contacts-card" />
			<!-- svelte-ignore a11y-missing-content -->
			<a href="https://keeperror.t.me" id="tg-link" class="fa fa-telegram contacts-card" />
			<!-- svelte-ignore a11y-missing-content -->
			<a
				href="https://www.linkedin.com/in/keeperror"
				id="lin-link"
				class="fa fa-linkedin contacts-card"
			/>
		</div>
	</div>
</div>

<style>
	#info {
		text-align: center;
	}

	#hello {
		font-size: 50px;
		font-weight: bold;
	}

	#bio {
		margin-top: 6px;
		font-size: 20px;
		color: #4c4c4c;
	}

	.bio-highlight {
		font-weight: bold;
		color: #3d3d3d;
	}

	#skills {
		margin-top: 20px;
	}

	#skills-header {
		font-size: 20px;
		font-weight: bold;
	}

	#skills-list {
		margin-top: 10px;
	}

	.skills-item {
		display: inline-block;
		padding: 3px 6px;
		border: 2px solid #444444;
		border-radius: 25px;
		color: #353535;
		font-weight: bold;
	}

	#contacts {
		margin-top: 20px;
	}

	#contacts-header {
		font-size: 20px;
		font-weight: bold;
	}

	#contacts-cards {
		margin-top: 10px;
	}

	.contacts-card {
		text-decoration: none;
		padding: 10px;
		color: white;
		background-color: #3a3a3a;
		font-size: 30px;
		width: 50px;
		margin: 0 3px;
		border-radius: 20%;
		transition: 0.3s;
	}

	.contacts-card:hover {
		background-color: #5c5c5c;
	}
</style>
