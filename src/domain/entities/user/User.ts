export const UserRoles = {
  Owner: "owner",
  Administrator: "administrator",
  User: "user",
} as const;

export type UserRole = typeof UserRoles[keyof typeof UserRoles];

export type User = {
  readonly fullname: string;
  readonly iin: string;
  readonly groupsId: number[];
  readonly role: UserRole;
};
