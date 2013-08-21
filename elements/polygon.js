var p = []
,	n = Math.random()*100%7+3;
for(i=0; i<n; i++){
	p.push(board.create('point', [Math.random()*100%10-2, Math.random()*8%6-2]));
};
var c = board.create('polygon', p);
