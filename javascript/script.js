function show(){
    var suits=['H','C','D','S']
    var ranks=['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    var deck=[]

for(var i=0;i<4;i++)
    {
    for(var j=0;j<13;j++)
      {
       deck.push(suits[i]+ranks[j])
   }
}
document.getElementById("array").innerHTML=deck
}


