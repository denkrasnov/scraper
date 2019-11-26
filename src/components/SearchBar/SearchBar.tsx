import React, { FC } from "react";
import { Form, Field } from "react-final-form";

import Box from "src/atoms/Box";
import Button from "src/atoms/Buttons";
import Input from "src/atoms/Input";
import { useFullContext } from "src/services/ContextProvider";
import { ActionTypes } from "src/services/fetchProducts/types";

const SearchBar: FC = () => {
  const [, dispatch] = useFullContext();

  return (
    <Form
      onSubmit={values => {
        dispatch({ type: ActionTypes.FETCH, payload: values.search.trim() });
      }}
    >
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Box margin="auto" maxWidth="739px" width="100%">
              <Field
                name="search"
                validate={value => (value && value.trim() ? undefined : true)}
              >
                {({ input }) => {
                  return (
                    <Input
                      name={input.name}
                      onChange={input.onChange}
                      placeholder="Search"
                      value={input.value}
                    />
                  );
                }}
              </Field>
              <Box padding="0 0 0 10px">
                <Button type="submit">Search</Button>
              </Box>
            </Box>
          </form>
        );
      }}
    </Form>
  );
};

export default SearchBar;
