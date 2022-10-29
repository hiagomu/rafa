function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() // verifica data atual do computador
    var hora = data.getHours() // verifica hora autal do computador
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){       
        img.src = 'fotom.jpg'
    } else if (hora >= 12 && hora < 18){
        img.src = 'fotot.jpg'
        document.body.style.background = '#c87700'
    } else {
        img.src = 'foton.jpg'
        document.body.style.background = '#193073' // mudar a cor de fundo
    }
}