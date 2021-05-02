import {LoggingService} from './logging.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master',
            status: 'active'
        },
        {
            name: 'Test Acc',
            status: 'inactive'
        },
        {
            name: 'Hidden acc',
            status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService) {
    }

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logsStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logsStatusChange(status);
    }
}
