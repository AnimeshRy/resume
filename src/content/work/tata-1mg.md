---
role: Senior Software Engineer
company: Tata 1mg
dateRange: May 2025 - Present
startDate: 2025-05-01
summaryBullets:
  - Lead engineer for B2B Order Management (Pharmacy & Diagnostics); 500k+ MAUs; team of 5.
  - Shipped Voice AI telesales to production; MCP (FastMCP); org-wide security scanning (380+ repos).
  - Technical owner for Collection Center and My Vaccines — platform-scale initiatives.
description: Lead B2B order flows, Voice AI, MCP, security automation, and service platforms at Tata 1mg.
---

## Role

Lead engineer for **B2B Order Management** covering Pharmacy and Diagnostics, serving **500k+ monthly active users** with a team of **5 engineers**.

## Technical decisions (one-way doors)

- **My Vaccines**: Introduced a **service-led category** decoupled from pathology-based flows — costly to unwind once live; bought a long-term extension point for non-pathology services.
- **MCP server**: Standardized on **FastMCP** as the contract surface for AI agents calling production — a deliberate integration boundary rather than ad-hoc endpoints.

## Voice AI telesales

Drove **end-to-end** deployment of a Voice AI telesales platform from POC through production: integrated payment APIs and order flows with multiple AI vendors. Outcomes included roughly **2× conversation throughput** versus human agents and about **Rs 3.5 Cr** in annual savings.

## Collection Center

Technical owner of **Collection Center** (200+ stores, 300+ labs, roughly Rs. 1–5 Cr GMV/month): led architectural decisions and shipped **pediatric booking support (6 yrs)**, opening a new user segment and increasing order volume.

## Security and developer tooling

Designed and shipped a **security scanning module** integrated into DeputyDev — automatically auditing **380+ repositories** across the 1mg codebase and surfacing **15,000+ security issues**, replacing ad-hoc manual reviews with a continuous, platform-wide signal.

## MCP server

Implemented **1mg’s MCP server** using FastMCP, exposing platform-wide services (pharmacy, lab order placement, and more) as tool-callable APIs so AI agents can interact with production systems through a standardized, extensible interface.

## My Vaccines

Architected and shipped **My Vaccines** — a service-led platform on Tata 1mg serving about **20k users/month** — introducing a dedicated Service category to decouple vaccination journeys from pathology-based flows and building a common, extensible foundation for future service offerings.
