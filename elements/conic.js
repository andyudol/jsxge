var p = [];
for(i=0; i<5; i++){
	p.push(board.create('point', [Math.random()*100%10-2, Math.random()*8%6-2]));
};
var c = board.create('conic', p);
