export enum UserEnum {

  ADMIN = "ADMIN",
  REGULAR = "REGULAR",
}

export namespace UserEnum {

  export function valueOf(user: string): UserEnum {
    return user ? UserEnum[user.toUpperCase()] : UserEnum.REGULAR;
  }
}
