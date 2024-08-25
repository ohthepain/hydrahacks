osc(58.737)
	.rotate(() => 0.07 * time)
	.out(o1);
osc(3.119, 0.005, 1)
	.rotate(1.655)
	.rotate(() => -0.07 * time)
	.modulate(o1)
	.posterize()
	.out(o0);

