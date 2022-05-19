import { Component, OnInit } from '@angular/core';

import { articles } from '../articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles = articles;
  constructor() { }

  ngOnInit(): void {
  }

}
