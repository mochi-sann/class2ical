---
name: "component"
root: "./src/components"
output: "**/*"
ignore: []
questions:
  componentName: "Please enter Compoment text."
---

# `{{ inputs.componentName | pascal }}.tsx`

```markdown
import React from "react";

export type {{ inputs.componentName | pascal }}Props = {
  children: React.ReactNode;
};

const {{ inputs.componentName | pascal }}: React.FC<{{ inputs.componentName | pascal }}Props> = (props) => {
  return (
    <>
    </>
  );
};

export default {{ inputs.componentName | pascal }};
```
