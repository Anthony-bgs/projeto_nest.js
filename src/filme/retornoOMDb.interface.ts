export interface RetornoOmdb {
    Title: string,
    Year: string,
    Runtime: string,
    Genre: string,
    Type: string,
    Director: string,
    Actors: string,
    Plot: string,
    Poster: string,
    Ratings: Avaliacao[]
}

interface Avaliacao {
    Source: string
    Value: string
}