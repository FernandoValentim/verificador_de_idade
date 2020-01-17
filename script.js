function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
     } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'Homem'
                if (idade >=0 && idade < 10) {
                    //Criança
                    img.setAttribute('src' , 'bebe_menino.png')   
                }else if (idade < 21){
                    //Jovem
                    img.setAttribute('src' , 'jovem_homem.png')
                }else if ( idade < 50){
                    //Adulto
                    img.setAttribute('src' , 'adulto_homem.png')
                }else {
                    //Idoso
                    img.setAttribute('src' , 'idoso.png')
                }
            } else if (fsex[1].checked){
                gênero = 'Mulher'
                if (idade >=0 && idade < 10) {
                    //Criança
                    img.setAttribute('src' , 'bebe_menina.png')
                }else if (idade < 21){
                    //Jovem
                    img.setAttribute('src' , 'jovem_mulher.png')
                }else if ( idade < 50){
                    //Adulto
                    img.setAttribute('src' , 'adulto_mulher.png')
                }else {
                    //Idoso
                    img.setAttribute('src' , 'idosa.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
            res.appendChild(img)
        }
    }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //var hora= 22
        msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background ='#e2cd9f'
    } else if(hora >= 12 && hora <= 18){
         //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = 'brown'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = 'grey'
    }
}*/
