import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Article } from './article.model';
import { Observable }     from 'rxjs/Observable';

let ARTICLES = [
  new Article(1, 'First Article', 'This is the first article.'),
  new Article(2, 'Second Article', 'This is the second article.'),
  new Article(3, 'Third Article', 'This is the third article.'),
  new Article(4, 'Fourth Article', 'This is the fourth article.'),
  new Article(5, 'Fift Article', 'This is the fift article.')
];

let articlesPromise = Promise.resolve(ARTICLES);

@Injectable()
export class ArticleService implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.articles = af.database.list('/articles');
    this.articles ? console.log(JSON.stringify(this.articles)) : console.log('articles is null.');
   };

  getArticles() {
    return articlesPromise;
  }

  getArticle(id: number | string) {
    console.log(`Service: Got id: ${id}`);
    return articlesPromise
       .then(articles => articles.find(article => article.id == id));
  }


  ngOnInit() { }
}
