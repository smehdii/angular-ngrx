import { ConfigActions, EConfigActions } from "../actions/config.actions";
import { intialConfigState, IConfigState } from "../state/config.state";

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
