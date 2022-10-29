function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear() // pega ano com 4 digitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
    
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //calcular idade
        var genero = ''
        var img = document.createElement('img') // insere imagem
        img.setAttribute('id', 'foto') // insere id foto na imagem
        if (fsex[0].checked) { //verifica qual check box foi marcada
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criançahomem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultohomem.jpg')
            } else {
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
    
            genero = 'Mulher'
    
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criançamulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultomulher.jpg')
            } else {
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}