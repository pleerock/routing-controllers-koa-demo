import { Category } from "./Category";

export class Post {

    public createDate: Date = new Date();

    constructor(
        public id: number,
        public title: string,
        public text: string,
        public categories: Category[]
    ) { }

}