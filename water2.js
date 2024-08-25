noise(5.303, .1)
	.out(o3);
osc(9.43, .1, 8.157)
	.modulate(o3,6)
	.out(o1);
shape(66.577, 1.73)
	.modulate(o3, 0.739)
	.modulate(o1, 0.024)
	.colorama(7.187)
	.out(o0);

