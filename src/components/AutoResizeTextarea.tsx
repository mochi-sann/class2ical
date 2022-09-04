import React from "react";

import { forwardRef, Textarea, TextareaProps } from "@chakra-ui/react";
import ResizeTextarea, { TextareaAutosizeProps } from "react-textarea-autosize";
type AutoResizeTextareaProps = TextareaProps & TextareaAutosizeProps;

export const AutoResizeTextarea = forwardRef<
  AutoResizeTextareaProps,
  "textarea"
>((props, ref) => {
  const { minRows, ...otherProps } = props;
  return (
    <Textarea
      minH="unset"
      overflow="hidden"
      w="100%"
      resize="none"
      ref={ref}
      minRows={minRows || 3}
      as={ResizeTextarea}
      {...otherProps}
    />
  );
});
