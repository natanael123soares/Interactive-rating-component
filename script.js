function mudar(numero){
    let item1 = document.getElementById('avaliaçao1')
    let item2= document.getElementById('avaliaçao2')
    let item3 = document.getElementById('avaliaçao3')
    let item4 = document.getElementById('avaliaçao4')
    let item5 = document.getElementById('avaliaçao5')
    switch (numero){
            case 1:
                item1.style.backgroundColor = '#fb7413'
                item2.style.backgroundColor = '#7c879825'
                item3.style.backgroundColor = '#7c879825'
                item4.style.backgroundColor = '#7c879825'
                item5.style.backgroundColor = '#7c879825'
                break
            case 2:
                item2.style.backgroundColor = '#fb7413'
                item1.style.backgroundColor = '#7c879825'
                item3.style.backgroundColor = '#7c879825'
                item4.style.backgroundColor = '#7c879825'
                item5.style.backgroundColor = '#7c879825'
                break
            case 3:
                item3.style.backgroundColor = '#fb7413'
                item2.style.backgroundColor = '#7c879825'
                item1.style.backgroundColor = '#7c879825'
                item4.style.backgroundColor = '#7c879825'
                item5.style.backgroundColor = '#7c879825'
                break;
            case 4:
                item4.style.backgroundColor = '#fb7413'
                item2.style.backgroundColor = '#7c879825'
                item3.style.backgroundColor = '#7c879825'
                item1.style.backgroundColor = '#7c879825'
                item5.style.backgroundColor = '#7c879825'
                break;
            case 5:
                item5.style.backgroundColor = '#fb7413'
                item2.style.backgroundColor = '#7c879825'
                item3.style.backgroundColor = '#7c879825'
                item4.style.backgroundColor = '#7c879825'
                item1.style.backgroundColor = '#7c879825'
                break;       
    }

}
function avaliar(){
    let sup = document.getElementById('superior')
    let inf = document.getElementById('inferior')
   
     sup.src = './thank-you.svg'
    
            
}