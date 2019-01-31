import { ConfigActions, EConfigAcions } from "../actions/config.action";
import { intialConfigState, IConfigState } from "../state/config.state";

export const configReducers = (
  state = intialConfigState,
  action: ConfigActions
): IConfigState => {
  switch (action.type) {
    case EConfigAcions.GetConfigSuccess: {
      return {
        ...state,
        config: action.paylaod
      };
    }
    default:
      return state;
  }
};
