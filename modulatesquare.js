noise(2.268)
	.out(o3);
noise(2.268)
	.modulate(o3, 2)
	.out(o1);
shape(4, 0.6)
	.rotate(0, 0.1)
	.scale(1,0.8)
	.out(o2);
osc(9.823, -0.093, 2.668)
	.modulate(o1)
	.modulate(o2)
	.colorama()
	.out(o0)

