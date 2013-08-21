var p = [];
for (i = 0; i < 5; i++) {
	p.push(board.create('point', [Math.random()*10%7, Math.random()*10%5-1]));
};
var g = board.create('group', p);
