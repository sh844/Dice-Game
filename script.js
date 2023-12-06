document.body.style.background='lightgreen'

let a=document.getElementsByTagName('img')[0].getAttribute('id') //----> of dice 1
let b=document.getElementsByTagName('img')[1].getAttribute('id') //----> of dice 2
let c=document.getElementsByTagName('img')[2].getAttribute('id') //----> of dice 3
let d=document.getElementsByTagName('img')[3].getAttribute('id') //----> of dice 4
let e=document.getElementsByTagName('img')[4].getAttribute('id') //----> of dice 5
let f=document.getElementsByTagName('img')[5].getAttribute('id') //----> of dice 6

let g=document.getElementById('-1') //-------> of button
let l=document.getElementsByTagName('p')[0]

let h
let k

let i=document.getElementsByTagName('img')[1] 
let j=document.getElementsByTagName('img')[5]

g.onclick=function(){
  
h=Math.floor(Math.random()*6) //----->generate random number from 0 to 6
// console.log(h)
k=Math.floor(Math.random()*6)
// console.log(k)
if(h==a){
i.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png")
}
else if(h==b){
i.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png")                          
}                                                //1  3
else if(h==c){
  i.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141003/dice3.png")
}
else if(h==d){
  i.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141004/dice4.png")
}
else if(h==e){
  // console.log(p)
  i.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png")
}
else if(h==f){
  i.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141006/dice6.png")
}
  // else if(h==6){
  //   i.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png")
  // }

if(k==a){
j.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png")
}
else if(k==b){
j.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png")                          
}                                                //1  3
else if(k==c){
  j.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141003/dice3.png")
}
else if(k==d){
  j.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141004/dice4.png")
}
else if(k==e){
  j.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png")
}
else if(k==f){
  j.setAttribute('src',"https://media.geeksforgeeks.org/wp-content/uploads/20200508141006/dice6.png")
}
  if(h>k)
    l.innerHTML='Player 1 wins'
  else if(k>h)
    l.innerHTML='Player 2 wins'
  else
    l.innerHTML='Draw'
}