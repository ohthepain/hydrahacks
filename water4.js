osc(35.696)
	.rotate(() => 0.07 * time)
	.out(o1);
osc(3.119, 0.0173, 1)
	//.modulate(noise(3.092))
	.rotate(1.655)
	.rotate(() => -0.07 * time)
	.modulate(o1)
	.posterize()
	.out(o0);

