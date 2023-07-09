<script lang="ts">
	interface ComicData {
		safe_title: string;
		title: string;
		transcript: string;
		img: string;
		alt: string;
		year: string;
		month: string;
		day: string;
		news: string;
		link: string;
		num: number;
	}

	async function getComicData(): Promise<ComicData> {
		const email = 'e.kuziakov@innopolis.university';
		const comicIdRequestParams = new URLSearchParams({ email: email });
		const comicIdResponse = await fetch(
			`https://fwd.innopolis.university/api/hw2?${comicIdRequestParams}`
		);
		const comicId = await comicIdResponse.json();
		const comicDataRequestParams = new URLSearchParams({ id: comicId });
		const comicDataResponse = await fetch(
			`https://fwd.innopolis.university/api/comic?${comicDataRequestParams}`
		);
		return await comicDataResponse.json();
	}

	let promise = getComicData();
</script>

<div id="comic">
	{#await promise}
		<p>loading...</p>
	{:then comicData}
		<img id="comic-image" alt="comic" src={comicData.img} />
		<p id="comic-details">
			<span id="comic-title">{comicData.safe_title}</span> (<span id="comic-date"
				>{new Date(
					Number(comicData.year),
					Number(comicData.month),
					Number(comicData.day)
				).toLocaleDateString()}</span
			>)
		</p>
	{/await}
</div>

<style>
	#comic {
		text-align: center;
	}
</style>
