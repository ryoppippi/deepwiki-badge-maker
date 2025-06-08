# DeepWiki Badge Generator

This is a SvelteKit 2 project with Svelte 5 for generating DeepWiki badges.

## Linting and Formatting

This project uses @ryoppippi/eslint-config for linting and formatting.

To lint the project:
```bash
pnpm lint:eslint
```

To format the project:
```bash
pnpm format:eslint
```

## Testing

The project uses Vitest for testing with browser mode support:

- Unit tests: `pnpm test`
- Watch mode: `pnpm test:watch`
- UI mode: `pnpm test:ui`
- E2E tests: `pnpm test:e2e`

## Type Checking

Run type checking with:
```bash
pnpm typecheck
```

## Development

Start the development server:
```bash
pnpm dev
```

Build the project:
```bash
pnpm build
```