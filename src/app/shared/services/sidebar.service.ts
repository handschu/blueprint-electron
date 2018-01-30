import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const contextStartWidth = 28;
const contextToggleWidth = 390;
const navigationStartWidth = 28;
const navigationToggleWidth = 210;

@Injectable()
export class SidebarService {
    width: {
        context: number,
        navigation: number,
        sidebarSum: number
    };

    widthSubject: BehaviorSubject<{ context: number, navigation: number, sidebarSum: number }>;

    constructor() {
        this.width = {
            navigation: navigationStartWidth,
            context: contextStartWidth,
            sidebarSum: navigationStartWidth + contextStartWidth
        };
        this.widthSubject = new BehaviorSubject(this.width);
    }

    toggleNavigation() {
        if (this.width.navigation < navigationToggleWidth) {
            this.width.navigation += navigationToggleWidth;
            this.width.sidebarSum += navigationToggleWidth;
        } else {
            this.width.navigation -= navigationToggleWidth;
            this.width.sidebarSum -= navigationToggleWidth;
        }
        this.widthSubject.next(this.width);
    }

    toggleContext() {
        if (this.width.context < contextToggleWidth) {
            this.width.context += contextToggleWidth;
            this.width.sidebarSum += contextToggleWidth;
        } else {
            this.width.context -= contextToggleWidth;
            this.width.sidebarSum -= contextToggleWidth;
        }
        this.widthSubject.next(this.width);
    }
}
