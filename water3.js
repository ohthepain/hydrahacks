osc(21)
	.out(o1)
osc(2, .1, 1)
	.modulate(noise(2))
	.rotate(() => -0.07 * time)
	.modulate(o1)
	.posterize()
	.out(o0)

