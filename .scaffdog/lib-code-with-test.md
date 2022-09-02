---
name: "lib code with test"
root: "./src/lib/"
output: "**/*"
ignore: ["src/lib/test"]
questions:
  functionName: "Please enter Function text."
---

# `{{ inputs.functionName | pascal }}.ts`

```typescript

export type {{ inputs.functionName | pascal }}ArgsType = {
};
export type {{ inputs.functionName | pascal }}ReturnType = {
};

const {{ inputs.functionName | pascal }} = (Args: {{ inputs.functionName | pascal }}ArgsType):{{ inputs.functionName | pascal }}ReturnType => {
  return ;
};

export default {{ inputs.functionName | pascal }};
```

# `test/{{ inputs.functionName | pascal }}.test.ts`

```typescript
import { assert, expect, test } from "vitest";

import  {{ inputs.functionName | pascal }}  from "../{{ inputs.functionName | pascal }}";


test("{{ inputs.functionName | kebab }}", () => {

  expect( {{ inputs.functionName | pascal }}()).toBe();
});

```
