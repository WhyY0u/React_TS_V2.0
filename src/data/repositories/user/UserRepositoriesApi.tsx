import { UserRoles, type User } from "@/domain/entities/user/User";
import type { UserRepository } from "@/domain/repositories/user/UserRepository";

export class UserApiRepository implements UserRepository {

 private fakeUser: User = {
    fullname: "Иванов Иван",
    iin: "990101123456",
    groupsId: [1, 2],
    role: UserRoles.User
  };
  async getMyInfo(): Promise<User> {
    return this.fakeUser;
  }
   async register(user: User): Promise<void> {
    console.log("Фейковая регистрация:", user);
  }

   async findUserByIIN(iin: string): Promise<User | null> {
    if (iin === this.fakeUser.iin) return this.fakeUser;
    return null;
  }
}