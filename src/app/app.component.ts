import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test Server', content: 'Content of server'}];

    onServerAdded(serverData: {sname: string, scontent: string}) {
        this.serverElements.push({
          type: 'server',
          name: serverData.sname,
          content: serverData.scontent
        });
    }

    onBlueprintAdded(blueprintData: {sname: string, scontent: string}) {
        this.serverElements.push({
          type: 'blueprint',
          name: blueprintData.sname,
          content: blueprintData.scontent
        });
    }

}
