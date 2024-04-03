import readlinesync = require('readline-sync');
import { LivroController } from './controller/LivroController';
import { LivroDidatico } from './model/LivroDidatico';
import { LivroFiccao } from './model/LivroFiccao';

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, materia, genero: string;
    let tipoLivro = ['Livro Didatico', 'Livro de Ficcao'];

    const livroController: LivroController = new LivroController();

    livroController.cadastrar(new LivroDidatico (livroController.gerarId(), "Fundamentos de Matemática Vol.1", 1, 45.00, "Matemática"));

    livroController.cadastrar(new LivroFiccao (livroController.gerarId(), "Heróis do Tempo", 2, 60.00, "Aventura"));

    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                 LIVRARIA GENERATION                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar Todos os Livros               ");
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
                livroController.listarTodas();
                
                keyPress();
                break;
            case 2:
                console.log("\n\nListar Livro pelo ID\n\n");
                id = readlinesync.questionInt("Digite o ID do Livro: ");
                livroController.procurarPorId(id);
                keyPress();
                break;
            case 3:
                console.log("\n\nCadastrar Livro\n\n");
                nome = readlinesync.question("Digite o Nome do Livro: ");
                console.log("Informe se é um Livro Didático(1) ou de Ficção(2): ")
                tipo = readlinesync.keyInSelect(tipoLivro, "", { cancel: false }) + 1;
                preco = readlinesync.questionFloat("Digite o Preco: ");

                switch (tipo) {
                    case 1:
                        materia = readlinesync.question("Digite a Materia do Livro: ");
                        livroController.cadastrar(new LivroDidatico(livroController.gerarId(), nome, tipo, preco, materia));
                        break;
                    case 2:
                        genero = readlinesync.question("Digite o Genero do Livro: ");
                        livroController.cadastrar(new LivroFiccao(livroController.gerarId(), nome, tipo, preco, genero));
                        break;
                }
                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar Livro\n\n");
                id = readlinesync.questionInt("Digite o ID do Livro: ");    
                let livro = livroController.buscarNoArray(id);

                if (livro !== null){
                    nome = readlinesync.question("Digite o Nome do Livro: ");
                    tipo = livro.tipo;
                    preco = readlinesync.questionFloat("Digite o preco: ");
                    switch (tipo) {
                        case 1:
                            materia = readlinesync.question("Digite a Materia do Livro: ");
                            livroController.atualizar(new LivroDidatico(id, nome, tipo, preco, materia));
                            break;
                        case 2:
                            genero = readlinesync.question("Digite o Genero do Livro: ");
                            livroController.atualizar(new LivroFiccao(id, nome, tipo, preco, genero));
                            break;
                    }

                }else
                    console.log("Produto não Encontrado!")
                keyPress();
                break;
            case 5:
                console.log("\n\nDeletar Livro\n\n");
                id = readlinesync.questionInt("Digite o ID do Livro: ");
                livroController.deletar(id);
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
