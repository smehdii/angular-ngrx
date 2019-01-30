import { Action } from "@ngrx/store";
import { IConfig } from "../../models/config.interface";

export enum EConfigAcions {
  GetConfig = "[Config] Get Config",
  GetConfigSuccess = "[Config] Get Config Success"
}

export class GetConfig implements Action {
  public readonly type = EConfigAcions.GetConfig;
  constructor(public paylaod: number) {}
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigAcions.GetConfigSuccess;
  constructor(public paylaod: IConfig) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
