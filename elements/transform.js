
var	p1 = window.board.create('point', [3, 2])
,	trans = board.create('transform', [0,2], {type:'translate'})
,	p2 = board.create('point', [p1,trans], {style:7});
