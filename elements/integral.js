var	f = board.create('functiongraph', [function (t) { return (t+1)*(t+2)*(t+3)/2; }])
,	i = board.create('integral', [[-3, 0], f]);
