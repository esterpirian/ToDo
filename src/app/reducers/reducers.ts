import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import * as fromReducer from './article.reducer';
import * as fromLoginReducer from './login.reducer';
import * as fromWeatherReducer from './weather.reducer';
export const reducers: ActionReducerMap<AppState> = {
  articleState: fromReducer.articleReducer,
  loginState:fromLoginReducer.loginReducer,
  weatherState:fromWeatherReducer.weatherReducer
};
 