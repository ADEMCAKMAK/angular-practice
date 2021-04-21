import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated, ShadowDom
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test Server', content: 'Content of server'}];

    onServerAdded(serverData: {soname: string, content: string}) {
        this.serverElements.push({
          type: 'server',
          name: serverData.soname,
          content: serverData.content
        });
    }

    onBlueprintAdded(blueprintData: {soname: string, content: string}) {
        this.serverElements.push({
          type: 'blueprint',
          name: blueprintData.soname,
          content: blueprintData.content
        });
    }

}
