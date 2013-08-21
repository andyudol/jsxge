var	p1 = board.create('point', [-2, 2])
,	p2 = board.create('point', [2, -2])
,	l = board.create('segment', [[-1, 1], [5, 3]])
,	mp1 = board.create('midpoint', [p1, p2])
,	mp2 = board.create('midpoint', [l]);
