import React, { FC } from "react";
import { Form, Field } from "react-final-form";

import Box from "src/atoms/Box";
import Button from "src/atoms/Buttons";
import Input from "src/atoms/Input";
import { useFullContext } from "src/app/services/fetchProducts";
import { ActionTypes } from "src/app/services/types";

const SearchBar: FC = () => {
  const {
    products: [, dispatch]
  } = useFullContext();

  return (
    <Box maxWidth="739px" width="100%">
      <Form
        onSubmit={values => {
          dispatch({ type: ActionTypes.FETCH, payload: values.search });
        }}
        render={({ handleSubmit }) => {
          return (
            <>
              <Field name="search">
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
                <Button onClick={handleSubmit}>search</Button>
              </Box>
            </>
          );
        }}
      />
    </Box>
  );
};

export default SearchBar;
