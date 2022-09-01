import ResizeTextarea from "react-textarea-autosize";
import React from "react";
import { forwardRef, Textarea, TextareaProps } from "@chakra-ui/react";

export const AutoResizeTextarea = forwardRef<TextareaProps, "textarea">(
  (props, ref) => {
    return (
      <Textarea
        minH="unset"
        overflow="hidden"
        w="100%"
        resize="none"
        ref={ref}
        minRows={1}
        as={ResizeTextarea}
        {...props}
      />
    );
  }
);
