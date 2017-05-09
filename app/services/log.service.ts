import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
    log(msg: string): void {
        console.log(msg);
    }

    logError(msg: string): void {
        console.error(msg);
    }
    constructor()
    {
        console.log("LogService Contructor");
    }
}