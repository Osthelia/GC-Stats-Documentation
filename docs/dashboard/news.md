---
sidebar_position: 9
title: News
---

# News

You need the **View news** permission to open this page.

## The article list

A sortable, filterable table (search by title; filter by status, language, or date range) lists your organization's articles, each tagged with a status:

`Draft` → `In review` → `Approved` or `Changes requested` → `Published` → `Archived`

To schedule an article for the future, publish it with a future publish date — it stays hidden from the public site until that date passes, then goes live automatically. There's no separate "scheduled" status; it simply shows as Published with a future date.

The "Create" button and the ability to edit a draft or a changes requested article require the **Edit news** permission. Editing an already published article instead requires the **Edit published news** permission (the two are independent, an account can hold either, both, or neither). A reviewer with **Review news** or **Publish news**, but neither edit permission, can still open an article to review or publish it.

## The article editor

- Rich text editor
- Cover image panel
- Related entities selector (teams, players, or tournaments linked to the article)
- **Status actions** and **Conversation** thread — see below

## The review workflow

Articles move through a simple approval chain before they go public:

1. A writer drafts the article (`Draft`) and, once ready, **submits it for review**.
2. A reviewer with the **Review news** permission looks it over and either **approves** it or **requests changes** — sending it back to the writer with `Changes requested`.
3. Once approved, anyone with **Publish news** can **publish** it immediately or schedule it for a future date.
4. An article can later be **archived** (removed from public listing but kept for reference), and — with **Delete news** — permanently deleted.

Each transition requires a specific permission: **Edit news** to submit or resubmit, **Review news** to approve or request changes, **Publish news** to publish (or unpublish) an approved article, and **Delete news** to delete. Reviewing and publishing are separate permissions, an organization can have a role that reviews articles without being able to put them live, and vice versa.

Once an article is published, editing its content again (title, text, cover, related entities) requires the separate **Edit published news** permission rather than **Edit news**.

### Conversation

Every article has a **Conversation** panel: a private comment thread attached to it that is never shown on the public site. It doubles as a review audit log — every submission, approval, change request, and publish action is logged there automatically, alongside any free-form comments the writer and reviewers leave for each other (e.g. "can you double check the score in paragraph 2?").

### Previewing before publication

Anyone with access to an article can view it rendered on the actual public page before it's published, to check exactly how it will look once it goes live — same layout, same styling, same related-entity links, just not visible to the public yet.

See also [Author space](/dashboard/author-space) for managing your byline profile.
