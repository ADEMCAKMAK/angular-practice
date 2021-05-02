import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {

  constructor(private logService: LoggingService, private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
        (status: string) => alert('status is updated')
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.logService.logsStatusChange(accountStatus);
  }
}
