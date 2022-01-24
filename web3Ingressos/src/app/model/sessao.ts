import { Filme } from "./filme";
import { Sala } from "./sala";

export class Sessao{
    /*
	private Long id_sessao;
	private LocalTime inicio;
	private LocalTime fim;
	private Filme filme;
	private Sala sala;
	private String valor_sessao;
    */
    id_sessao!:Number;
    inicio!:Date;
    fim!:Date;
    filme!: Filme;
    Sala!: Sala;
    valor_sessao!: Number;

}