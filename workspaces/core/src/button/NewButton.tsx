import React, {
  MutableRefObject,
  createContext,
  useContext,
  useReducer,
  Dispatch,
  useEffect,
} from "react";
import classNames from "classnames";

// type DomRef = MutableRefObject<HTMLElement | null>;

interface StateDefinition {
  elements: { id: string }[];
}

enum ActionTypes {
  RegisterElement,
  UnregisterElement,
}

type Actions =
  | {
      type: ActionTypes.RegisterElement;
      id: string;
      // domRef: DomRef;
    }
  | { type: ActionTypes.UnregisterElement; id: string };

function reducer(state: StateDefinition, action: Actions): StateDefinition {
  if (action.type === ActionTypes.RegisterElement) {
    console.log("ActionTypes.RegisterElement: ", state, action);
    const elements = state.elements.concat({
      id: action.id,
      // domRef: action.domRef,
    });
    return { ...state, elements };
  }
  if (action.type === ActionTypes.UnregisterElement) {
    const elements = state.elements.filter((option) => option.id !== action.id);
    return { ...state, elements };
  }

  throw new Error("ButtonContext reducer error. Unknown action.type");
}

const ButtonContext = createContext<
  [StateDefinition, Dispatch<Actions>] | null
>(null);
ButtonContext.displayName = "ButtonContext";

function useButtonContext(component: string) {
  let context = useContext(ButtonContext);
  if (context === null) {
    let err = new Error(
      `<${component} /> is missing a parent <Button /> component.`
    );
    if (Error.captureStackTrace) Error.captureStackTrace(err, useButtonContext);
    throw err;
  }
  return context;
}

// export const ButtonProvider = ({ children }: { children: React.ReactNode }) => {
//   const providerValue = useReducer(reducer, {
//     elements: [],
//   });

//   return (
//     <ButtonContext.Provider value={providerValue}>
//       {children}
//     </ButtonContext.Provider>
//   );
// };

export const ButtonProvider = (props) => {
  const providerValue = useReducer(reducer, {
    elements: [],
  });

  return (
    <ButtonContext.Provider value={providerValue}>
      {props.children}
    </ButtonContext.Provider>
  );
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "md" | "xl";
  variant: "ghost" | "fill";
}

const ButtonRoot = React.forwardRef<HTMLButtonElement, Props>(
  ({ size, variant, disabled, className, ...props }, ref) => {
    return (
      <ButtonProvider>
        <button
          className={classNames(
            "flex flex-row gap-3 items-center rounded-full border-2",
            {
              "text-white":
                variant === "fill",
            },
            {
              "text-black bg-transparent":
                variant === "ghost",
            },
            {
              "TODO":
                disabled,
            },
            "TODO", // default paddings
            {
              "TODO": size === "xl",
            },
            {
              "TODO": size === "md",
            },
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </ButtonProvider>
    );
  }
);

const Icon = ({ children }) => {
  const [state, dispatch] = useButtonContext("Button.Icon");

  useEffect(() => {
    dispatch({
      type: ActionTypes.RegisterElement,
      id: "icon",
      // domRef: null,
    });
  }, []);

  console.log("Icon: ", state.elements, dispatch);

  return (
    <span
      onClick={() => {
        console.log("Icon Icon click");
        dispatch({
          type: ActionTypes.RegisterElement,
          id: "icon",
          // domRef: null,
        });
      }}
      className="pr-2"
    >
      {children}
    </span>
  );
};

const Text = ({ children }) => {
  const [state, dispatch] = useButtonContext("Button.Icon");
  console.log("Text: ", state.elements, dispatch);

  return <span className="text-2xl">{children}</span>;
};

ButtonRoot.displayName = "Button";

export const Button = Object.assign(ButtonRoot, { Icon, Text });
