import { FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';    
import { Observable } from 'rxjs';
import * as fromReducer from '../reducers/article.reducer';
import * as loginReducer from '../reducers/login.reducer';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from '../reducers/app.states';
import { Article } from '../models/article';

@Component({
	selector: 'app-article',
	templateUrl: 'article.component.html'
})
export class ArticleComponent implements OnInit{
	articles$: Observable<Article[]>;
	message$: Observable<any>;
	task= '';
isPermition:boolean=false;
	constructor(
		   private formBuilder:FormBuilder,
		   private store: Store<ArticleState>) {

		this.articles$ = store.select(fromReducer.getArticles);
		this.message$ = store.select(fromReducer.getMessage);
		
		
	}
	ngOnInit() {
 this.store.select(loginReducer.GetIsLogin).subscribe((res?:boolean)=>
        {console.log(res);
			
				this.isPermition=res||false;
			
		}

        );
	  }
	articleForm = this.formBuilder.group({
		id: ['', Validators.required ],
		title: '',
		category: ''
	});
	get id() {
		return this.articleForm.get('id');
	}
	onFormSubmit() {
		if(this.articleForm.valid) {
		   let article = this.articleForm.value;
		   this.createArticle(article);
		   localStorage.setItem('dataSource', JSON.stringify(article)); 
		   this.articleForm.reset();
		}
	 }
	createArticleView(){
		this.task = 'create';
		this.store.dispatch(fromActions.ResetAction());
	}
	getArticleByIdView(){
		this.task = 'get';
		this.store.dispatch(fromActions.ResetAction());
	}
	loadAllArticles(){
		
		this.task = 'all';
		let x=localStorage.getItem("dataSource");
		var existingEntries = JSON.parse(localStorage.getItem("dataSource") ||"");
		this.createArticle(existingEntries);
		this.store.dispatch(fromActions.ShowAllAction());
	}
	createArticle(article: Article){
		this.store.dispatch(fromActions.CreateAction({payload: article}));
	}
	searchArticleById(articleId: string){
		this.store.dispatch(fromActions.GetByIdAction({payload: articleId}));
		console.log('dar');
	}
}	