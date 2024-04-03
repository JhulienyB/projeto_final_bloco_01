import readlinesync = require('readline-sync');

export function main() {

    let opcao: number;

    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                 LIVRARIA GENERATION                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar todos os Livros               ");
        console.log("            2 - Listar Livro pelo ID                 ");
        console.log("            3 - Cadastrar Livro                      ");
        console.log("            4 - Atualizar Livro                      ");
        console.log("            5 - Deletar Livro                        ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nVolte Sempre!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nListar todos os Livros\n\n");
                keyPress();
                break;
            case 2:
                console.log("\n\nListar Livro pelo ID\n\n");
                    keyPress();
                break;
            case 3:
                console.log("\n\nCadastrar Livro\n\n");
                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar Livro\n\n");
                keyPress();
                break;
            case 5:
                console.log("\n\nDeletar Livro\n\n");
                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");
                keyPress();
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jhulieny B.");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/JhulienyB/projeto_final_bloco_01");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
