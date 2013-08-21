var	p1 = board.create('point', [2.0, 2.0])
,	p2 = board.create('point', [5.0, 1.0])
,	p3 = board.create('point', [1.0, 3.0])
,	p4 = board.create('point', [0.0, -1.0])
,	l1 = board.create('line', [p1, p3])
,	l2 = board.create('line', [p2, p4])
,	i = board.create('intersection', [l1, l2]);
