---
title: "Doxali: AI-Powered Abstraction for Legal Docs"
date: "2025-06-27"
author: "Alex Nguyen"
excerpt: "Meet Doxali — a document abstraction tool that uses AI to extract structured data from leases, loans, NDAs, and more in seconds."
tags: ["AI", "LegalTech", "Automation"]
image: "/blog/doxali-thumbnail.jpg"
---

# ⚡ Meet Doxali: AI-Powered Abstraction for Legal Documents

Legal documents are long. Dense. Often repetitive. And worst of all, packed with critical data you need structured yesterday. That’s why we built **Doxali** — a document abstraction interface designed for precision, speed, and scale.

### 🧠 What is Doxali?

Doxali is an AI-powered web app that extracts structured data from complex legal agreements — from leases and loan docs to NDAs, operating agreements, title policies, and more. It parses your uploaded PDF and transforms it into editable, exportable fields in seconds.

Think of it as a hybrid between a legal assistant and a spreadsheet wizard — one that doesn’t sleep and never skips a field.

---

## ✍️ How It Works

1. **Choose Your Document Type**
   You start on the **Home screen**, where you select a document category from a curated dropdown — everything from "Lease Agreement" to "ALTA Settlement Statement."

2. **Drag, Drop, Done**
   Upload your PDF via drag-and-drop or file picker. Doxali automatically estimates:

   * Page count
   * Token (word) count
   * Processing cost (in real-time)

3. **AI Abstraction Engine**
   Once uploaded, the document is parsed using an AI backend (hosted locally or in the cloud). Data is extracted using domain-specific templates — every field, clause, date, and exhibit is mapped for review.

4. **Structured Review**
   The `/review` route launches a modular UI, tailored to your document type. For example, a **Loan Agreement** displays grouped sections like:

   * Basic Loan Info
   * Financial Terms
   * Defaults & Remedies
   * Legal Terms
     Each field is editable, trackable, and tied to its source text.

5. **Export to Excel**
   With one click, your structured abstraction is downloadable as a clean `.xlsx` — perfect for audit trails, data ingestion, or review workflows.

---

## 🔍 Supported Document Types

Doxali ships with templates for dozens of agreements. Just a few examples:

* **Transaction Docs:** Lease, PSA, Loan, Term Sheet
* **Entity Docs:** JV Agreement, Bylaws, Subscription Agreement
* **Enforcement Docs:** SNDA, Guaranty, Estoppel
* **Construction:** AIA Contracts, GC Agreements
* **Valuation & Title:** Appraisal, Title Policy, Warranty Deeds

Adding new types is easy — the app uses a modular `GenericReview.tsx` router that dynamically renders the correct template.

---

## 🎨 UX with Developer Polish

The frontend is styled in dark mode using Tailwind CSS with React + TypeScript. Animations are subtle, buttons are responsive, and fields are grouped logically for ease of navigation.

Key UI highlights:

* Inline editing of fields
* Source tooltips for extracted data
* Exhibit management and tagging
* Client-side Excel generation

---

## ⚙️ Built For…

* **Legal Ops Teams** who need repeatable, auditable review processes.
* **Real Estate Analysts** handling leases, loans, and valuation documents.
* **Law Firms** abstracting complex agreements at scale.
* **Developers** building their own abstraction workflows with AI.

---

## 🚀 Open, Extensible, Fast

Doxali is lightweight. It runs locally. The upload and cost estimation endpoints are powered by Python microservices, and document processing leverages token-based estimation and structured JSON mapping.

Want to add your own document type? Just:

1. Create a new `ReviewComponent.tsx`
2. Add a route in `GenericReview.tsx`
3. Update the dropdown in `Home.tsx`

---

## 📦 TL;DR

* 🧠 AI-based document data extraction
* 📄 Supports dozens of legal document types
* ⚡ Instant cost estimation & upload
* 📤 Editable fields + Excel export
* 🛠 Built with React, Tailwind, and TypeScript

---

**Doxali** isn’t just another document parser — it’s the bridge between dense legalese and usable, structured intelligence.

Ready to abstract smarter?

> 🔗 Start your upload. Let the AI handle the paperwork.

