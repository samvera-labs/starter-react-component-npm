A button. React component `props`, or element `attributes` will be passed through to the Button component.

When writing tests in your apps, you can pass through a testing handle attribute like `data-testid="buttom-form-submit"` to the component.

```js static
import { Button } from "@nulib/admin-react-components";
```

```jsx padded
<Button data-testid="button-collection-edit">Standard button</Button>
<Button onClick={() => alert("Button clicked")}>Click me</Button>
<Button isPrimary>Primary Button</Button>
<Button isDanger>Dangerous Button</Button>
<Button isText>Cancel</Button>
```
