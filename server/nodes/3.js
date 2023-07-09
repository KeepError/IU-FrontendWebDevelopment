

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/comic/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.28bc0fb8.js","_app/immutable/chunks/scheduler.8746962a.js","_app/immutable/chunks/index.e9a9b99a.js"];
export const stylesheets = ["_app/immutable/assets/3.502c4f04.css"];
export const fonts = [];
