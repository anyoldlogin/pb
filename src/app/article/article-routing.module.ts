import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleComponent }    from './article.component';
import { ArticleListComponent }    from './article-list.component';
import { ArticleDetailComponent }  from './article-detail.component';

import { ArticleService } from './article.service';

@NgModule({
  providers: [
      ArticleService
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: ArticleListComponent },
      { path: 'article/:id', component: ArticleDetailComponent}
    //   {
    //     path: '',
    //     redirectTo: '/articles',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: '',
    //     component: ArticleListComponent,
    //     children: [
    //       {
    //         path: ':id',
    //         component: ArticleDetailComponent
    //       }
    //     ]
    //   }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }
