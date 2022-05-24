import { Article,IsLogin,Login } from '../models/article';
import { cityReq,RootObjCity } from '../interfaces/cityWeather';
import { coordReq,RootObject,Header,Table } from '../interfaces/coordWeather';
export interface AppState {
	articleState: ArticleState,
	loginState:LoginState,
	weatherState:WeatherState
	
}

export interface ArticleState {
	articles: Article[];
	message: any;
	
}

export interface LoginState {
	login?:Login[];
	isLogin?:boolean;
}
export interface IsLoginState {

	isLogin:IsLogin;
}
export interface WeatherState {
	cityReq?:cityReq;
	coordReq?:coordReq;
	city?:RootObjCity;
	coord?:RootObject;
	url?:string;
	data?:Table;
	header?:Header;
}