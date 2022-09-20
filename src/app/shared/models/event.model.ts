export interface EventResponse {
    response: EventDetail[];
}

export interface EventDetail {
    title:          string;
    competition:    string;
    matchviewUrl:   string;
    competitionUrl: string;
    thumbnail:      string;
    date:           string;
    videos:         Video[];
}

export interface Video {
    title: string;
    embed: string;
}