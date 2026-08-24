# 5e.tools collector

Collector for 5e.tools data to make future data operations easier.

Also includes manual Typescript interfaces.

## Collecting the data

```bash
npm run collect
```

## Verifying types

```bash
npm run gentypes
```

```bash
npx tsx scripts/typecheck/action.ts
```

## Why split the types into separate files?

ts-interface-checker out-of-memory issues
