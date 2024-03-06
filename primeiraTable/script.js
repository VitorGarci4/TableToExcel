// interface IData{
//     nome:String
//     valor: Number
//     quantidade: Number
// }

function adicionarIntem(){ 
    var nome = document.getElementById("nome").value
    var valor   = document.getElementById("valor").value
    var quantidade = document.getElementById("quantidade").value
    
    //validar campos prenchidos
    if(!nome || !valor || !quantidade){
        alert("preencha todos os campos")
        return
    }
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    var newLine = tabela.insertRow(tabela.rows.length)
    
    var celulaNome = newLine.insertCell(0)
    var celulaValor = newLine.insertCell(1)
    var celulaQuantidade = newLine.insertCell(2)

    //atribuir as celulas os valores digitados.
    celulaNome.innerHTML = nome
    celulaValor.innerHTML = valor
    celulaQuantidade.innerHTML = quantidade

    //limpar campos
    document.getElementById("nome").value=""
    document.getElementById("valor").value=""
    document.getElementById("quantidade").value=""
}

function RemoverItem(){
    var nomeParaRemover = document.getElementById("nomeRemover").value
    if(!nomeParaRemover){
        alert("digite o nome existente na tabela")
        return
    }

    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    var linhas = tabela.getElementsByTagName("tr")

    //percorre sobre todas as linhas da tabela
    for(var i = 0; i < linhas.length; i++){
        //obtendo a primeira celula (td) da linha atual
        var celulaNome = linhas[i].getElementsByTagName("td")[0]

        //verificando se a celula nome existe e se o conteudo é igual a o que quer ser removido
        if(celulaNome && celulaNome.innerHTML === nomeParaRemover){
            tabela.deleteRow(i)
            return
        }
    }

}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    var nomeArquivo = "tabela_produtos.xlsx"
    var wb =    XLSX.utils.table_to_book(tabela, {sheet:"Tabela de produtos"})
    XLSX.writeFile(wb, nomeArquivo);

}
