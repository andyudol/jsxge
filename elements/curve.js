//var g = board.create('curve', [function(t){ return t; }, function(t){ return 1-t; }, 0, 10]);
var g = board.create('curve', [function(t){ return t-Math.sin(t*t);}, function(t){ return 1-Math.cos((t+1)/(t-1));}, -5, 10]);
