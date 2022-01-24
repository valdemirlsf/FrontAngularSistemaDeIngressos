import { Sessao } from "./sessao";

export class Ingresso{
    /*
	    private Long id_ingresso;
	    private LocalDate data_compra;
	    private String valor;
	    private Sessao sessao;
    */
    id_ingresso!: Number;
    dataCompra!: Date;
    valor!: Number;
    sessao!: Sessao;
}