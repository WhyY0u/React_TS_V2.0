import type { User } from "@/domain/entities/user/User";

export interface UserRepository {
  getMyInfo(): Promise<User>;
  findUserByIIN(iin: string) : Promise<User | null>;
  register(user: User): Promise<void>;
}