---
"@mobentum/nebula-ui": patch
---

fix(select): only render SelectItemIndicator for the selected item

Remove `keepMounted` from the item indicator so the check icon no longer
shows next to every option in the list.
