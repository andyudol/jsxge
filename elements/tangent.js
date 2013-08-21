var	c = board.create('curve', [function(t){return t*t},function(t){return t*t*t;}])
,	g = board.create('glider', [1, 2, c])
,	t = board.create('tangent', [g]);
