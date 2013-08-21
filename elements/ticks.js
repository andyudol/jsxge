var	p1 = board.create('point', [0, 2])
,	p2 = board.create('point', [1, 4])
,	l = board.create('line', [p1, p2])
,	t = board.create('ticks', [l], {ticksDistance: 1});
