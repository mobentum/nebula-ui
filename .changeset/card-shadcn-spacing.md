---
"@mobentum/nebula-ui": patch
---

fix(card): align header/footer spacing to shadcn conventions

CardHeader now uses `p-6` and CardFooter `flex items-center p-6 pt-0`
(no border dividers), so card bodies are no longer pressed against the
header.
