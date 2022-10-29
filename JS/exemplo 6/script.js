function tabuada() {
    
    var n = document.querySelector('#num')
    var num = Number(n.value)
    
    let tab = document.querySelector('#seltab')

    tab.innerHTML = '' //antes de começar limpa a área de tabuada

    for (let c = 0; c <= 10; c++) {
        
        let item = document.createElement('option') // cria elemento de forma dinamica
        item.text = `${num} X ${c} = ${num*c}`
        tab.appendChild(item) // cria o filho que vai ser o item
    }
}