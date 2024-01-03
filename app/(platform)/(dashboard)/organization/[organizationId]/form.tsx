"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export const Form = () => {
  const initialState = { message: null, errors: {} };
  // @ts-ignore
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
};
