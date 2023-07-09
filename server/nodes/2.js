

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.76e58bc5.js","_app/immutable/chunks/scheduler.8746962a.js","_app/immutable/chunks/index.e9a9b99a.js"];
export const stylesheets = ["_app/immutable/assets/2.7b543c4a.css"];
export const fonts = [];
