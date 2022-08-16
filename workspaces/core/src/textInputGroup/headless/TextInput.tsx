import React, {
  createContext,
  Dispatch,
  useContext,
  // @ts-ignore
  useId,
  useReducer,
} from 'react';

const ComponentContext =
  createContext<[StateDefinition, Dispatch<Actions>] | null>(null);
ComponentContext.displayName = 'TextInput.ComponentContext';

function useRootContext(component: string) {
  let context = useContext(ComponentContext);
  if (context === null) {
    let err = new Error(
      `<${component} /> is missing a parent <TextInput /> component.`
    );
    // TODO update
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useRootContext);
    throw err;
  }
  return context;
}

interface TextInputRootProps {
  children: React.ReactNode;
}

interface StateDefinition {
  textInputId: string;
}

const enum ActionTypes {
  SetTextInputId = 'SetTextInputId',
}

type Actions = { type: ActionTypes.SetTextInputId; textInputId: string };

function reducer(state: StateDefinition, action: Actions) {
  if (action.type === ActionTypes.SetTextInputId) {
    if (state.textInputId === action.textInputId) {
      return state;
    }
    return { ...state, textInputId: action.textInputId };
  }

  throw new Error(
    'TextInput.ComponentContext reducer error. Unknown action.type'
  );
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  const textInputId = `text-input-${useId()}`;
  const providerValue = useReducer(reducer, { textInputId });

  return (
    <ComponentContext.Provider value={providerValue}>
      {children}
    </ComponentContext.Provider>
  );
};

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const [{ textInputId }] = useRootContext('TextInput');
  return <input ref={ref} type="text" id={textInputId} {...props} />;
});
Input.displayName = 'TextInput';

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  const [{ textInputId }] = useRootContext('TextInput');
  return <label ref={ref} htmlFor={textInputId} {...props} />;
});
Label.displayName = 'TextInput.Label';

export const TextInput = Object.assign(TextInputRoot, {
  Input,
  Label,
});


