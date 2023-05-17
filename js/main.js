//Criando controle
const cep = document.getElementById("cep")
const endereco = document.getElementById("logradouro")
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("localidade")
const estado = document.getElementById("uf")

function procCep(){
    //Retira o '-' que usuario coloca no cep
    let search = cep.value.replace("-", "")

    //Parte responsavel por AJAX
    const xhttp = new XMLHttpRequest()

    //Função que preenche os formularios
    function preencheFor(json){
        endereco.value = json.logradouro
        bairro.value = json.bairro 
        cidade.value = json.localidade 
        estado.value = json.uf
    }

    //Quando a resposta vir
    xhttp.onreadystatechange = function(){
        //Verificar se deu certo
        if(xhttp.readyState == 4 && xhttp.status == 200){
            preencheFor(JSON.parse(this.responseText))
        }    
    }

    //Mandar para o endereço
    //teste
    //xhttp.open("GET", `https://viacep.com.br/ws/${search}/json/`)
    xhttp.open("GET", "../../apiCp/controllers/EnderecoController")
    xhttp.send()
}

cep.addEventListener('mouseout', procCep)
