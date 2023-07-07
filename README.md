This repo demonstrates an issue I am having with `@graphql-eslint/eslint-plugin` version 3.20.0.

To reproduce the issue, run the following commands:

```shell
npm ci
npm run lint
```

You will see this error:

```
Oops! Something went wrong! :(

ESLint: 8.38.0

Error: ESLint configuration in .eslintrc.js#overrides[1] » plugin:@graphql-eslint/operations-all » ./configs/operations-recommended is invalid:
	- Unexpected top-level property "default".
```

If you change package.json to switch `@graphql-eslint/eslint-plugin` to version 3.19.0, then the error goes away.
