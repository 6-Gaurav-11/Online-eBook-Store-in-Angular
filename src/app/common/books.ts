export class Books {

    public bookId!: string;
    public name!: string;
    public author!: string;
    public publisher!: string;
    public genre!: string;
    public description!: string;
    public pages!: number;
    public publishYear!: number;
    public imageUrl!: string;
    public price!: number;

    constructor(
        bookId: string,
        name: string,
        author: string,
        publisher: string,
        genre: string,
        description: string,
        pages: number,
        publishYear: number,
        imageUrl: string,
        price: number
    ) { }
}
