import { Profile } from "./Profile";
import { Post } from "./Posts";
export declare class User {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    authStrategy: string;
    profile: Profile;
    posts: Post[];
}
