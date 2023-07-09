import { c as create_ssr_component, i as is_promise, n as noop, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const RandomComic_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#comic.svelte-as5svg{text-align:center}",
  map: null
};
async function getComicData() {
  const email = "e.kuziakov@innopolis.university";
  const comicIdRequestParams = new URLSearchParams({ email });
  const comicIdResponse = await fetch(`https://fwd.innopolis.university/api/hw2?${comicIdRequestParams}`);
  const comicId = await comicIdResponse.json();
  const comicDataRequestParams = new URLSearchParams({ id: comicId });
  const comicDataResponse = await fetch(`https://fwd.innopolis.university/api/comic?${comicDataRequestParams}`);
  return await comicDataResponse.json();
}
const RandomComic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = getComicData();
  $$result.css.add(css$1);
  return `<div id="comic" class="svelte-as5svg">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-qeejp2">loading...</p> `;
    }
    return function(comicData) {
      return ` <img id="comic-image" alt="comic"${add_attribute("src", comicData.img, 0)}> <p id="comic-details"><span id="comic-title">${escape(comicData.safe_title)}</span> (<span id="comic-date">${escape(new Date(Number(comicData.year), Number(comicData.month), Number(comicData.day)).toLocaleDateString())}</span>)</p> `;
    }(__value);
  }(promise)} </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#comic-page.svelte-wl34bd{margin-top:100px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="comic-page" class="svelte-wl34bd">${validate_component(RandomComic, "RandomComic").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
