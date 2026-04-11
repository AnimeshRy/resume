---
role: DevOps Engineer
company: Rishikul Herbal
dateRange: Jan 2021 - Aug 2021
startDate: 2021-01-01
summaryBullets:
  - AWS (dev, staging, prod) defined in Terraform — repeatable, auditable environments.
  - Cut deploy time from ~2 hours to ~13 minutes by automating the path to production.
description: Terraform-first AWS provisioning and deployment automation at Rishikul Herbal.
---

## Infrastructure

Provisioned and managed **AWS** infrastructure across dev, staging, and production using **Terraform** — eliminated configuration drift and reduced deployment time from **2 hours** to **13 minutes**.

## Technical decisions (one-way doors)

- **Terraform as the source of truth** for all three environments — upfront investment in modules and state discipline so changes were reviewable and reversible at the plan/apply layer rather than by SSH.
