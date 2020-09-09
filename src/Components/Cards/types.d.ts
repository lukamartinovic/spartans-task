export interface IUser {
    login: string;
    public_repos: number;
    created_at: Date;
}

export interface IUserCard {
    user: IUser;
}