import { Sessao } from "./sessao";
import { Usuario } from "./usuario";

export class Ingresso{
    /*
	    private Long id_ingresso;
	    private LocalDate data_compra;
	    private String valor;
	    private Sessao sessao;
    */
    id_ingresso!: Number;
    data_compra!: Date;
    valor!: Number;
    sessao!: Sessao;
    usuario!:Usuario;
}