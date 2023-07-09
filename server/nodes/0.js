

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.720873c5.js","_app/immutable/chunks/scheduler.8746962a.js","_app/immutable/chunks/index.e9a9b99a.js"];
export const stylesheets = ["_app/immutable/assets/0.6bcd63cc.css"];
export const fonts = [];
