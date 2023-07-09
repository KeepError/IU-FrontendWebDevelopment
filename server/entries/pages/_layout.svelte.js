import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1hqs4wg.svelte-1hqs4wg{display:flex;align-items:center;justify-content:space-between}header.svelte-1hqs4wg.svelte-1hqs4wg{margin-top:20px;font-size:16px}#header-name.svelte-1hqs4wg.svelte-1hqs4wg{font-size:24px;font-weight:600}header.svelte-1hqs4wg a.svelte-1hqs4wg{margin:0 20px;text-decoration:none;color:black;transition:0.3s}header.svelte-1hqs4wg a.svelte-1hqs4wg:hover{color:#646464}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="svelte-1hqs4wg" data-svelte-h="svelte-kwb89m"><h1 id="header-name" class="svelte-1hqs4wg">Egor Kuziakov</h1> <nav><a href="/" class="svelte-1hqs4wg">About Me</a> <a href="/comic" class="svelte-1hqs4wg">Comic</a></nav> </header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-14kol49{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-14kol49" data-svelte-h="svelte-xvtexk"><p>Thanks for visiting :)</p> </footer>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-le5k1h{display:flex;flex-direction:column;min-height:100vh;margin:0 300px}main.svelte-le5k1h{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-le5k1h">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="svelte-le5k1h">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
