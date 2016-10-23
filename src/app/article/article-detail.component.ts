import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from "./article.service";
import { Article }  from './article.model';

@Component({
  selector: 'pb-article-detail',
  templateUrl: 'article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ArticleService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log(`Got id: ${id}`);
      console.log(this.service);
      this.service.getArticle(id).then(article => this.article = article);
      console.log(this.article);
    });
  }

  gotoHeroes() {
    let articleId = this.article ? this.article : null;
    this.router.navigate(['/articles', { id: articleId } ]);
  }
}
