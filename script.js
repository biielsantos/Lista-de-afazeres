let texto = document.getElementById("nomelista");
let quadradao = document.getElementsByClassName("quadradobaixo")[0];
let num = 1
function criar() {
  let textostr = String(texto.value);
  if (texto.value != 0) {
    let iditem = 'iditem'
    let div = document.createElement("div");
    div.className = "item";
    div.id = iditem + num
    div.innerHTML = `${textostr}`;
    quadradao.appendChild(div);

    let paragrafo = document.createElement("hr");
    quadradao.appendChild(paragrafo);
    let classtag = 'hr'
    paragrafo.className = classtag + num;

    const btnlixo = document.createElement("button");
    btnlixo.className = "btnlixo";
    div.appendChild(btnlixo);
    
    /* mudei essas linha aqui d baixo */

    btnlixo.id = num;
    btnlixo.addEventListener("click", excluir);
    
    const imagem = document.createElement("img");
    imagem.className = "icontrash";
    imagem.src = "img/lixo-icon.png";
    btnlixo.appendChild(imagem);

    imagem.id = num;

    document.getElementById("nomelista").focus();

    num++

  } else {
    window.alert("Por favor digite alguma coisa");
    document.getElementById("nomelista").focus();
  }
  function excluir(event) {
    let iditem = 'iditem'
    let classtag = 'hr'
    const id = event.target.id;

    // console.log(`${iditem}${id}`)
    // console.log(`${classtag}${id}`)

    document.getElementById(iditem + id).remove()
    document.getElementsByClassName(classtag + id)[0].remove()
  }
}
