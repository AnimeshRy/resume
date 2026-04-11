---
role: Senior Software Engineer
company: MeeTri Infotech
dateRange: Jan 2022 - Apr 2025
startDate: 2022-01-01
summaryBullets:
  - Banking integrations (SBI, TCS, ICICI) for pharmacy; Kafka-backed order pipeline at scale.
  - Cerberus API gateway; multi-tenant identity and OSO-based auth in Golang.
  - Terraform, CloudWatch, and Grafana — repeatable environments and a single ops view.
description: B2B payments, agritech platforms, API gateway, and cloud operations at MeeTri Infotech.
---

## Banking and order integrations

Led order integrations with **SBI**, **TCS**, and **ICICI** for pharmacy order flows generating roughly **Rs 3 Cr/month** in revenue, coordinating across banking partners and internal payment infrastructure.

## Technical decisions (one-way doors)

- **SQS → Kafka** for the B2B order aggregator — committed to streaming for throughput and replay; reversing would have meant re-proving latency and ordering guarantees.
- **Cerberus** as the **vendor-facing gateway** — centralized RBAC, rate limits, and observability for third parties instead of scattering policy across services.

## Authorization and platform

Designed a **Multi-Actor Authorization Engine** for an agritech partner in **Golang** using **OSO** — implementing RBAC with fine-grained policy evaluation integrated directly into the auth service pod.

Built a **high-throughput B2B Payment and Order Aggregator** migrating from AWS SQS to **Kafka** — handling about **3,700 RPM** at **P99 ~3ms** latency, improving reliability and throughput for downstream order processing.

Designed **Multi-Tenant Identity & Order Fulfillment Services** for an agritech platform (**30K MAUs**) using **MERN + GraphQL**, managing **13 services** on Kubernetes.

## Cerberus API gateway

Designed and built **Cerberus** — an API Gateway for third-party vendors — incorporating RBAC, rate-limiting, caching, event hooks, and dashboards.

## Infrastructure and observability

Automated infrastructure provisioning with **Terraform** across environments; established full observability via **CloudWatch** and **Grafana** — reducing configuration drift and providing a single pane of glass for system health.
