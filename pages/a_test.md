@"
---
title: TEST PAGE
layout: layout.njk
---

# This is a test

If you see YAML above this, Eleventy is broken.
"@ | Out-File -FilePath "test.md" -Encoding utf8