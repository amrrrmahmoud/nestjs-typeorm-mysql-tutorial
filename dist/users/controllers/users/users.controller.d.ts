import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../../../typeorm/entities/User").User[]>;
    createUser(createUserDto: CreateUserDto): void;
    updateUserByID(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUserByID(id: number): Promise<void>;
    createUserProfile(id: number, createUserProfileDto: CreateUserProfileDto): Promise<import("../../../typeorm/entities/User").User>;
    createUserPost(id: number, createUserPostDto: CreateUserPostDto): Promise<import("../../../typeorm/entities/Posts").Post>;
}
