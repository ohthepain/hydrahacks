// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
await loadScript("https://cdn.statically.io/gl/metagrowing/extra-shaders-for-hydra/main/lib/lib-color.js")

osc(3, 0.5, 1)
	.rotate(() => -0.07 * time)
	.colreflect(osc(12, 0.23, 1)
		.rotate(() => 0.01 * time), 0.03)
	.posterize()
	.out(o0)
render(o0)

