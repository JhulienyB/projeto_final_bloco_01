import { Livro } from "./Livro";

export class LivroDidatico extends Livro{
    
    private _materia: string;

	constructor(id: number, nome: string, tipo: number, preco: number, materia: string) {
        super(id, nome, tipo, preco);
		this._materia = materia;
	}

    /**
     * Getter materia
     * @return {string}
     */
	public get materia(): string {
		return this._materia;
	}
    public set materia(value: string) {
		this._materia = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Matéria: ${this._materia}`);
    }
}
