import { Livro } from "../model/Livro";

export interface LivroRepository{

    listarTodas(): void;
    procurarPorId(id: number): void;
    cadastrar(produto: Livro): void;
    atualizar(produto: Livro): void;
    deletar(id: number): void;
    
}
