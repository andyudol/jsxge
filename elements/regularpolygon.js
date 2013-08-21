var p1 = board.create('point', [1, 1])
,	p2 = board.create('point', [1.5, 1.5])
,	n = Math.random()*100%7+3
,	pn = board.create('regularpolygon', [p1, p2, n]);
