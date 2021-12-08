# @fvilers/uniq-array

An helper function to filter an array for uniqueness based on a property or a predicate

## Installation

```
npm install @fvilers/uniq-array
```

or

```
yarn add @fvilers/uniq-array
```

## Usage

```ts
import uniqArray from "@fvilers/uniq-array";

const array = uniqArray(
  [
    { letter: "alpha" },
    { letter: "beta" },
    { letter: "gamma" },
    { letter: "beta" },
    { letter: "alpha" },
  ],
  "letter"
);
console.log(array);
```

Will produce a new array containing

```ts
[{ letter: "alpha" }, { letter: "beta" }, { letter: "gamma" }];
```
