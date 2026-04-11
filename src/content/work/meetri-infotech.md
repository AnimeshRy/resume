---
role: Senior Software Engineer
company: MeeTri Infotech
dateRange: Jan 2022 - Apr 2025
startDate: 2022-01-01
summaryBullets:
  - Banking integrations (SBI, TCS, ICICI) for pharmacy flows; high-throughput Kafka order pipeline.
  - Multi-tenant identity, Cerberus API gateway, and OSO-based authorization in Golang.
  - Terraform and observability (CloudWatch, Grafana) across environments.
description: B2B payments, agritech platforms, API gateway, and cloud operations.
---

## Banking and order integrations

Led order integrations with **SBI**, **TCS**, and **ICICI** for pharmacy order flows generating roughly **Rs 3 Cr/month** in revenue, coordinating across banking partners and internal payment infrastructure.

## Authorization and platform

Designed a **Multi-Actor Authorization Engine** for an agritech partner in **Golang** using **OSO** — implementing RBAC with fine-grained policy evaluation integrated directly into the auth service pod.

Built a **high-throughput B2B Payment and Order Aggregator** migrating from AWS SQS to **Kafka** — handling about **3,700 RPM** at **P99 ~3ms** latency, improving reliability and throughput for downstream order processing.

Designed **Multi-Tenant Identity & Order Fulfillment Services** for an agritech platform (**30K MAUs**) using **MERN + GraphQL**, managing **13 services** on Kubernetes.

## Cerberus API gateway

Designed and built **Cerberus** — an API Gateway for third-party vendors — incorporating RBAC, rate-limiting, caching, event hooks, and dashboards.

## Infrastructure and observability

Automated infrastructure provisioning with **Terraform** across environments; established full observability via **CloudWatch** and **Grafana** — reducing configuration drift and providing a single pane of glass for system health.
