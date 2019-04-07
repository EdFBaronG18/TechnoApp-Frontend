
export class User{
    public id           : number;
    public name         : String;
    public username     : String;
}

export class Comment{
    public idComment    : number;
    public content      : String;
    public artist       : String;
    public userComment  : User;
}

export class Artist{
    public idArtist     : number;
    public artistName   : String;
    public urlImage     : String;
}

export class Category{
    public idCatedory   : number;
    public name         : String;
    public list         : Array<Artist>;
}
