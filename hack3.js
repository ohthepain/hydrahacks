noise(4.766, .148)
	.saturate(1.185)
	.out(o1);
osc(8,-0.1,1.5)
	//.rotate(() => time % 11.953)
	//.scroll(0,0,0.1,0.1)
 	.modulate(o1)
	//.pixelate(150,50)
	//.contrast(21.244)
	.colorama()
	//.kaleid(5)
	.out(o0);

