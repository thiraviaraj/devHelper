import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState = false;
  searchText = "";
  // items = [];
  appConfig = [{ label: 'SETUP', key: 'setup', tag: "config email name color setup" }, { label: 'INIT', key: 'init', tag: "init clone" }, { label: 'STAGE & SNAPSHOT', key: 'stage', tag: "stage status add reset diff commit snapshot" }, { label: 'BRANCH & MERGE', key: 'branch', tag: "branch checkout merge log" }, { label: 'INSPECT & COMPARE', key: 'inspect', tag: "log diff show compare inspect" }, { label: 'TRACKING PATH CHANGES', key: 'tracking', tag: "track rm mv log" },{ label: 'SHARE & UPDATE', key: 'share', tag: "remote fetch merge push pull share update" },{ label: 'REWRITE HISTORY', key: 'rewrite', tag: "rebase reset rewrite" },{ label: 'TEMPORARY COMMITS', key: 'temp', tag: "stash temp" }];
}
