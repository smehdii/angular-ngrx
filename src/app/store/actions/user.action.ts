import { Action } from "@ngrx/store";
import { IUser } from "../../models/user.interface";

export enum EUserAcions {
  GetUsers = "[User] Get Users",
  GetUsersSuccess = "[User] Get Users",
  GetUser = "[User] Get User",
  GetUserSuccess = "[User] Get Users"
}

export class GetUsers implements Action {
  public readonly type = EUserAcions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserAcions.GetUserSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserAcions.GetUser;
  constructor(public paylaod: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserAcions.GetUserSuccess;
  constructor(public paylaod: IUser) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
