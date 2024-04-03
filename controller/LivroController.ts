import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController implements LivroRepository{
    
    private listaLivros: Array<Livro> = new Array<Livro>();
    public id: number = 0;

    listarTodas(): void {
        for (let livro of this.listaLivros){
             livro.visualizar();
        }
     }
    
    procurarPorId(id: number): void {
        let buscalivro = this.buscarNoArray(id);

        if(buscalivro !== null)
            buscalivro.visualizar()
        else
            console.log("\nLivro não foi Encontrado!")
    }

    cadastrar(livro: Livro): void {
        this.listaLivros.push(livro);
        console.log("O Livro foi Adicionado!")
    }

    atualizar(livro: Livro): void {
        let buscaLivro = this.buscarNoArray(livro.id);

        if(buscaLivro !== null){
            this.listaLivros[this.listaLivros.indexOf(buscaLivro)] = livro;
            console.log(`O Livro com ID ${livro.id} foi Atualizado com êxito!`)
        }else
            console.log("\nLivro não foi Encontrado!")
    }

    deletar(id: number): void {
        let buscaLivro = this.buscarNoArray(id);

        if(buscaLivro !== null){
            this.listaLivros.splice(this.listaLivros.indexOf(buscaLivro), 1)
            console.log(`O Livro com ID ${id} foi Excluído com êxito!`)
        }else
            console.log("\nLivro não foi Encontrado!")
    }

    // Métodos Auxiliares
    public gerarId(): number{
        return ++ this.id
    }
    
    public buscarNoArray(id: number): Livro | null{
        for (let livro of this.listaLivros){
            if (livro.id === id)
                return livro;
       }

       return null;
    }
}