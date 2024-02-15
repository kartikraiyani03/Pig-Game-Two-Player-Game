let p0 = document.querySelector('.p0')
let p1 = document.querySelector('.p1')
let nm = document.querySelector('.newgame')
let hidden = document.querySelector('.hidden') 
let s0 = document.querySelector('.s0')
let s1 = document.querySelector('.s1')
let roll = document.querySelector('.roll')
let hold = document.querySelector('.hold')
let ts0 = document.querySelector('.totalscore0')
let ts1 = document.querySelector('.totalscore1')
d = document.querySelector('.dice')


s0.textContent = 0
s1.textContent = 0

let cscore = 0
let activeplayer = 0
let scores
let play = true

let init = () =>
{
    scores = [0,0]
}

init()

let switchplayer = () =>
{
    cscore = 0
    document.querySelector(`.s${activeplayer}`).textContent = cscore
    activeplayer = activeplayer === 0 ? 1 : 0
    p0.classList.toggle('player-active')
    p1.classList.toggle('player-active')
}

roll.addEventListener('click',()=>
{
   if(play)
   {
      let dice = Math.trunc(Math.random() * 6) +1
      console.log(dice)
        if(dice !== 1)
        {
            cscore += dice
            document.querySelector(`.s${activeplayer}`).textContent = cscore
            d.textContent = dice
        }
        else
        {
            d.textContent = dice
            switchplayer()
        }
    }       
   
})

hold.addEventListener('click',()=>
{
    scores[activeplayer] += cscore
    document.querySelector(`.totalscore${activeplayer}`).textContent =  scores[activeplayer]
    
    if(scores[activeplayer] >= 30)
    {
        play = false
        document.querySelector(`.p${activeplayer}`).style.backgroundColor = "rgb(50, 40, 43)"
        document.querySelector(`.player${activeplayer}`).style.color = "rgb(202, 17, 48)"
        document.querySelector(`.totalscore${activeplayer}`).style.color = "rgb(202, 17, 48)"
    }
    else
    {
        switchplayer()
    }
})

nm.addEventListener('click',()=>
{
    switchplayer()
    d.textContent = 0
    activeplayer = 0
    scores = [0,0]
    play = true
    s0.textContent = 0
    s1.textContent = 0
    ts0.textContent = 0
    ts1.textContent = 0

    p0.style.backgroundColor = "rgb(234, 159, 172)"
    p1.style.backgroundColor = "rgb(241, 85, 111)"
});