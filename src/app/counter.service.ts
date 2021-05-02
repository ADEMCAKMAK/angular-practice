export class CounterService {
    activeToInactiveNumber = 0;
    inactivetoActiveNumber = 0;

    incActiveToInactiveNumber() {
        this.activeToInactiveNumber++;
        console.log('number of active to inactive counter: ' + this.activeToInactiveNumber);
    }

    incInactivetoActiveNumber() {
        this.inactivetoActiveNumber++;
        console.log('number of inactive to active counter: ' + this.inactivetoActiveNumber);
    }
}
