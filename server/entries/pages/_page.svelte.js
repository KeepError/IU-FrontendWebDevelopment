import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const AboutMe_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#info.svelte-18800hl{text-align:center}#hello.svelte-18800hl{font-size:50px;font-weight:bold}#bio.svelte-18800hl{margin-top:6px;font-size:20px;color:#4c4c4c}.bio-highlight.svelte-18800hl{font-weight:bold;color:#3d3d3d}#skills.svelte-18800hl{margin-top:20px}#skills-header.svelte-18800hl{font-size:20px;font-weight:bold}#skills-list.svelte-18800hl{margin-top:10px}.skills-item.svelte-18800hl{display:inline-block;padding:3px 6px;border:2px solid #444444;border-radius:25px;color:#353535;font-weight:bold}#contacts.svelte-18800hl{margin-top:20px}#contacts-header.svelte-18800hl{font-size:20px;font-weight:bold}#contacts-cards.svelte-18800hl{margin-top:10px}.contacts-card.svelte-18800hl{text-decoration:none;padding:10px;color:white;background-color:#3a3a3a;font-size:30px;width:50px;margin:0 3px;border-radius:20%;transition:0.3s}.contacts-card.svelte-18800hl:hover{background-color:#5c5c5c}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-jcqqcl_START --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!-- HEAD_svelte-jcqqcl_END -->`, ""} <div id="info" class="svelte-18800hl" data-svelte-h="svelte-wq2c0j"><h1 id="hello" class="svelte-18800hl">Hello!</h1> <p id="bio" class="svelte-18800hl">I&#39;m <span class="bio-highlight svelte-18800hl">Egor Kuziakov</span><br> <span class="bio-highlight svelte-18800hl">Fullstack developer</span><br>
		studying at <span class="bio-highlight svelte-18800hl">Innopolis University</span></p> <div id="skills" class="svelte-18800hl"><p id="skills-header" class="svelte-18800hl">Essential skills</p> <ul id="skills-list" class="svelte-18800hl"><li class="skills-item svelte-18800hl">Python</li> <li class="skills-item svelte-18800hl">Web development</li> <li class="skills-item svelte-18800hl">SQL</li> <li class="skills-item svelte-18800hl">Deployment</li></ul></div> <div id="contacts" class="svelte-18800hl"><p id="contacts-header" class="svelte-18800hl">Contact me</p> <div id="contacts-cards" class="svelte-18800hl"><a href="mailto:e.kuziakov@innopolis.university" id="email" class="fa fa-envelope contacts-card svelte-18800hl"></a> <a href="https://github.com/KeepError" id="gh-link" class="fa fa-github contacts-card svelte-18800hl"></a> <a href="https://keeperror.t.me" id="tg-link" class="fa fa-telegram contacts-card svelte-18800hl"></a> <a href="https://www.linkedin.com/in/keeperror" id="lin-link" class="fa fa-linkedin contacts-card svelte-18800hl"></a></div></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#about.svelte-1y668c4{margin-top:200px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="about" class="svelte-1y668c4">${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
