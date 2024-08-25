noise(0.766, 1.248, 0.166)
	.saturate(1.185)
	.out(o1);
osc()
	.rotate(() => time % 600.953)
	.modulate(o1)
	.contrast(21.244)
	.kaleid(25)
	.out(o0);

