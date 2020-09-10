export interface IRepoContainer {
    repos: []
}

export interface IRepo {
    name: string;
    private: boolean;
    watchers: number;
    updated_at: Date;
    url: string;
    description: string;
    html_url: string;
}