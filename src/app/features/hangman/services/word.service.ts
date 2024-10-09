import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable()
export class WordService {
    private readonly wordsUrl = 'assets/words.json';
    private http = inject(HttpClient);

    private words$ = this.http.get<string[]>(this.wordsUrl).pipe(
        map((words) => words.map((w) => w.toUpperCase())),
        shareReplay(1)
    );

    constructor() {}

    getWordsLengthsSet(): Observable<number[]> {
        return this.words$.pipe(
            map((words) => words.map((w) => w.length)),
            map((lengths) => [...new Set(lengths)] as number[]),
            map((lengths) => lengths.sort((a, b) => a - b))
        );
    }

    getWord(length: number): Observable<string> {
        return this.words$.pipe(
            map((words) => words.filter((w) => w.length === length)),
            map((words) => words[Math.floor(Math.random() * words.length)])
        );
    }
}
