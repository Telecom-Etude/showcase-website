# Notes

- Use `LocaleParams` type to avoid translation errors on pages.
- The translations are in `.ts` files instead of `.json` files to add type checking.
- Never use "use client" unless it is necessary: performance are better with server-side rendering.
- To refresh or redirect from `use client` page, use `import { useRouter } from "next/navigation";`. The import is from `next/navigation` not `next/router`!
- If you add a variable in [globals.css](../src/app/globals.css), you must also add it in [tailwind.config.ts](../tailwind.config.ts).
