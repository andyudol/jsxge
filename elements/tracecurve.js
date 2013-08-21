var	c = board.create('circle',[[0, 0], 2])
,	p1 = board.create('point',[-3, -1])
,	g = board.create('glider',[2, 2, c])
,	s = board.create('segment',[g, p1])
,	p2 = board.create('midpoint',[s])
,	curve = board.create('tracecurve', [g, p2]);
