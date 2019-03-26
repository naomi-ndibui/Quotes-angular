export class Quote {
    public showAuthor:boolean;
    constructor(public id:number, public name:string,public author:string,public submitted:string){
        this.showAuthor=false
    }
}
