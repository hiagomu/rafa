function contar() {
    var tn1 = document.querySelector('#txti')
    var tn2 = document.querySelector('#txtf')
    var tn3 = document.querySelector('#txtp')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)

    var resu = window.document.querySelector('#res')

    if (n1 == 0 || n2 == 0 || n3 == 0) {
        alert('erro')
    } else {
        if (n1 < n2){
            for (let i = n1; i <= n2; i+=n3) {
                resu.innerHTML += ` ${i} \u{1F603}` // faz com que escreva todos os numeros e mostre o emoje
        }
        
        } else {
            for (let i = n1; i >= n2; i -= n3){
                resu.innerHTML += ` ${i} \u{1F449} `
            }
        }
        resu.innerHTML += `\u{1f3c1}`
    }

}
    