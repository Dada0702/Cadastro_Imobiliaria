const imoveis = []
let opcao = ""

do { opcao = prompt("Bem vindo , escolha uma opçâo \n" +
"total de imoveis !\n" + imoveis.length +
"\n\n Escolha uma opção: \n1. Cadastrar novo imovel \n2.Lista de imoveis \n3.Sair")

switch (opcao) {
    case "1":
        const imovel = {}

        imovel.propietario = prompt("Informe o nome do proprietario do imóvel:")
        imovel.quartos = prompt("Quantos quartos o imóvel possui ?")
        imovel.banheiro = prompt("Quantos banheiros possui o imóvel?")
        imovel.garagem = prompt("O imóvel possui garagem ?  (Sim/Não)")

        const confirmacao = confirm(
        "Salvar este imóvel ?\n"+
        "\nProprietario: " + imovel.propietario +
        "\nQuartos: " + imovel.quartos + 
        "\nBanheiros :" + imovel.banheiro +
        "\nPossui garagem ?" + imovel.garagem
        )

        if(confirmacao){
            imoveis.push(imovel)
        }
        break

    case "2":
        for(let i = 0; i < imoveis.length; i++) {
            alert(
                "Imovel "+ (i + 1) +
                "\nProprietario: " + imoveis[i].propietario + 
                "\nQaurtos: " + imoveis[i].quartos + 
                "\nBanheiros: " + imoveis[i].banheiro +
                "\nPossui garagem: " + imoveis[i].garagem
            )
        }
        break
        
    case "3":
        alert("Encerrando ...")
        break
    default:
        alert("Opção Invalida!")    
}
} while(opcao !== "3")