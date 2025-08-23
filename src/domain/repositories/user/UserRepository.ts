import type { User, UserGroups } from "@/domain/entities/user/User";

export interface UserRepository {
  getMe(): Promise<User>;
  getAllGroups() : Promise<UserGroups[]>
  findUserByID(id: string) : Promise<User | null>;
  register(user: User): Promise<void>;
}