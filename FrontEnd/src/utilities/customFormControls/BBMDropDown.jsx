import { Field, useField } from "formik";
import React from "react";
import { Label } from "semantic-ui-react";
import { FormField } from "semantic-ui-react";
export default function BBMDropDown({ ...props }) {
  const { name, options, ...rest } = props;
  const [field, meta] = useField(props);

  console.log(meta);

  return (
    
      <FormField error={meta.touched && !!meta.error}>

        <label htmlFor={name}></label>
        <Field as="select" id={name} name={name} {...rest}>
          {options.map((option) => {
            return (
              <option key={option.value} alue={option.value}>
                {option.key}
              </option>
            );
          })}
          {meta.touched ? (
            <Label pointing basic color="red" content={meta.error}></Label>
          ) : null}
        </Field>
      </FormField>

  );
}
