import { ConfigActions, EConfigActions } from "../actions/config.actions";
import { IConfig } from "../../models/config.interface";

export interface IConfigState {
  config: IConfig;
}

export const intialConfigState: IConfigState = {
  config: null
};

export const configReducers = (
  state = intialConfigState,
  action: ConfigActions
): IConfigState => {
  switch (action.type) {
    case EConfigActions.GetConfigSuccess: {
      return {
        ...state,
        config: action.paylaod
      };
    }
    default:
      return state;
  }
};
