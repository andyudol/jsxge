var p = [];
for(i=0; i<2; i++){
	p.push(board.create('point', [Math.random()*100%10-2, Math.random()*8%6-2]));
};
var a = board.create('semicircle', p);
