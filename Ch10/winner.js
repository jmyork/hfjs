var winner = function() { alert("WINNER!") };
var loser = function() { alert("LOSER!") };
winner();
var a = winner;
var b = loser;
var c = loser;
c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();