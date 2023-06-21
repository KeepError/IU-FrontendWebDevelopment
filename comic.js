const email = "e.kuziakov@innopolis.university";

getComicData(email).then((data) => {
  console.log(data);
  showComicData(data);
});

function showComicData(data) {
  const comicTitle = document.getElementById("comic-title");
  const comicImage = document.getElementById("comic-image");
  const comicDate = document.getElementById("comic-date");

  comicTitle.textContent = data.safe_title; // Resistant to hacks :)
  comicImage.src = data.img;
  comicImage.alt = data.alt;

  date = new Date(data.year, data.month, data.day);
  comicDate.textContent = date.toLocaleDateString();
}

async function getComicData(email) {
  const comicIdRequestParams = new URLSearchParams({ email: email });
  const comicIdResponse = await fetch(
    `https://fwd.innopolis.university/api/hw2?${comicIdRequestParams}`
  );
  const comicId = await comicIdResponse.json();
  const comicDataRequestParams = new URLSearchParams({ id: comicId });
  const comicDataResponse = await fetch(
    `https://fwd.innopolis.university/api/comic?${comicDataRequestParams}`
  );
  const comicData = await comicDataResponse.json();
  return comicData;
}
