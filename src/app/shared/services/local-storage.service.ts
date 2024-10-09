import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string): any {
        const value = localStorage.getItem(key);

        if (!value) {
            return null;
        }
        return JSON.parse(value);
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}
