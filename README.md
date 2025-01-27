# Custom Hooks in React

Custom hooks are a mechanism to reuse stateful logic in React components. They allow you to extract component logic into reusable functions.

## Creating a Custom Hook

To create a custom hook, follow these steps:

1. **Define a function**: The function name should start with `use` to indicate that it is a hook.
2. **Use built-in hooks**: Inside your custom hook, you can use other hooks like `useState`, `useEffect`, etc.
3. **Return values**: Return the values or functions that you want to expose to the components using your custom hook.

### Example

Here's an example of a simple custom hook that manages a counter:

```javascript
import { useState } from 'react';

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
}

export default useCounter;
```

## Using a Custom Hook

To use the custom hook in a component:

```javascript
import React from 'react';
import useCounter from './useCounter';

function CounterComponent() {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default CounterComponent;
```

## Benefits of Custom Hooks

- **Reusability**: Extract and reuse logic across multiple components.
- **Readability**: Simplify components by moving complex logic into hooks.
- **Testability**: Easier to test isolated logic in hooks.

## Conclusion

Custom hooks are a powerful feature in React that help you write cleaner and more maintainable code by reusing stateful logic across components.
