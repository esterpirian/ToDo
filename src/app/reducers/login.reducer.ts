import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/login.actions';
import { LoginState } from './app.states';

export const initialState: LoginState = {login:[],isLogin:false};

// Creating reducer
const _loginReducer = createReducer(
  initialState,
  
  on(fromActions.GetByIdSuccessAction, (state, {payload}) => ({login: payload})),
  on(fromActions.GetByIdErrorAction, (state) => ({ login: [],isLogin:false})),
  on(fromActions.SetIsLogin, (state, {payload}) => ({isLogin:payload}))
);

export function loginReducer(state: any, action: Action) {
  return _loginReducer(state, action);
}

// Creating selectors
export const getLoginState = createFeatureSelector<LoginState>('loginState');

export const getLogin = createSelector(
    getLoginState, 
    (state: LoginState) => state.login 
);
export const GetIsLogin = createSelector(
    getLoginState, 
    (state: LoginState) => state.isLogin
  );
