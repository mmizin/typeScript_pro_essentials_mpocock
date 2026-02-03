function printAll(strs: string | string[] | null): void {
    if (typeof strs === 'object' && strs !== null) {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
        console.log('Nothing to print');
    }
}

printAll(['a', 'b', 'c']);

printAll(null);

printAll('Hello');