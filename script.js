function relogio(){
    var res = document.querySelector("div#dia")
    var date = new Date()
    var hora = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var horaImprimivel = `${hora}:${min}:${sec}`
    var fundo = document.querySelector("section#corpo")
    var imagem = document.querySelector("img#img")

    if(hora>=0 && hora<6){
        res.innerHTML = "<p>Boa Madrugada!</p>"
        fundo.style.background = "#311828"
        imagem.src = 'madrugada.jpg'
    }else if(hora>=6 && hora<12){
        res.innerHTML = "<p>Bom Dia!</p>"
        fundo.style.background = "#c8db76"
        imagem.src = 'dia.jpg'
    }else if(hora<=18){
        res.innerHTML = "<p>Boa Tarde!</p>"
        fundo.style.background = "#d87a04"
        imagem.src = 'tarde.jpg'
    }else{
        res.innerHTML = "<p>Boa Noite!</p>"
        fundo.style.background = "#0b1966"
        imagem.src = 'noite.jpg'
    }

    document.form_relogio.relogio.value = horaImprimivel
    setTimeout("relogio()",1000)
}