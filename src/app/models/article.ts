export interface Article {
	id: number;
	title: string;
	category: string;
}
export interface Login {
	user?: string;
	password?: string;
    description?:string;
}
export interface IsLogin {
	user: boolean;
	
}