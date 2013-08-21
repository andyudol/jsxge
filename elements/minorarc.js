var p = [];
for (i = 0; i < 3; i++) {
	p.push (board.create('point', [Math.random()*100%7-2, Math.random()*100%3-1]));
};
var a = board.create('minorarc', p);
