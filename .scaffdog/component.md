---
name: "component"
root: "./src/components/"
output: "**/*"
ignore: []
questions:
  componentName: "Please enter Compoment text."
---

# `{{ inputs.componentName | pascal }}.tsx`

```typescript
import React from "react";

export type {{ inputs.componentName | pascal }}Props = {
};

const {{ inputs.componentName | pascal }}: React.FC<{{ inputs.componentName | pascal }}Props> = (props) => {
  return (
    <>
    </>
  );
};

export default {{ inputs.componentName | pascal }};
```

# `stories/{{ inputs.componentName | pascal }}.stories.tsx`

```typescript
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import {{ inputs.componentName | pascal }} from "../{{ inputs.componentName | pascal }}";

export default { component: {{ inputs.componentName | pascal }} } as ComponentMeta<typeof {{ inputs.componentName | pascal }}>;

export const Index: ComponentStoryObj<typeof {{ inputs.componentName | pascal }}> = {
  args: {
  },
};
```
