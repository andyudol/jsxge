var	f = function(x) { return 0.3*x*x-x; }
,	r = board.create('riemannsum', [f, 5, 'upper', -2, 5])
,	g = board.create('functiongraph',[f, -2, 5]);
