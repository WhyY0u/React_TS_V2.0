export const UserRoles = {
  Owner: "Владелец",
  Administrator: "Менеджер",
  User: "Пользватель",
} as const;

export const UserGroups = {
    WWIIVeteran: "Ветеран ВОВ",
    EqualToWWIVeteran: "Ветеран, приравнённый к ветерану ВОВ",
    CombatVeteran: "Ветеран боевых действий",
    DisabledGroup1Or2: "Инвалид I или II группы",
    FamilyWithDisabledChild: "Семья с ребёнком-инвалидом",
    ChronicIllness: "Гражданин с тяжёлым хроническим заболеванием",
    Pensioner: "Пенсионер по возрасту",
    OrphanUnder29: "Ребёнок-сирота (до 29 лет)",
    Kandas: "Кандас",
    LostHousingDisaster: "Лишённый жилья вследствие бедствия",
    LargeFamily: "Многодетная семья",
    FamilyOfDeceased: "Семья погибшего при исполнении долга",
    SingleParentFamily: "Неполная семья",
} as const;

export type UserRole = typeof UserRoles[keyof typeof UserRoles];
export type UserGroups = typeof UserGroups[keyof typeof UserGroups];

export type User = {
  readonly id: string;
  readonly fullname: string;
  readonly groupsId: UserGroups[];
  readonly role: UserRole;
};
