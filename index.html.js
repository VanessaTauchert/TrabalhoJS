window.onload = carregar();

function carregar(){
var input = document.getElementById("btnLimpar");
input.addEventListener("click", evt=>{clearBox('info')})
}

function clearBox(elementID) {
var div = document.getElementById(elementID);
div.innerHTML = "";
}


function rasparPs4(documento){
    var divsPs4 = documento.querySelectorAll(".imagem-produto , .info-produto");
    var div = document.querySelector(".info");
    var nova = document.createElement("div");
    divsPs4.forEach(df => {
        div.appendChild(df);
    });
}

function rasparPv(documento){
    var divsPv = documento.querySelectorAll(".card-image, .offer-title, .offer-price ");
    var div = document.querySelector(".info");
    var nova = document.createElement("div");
    divsPv.forEach(df => {
        div.appendChild(df);
    });
}

//description-portal
//description-noticia
function rasparDesemp(documento){
    var divsDesemp = documento.querySelectorAll(".indicador-title,.indicador-desc, .indicador-value, .indicador-date");
    var div = document.querySelector(".info");
    var nova = document.createElement("div");
    divsDesemp.forEach(df => {
        div.appendChild(df);
    });
}

function mandarReq(site,rasp){
    //O retorno do fetch eh uma promise
    //O retorno do then/catch tb eh uma promise
    fetch(site)
             .then(resp => resp.text())
             .then(str => {
                 var domp = new DOMParser();
                 var documento = domp.parseFromString(str,"text/html");
                 rasp(documento);
             })
             .catch(e => document.write(e));
}

function principal(){
   
    document.querySelector("#btnDesemp")
        .addEventListener("click", function(){
            mandarReq("https://www.ibge.gov.br/indicadores#desemprego",rasparDesemp);
    
        });


        document.querySelector("#btnPs4")
        .addEventListener("click", function(){
            mandarReq("https://www.shopb.com.br/playstation/playstation-4/jogos",rasparPs4);
    
        });

        document.querySelector("#btnPv")
        .addEventListener("click", function(){
            mandarReq("https://www.ofertaesperta.com/",rasparPv);
    
        });
}


window.onload = principal;
