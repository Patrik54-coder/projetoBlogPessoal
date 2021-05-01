import { tema } from "./tema";
import { user } from "./user";


export class postagem {
    public id: number
	public titulo: string
	public texto: string
    public data : Date
    public Usuario : user
    public tema: tema
}