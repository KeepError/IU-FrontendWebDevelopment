const email: string = "e.kuziakov@innopolis.university";

getComicData(email).then((data: ComicData) => {
  showComicData(data);
});

function showComicData(data: ComicData) {
  const comicTitle = document.getElementById("comic-title") as HTMLSpanElement;
  const comicImage = document.getElementById("comic-image") as HTMLImageElement;
  const comicDate = document.getElementById("comic-date") as HTMLSpanElement;

  comicTitle.textContent = data.safetitle; // Resistant to hacks :)
  comicImage.src = data.img;
  comicImage.alt = data.alt;

  const date: Date = new Date(data.year, data.month, data.day);
  comicDate.textContent = date.toLocaleDateString();
}

async function getComicData(email: string): Promise<ComicData> {
  const comicIdRequestParams = new URLSearchParams({ email: email });
  const comicIdResponse = await fetch(
    `https://fwd.innopolis.university/api/hw2?${comicIdRequestParams}`
  );
  const comicId = await comicIdResponse.json();
  const comicDataRequestParams = new URLSearchParams({ id: comicId });
  const comicDataResponse = await fetch(
    `https://fwd.innopolis.university/api/comic?${comicDataRequestParams}`
  );
  const comicData: ComicData = await comicDataResponse.json();
  return comicData;
}

interface ComicData {
  safetitle: string;
  img: string;
  alt: string;
  year: number;
  month: number;
  day: number;
}