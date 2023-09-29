import { createContext, useReducer } from "react";
import { TaskReducer } from "./reducer/taskReducer";
import { AppAction } from "./types/context.types";

// // Ravash 1.
// export const AppContext = createContext<any>({});

// Ravash 2.
// Flux
interface IAppContextState {
  tasks: any[];
}

const initialState: IAppContextState = {
  tasks: [],
};

type AppContextDispatch = { state: IAppContextState; dispatch: () => null };

export const AppContext = createContext<AppContextDispatch>({
  state: initialState,
  dispatch: () => null,
});

const combineReducer = (
  { tasks }: IAppContextState,
  action: AppAction<any>
) => ({
  task: TaskReducer(tasks, action),
});

interface IAppProvider extends React.PropsWithChildren {}

export const AppProvider: React.FC<IAppProvider> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer<any>(combineReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
