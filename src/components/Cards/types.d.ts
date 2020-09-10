export interface IUser {
    login: string;
    avatar_url: string;
}

export interface IUserCard {
    user: IUser;
    login: string;
    avatar_url: string;
    name: string;
    public_repos: number;
    followers: number;
    following: number;
}

