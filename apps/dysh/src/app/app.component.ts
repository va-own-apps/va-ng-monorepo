import { Component, OnInit } from '@angular/core';
import { Logger } from '@va-own/logger';

@Component({
  selector: 'dysh-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'dysh';

  ngOnInit(): void {
      Logger.debug({
        tag: AppComponent.name,
        message: 'OnInit',
      })
  }
}
