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

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
    }
}
