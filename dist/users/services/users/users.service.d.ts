import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, CreateUserPostParams, UpdateUserParams } from 'src/utils/types';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { Profile } from 'src/typeorm/entities/Profile';
import { Post } from 'src/typeorm/entities/Posts';
export declare class UsersService {
    private userRepository;
    private profileRepository;
    private postRepository;
    constructor(userRepository: Repository<User>, profileRepository: Repository<Profile>, postRepository: Repository<Post>);
    findUsers(): Promise<User[]>;
    createUser(userDetails: CreateUserParams): Promise<User>;
    updateUser(id: number, updateUserDetails: UpdateUserParams): void;
    deleteUser(id: number): void;
    createUserProfile(id: number, createUserProfileDetails: CreateUserProfileDto): Promise<User>;
    createUserPost(id: number, createUserPostDetails: CreateUserPostParams): Promise<Post>;
}
