export class Quote {
    public showAuthor: boolean;
    constructor(
        public id: number,
        public name: string,
        public author: string,
        public submitted: string,
        public completeDate: Date) {
        this.showAuthor = false;
    }
}

