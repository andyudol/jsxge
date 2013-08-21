var	p1 = board.create('point', [2.0, 2.0])
,	p2 = board.create('point', [1.0, 1.0])
,	p3 = board.create('point', [0.0, 4.0])
,	p4 = board.create('point', [0.0, -1.0])
,	l = board.create('line', [p1, p3])
,	c = board.create('circle', [p2, p4])
,	i = board.create('intersection', [l, c], 1)
,	oi = board.create('otherintersection', [l, c, i]);
