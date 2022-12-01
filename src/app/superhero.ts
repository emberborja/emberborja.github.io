export interface IServerSuperhero {
    id: number;
    name: string;
    biography: {
        "full-name": string;
    }
    image: {
        url: string;
    } 
}

export interface ISuperhero {
    id: number;
    superheroName: string;
    realName: string;
    image: {
        url: string;
    }
}
