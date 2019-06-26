import {Injectable} from '@angular/core';

@Injectable()
export class ReviewService {

    private id: number;
    private static nextId: number = 1;

    constructor() {
        this.id = ReviewService.nextId++;
    }

    log(message: string): void {
        console.log(`Logger ${this.id} message: ${message}`);
    }
}
