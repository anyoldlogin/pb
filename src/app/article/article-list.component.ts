
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from './article.service';
import { Article } from './article.model';

@Component({
  selector: 'selector',
  templateUrl: './article-list.component.html',
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  private selectedId: number;

  constructor(
    private service: ArticleService,
    private route: ActivatedRoute,
      private router: Router
  ) {}

  onSelect(article: Article) {
    this.router.navigate(['/article', article.id]);
  }

  isSelected(article: Article) {
    return article.id == this.selectedId;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.selectedId = params['id'];
        this.service.getArticles()
          .then(articles => this.articles = articles);
      });
  }
}
