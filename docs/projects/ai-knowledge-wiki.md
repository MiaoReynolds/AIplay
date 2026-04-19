# Building Your Knowledge Wiki with AI Agents

When building a personal knowledge base, the traditional RAG (Retrieval-Augmented Generation) approach often feels frustratingly inefficient — every query forces the model to scavenge through fragments from scratch, and knowledge never truly *accumulates*. Drawing on Andrej Karpathy's "LLM-Wiki" concept, instead of having the model search and improvise on the fly, you can promote AI Agents like Codex, Claude Code, or Antigravity to the role of your dedicated, full-time librarian.

The division of labor in this architecture is crystal clear: **Obsidian is your reading and thinking IDE**, the **AI Agent is your tireless developer**, and the **Markdown-based Wiki is your ever-evolving codebase**. This straightforward, no-nonsense approach lets you focus on what matters — asking questions and feeding in raw material.

---

## 1. Infrastructure: Seamless Multi-Platform Sync via iCloud

For frictionless switching between Mac, PC, and mobile, the lightest and most reliable foundation is **iCloud Drive** as the underlying file system.

**Create your Vault:** Create a new folder directly in the root of iCloud Drive to serve as your core library.

**Sync logic across devices:** Obsidian on iOS/iPadOS natively reads Vaults stored in iCloud Drive. As long as cloud sync is healthy, any file that a local Agent (e.g., Claude Code running in the terminal) creates, edits, or deletes on your computer will automatically propagate to your phone within seconds. This completely eliminates the need for complex Git commits or wrestling with third-party sync plugins.

---

## 2. Schema Layer: Teaching the Agent Your Rules

Whether you're operating via Claude Code in the terminal or Cursor's Agent mode, precise execution requires a **global instruction file** placed at the vault root — for example, `CLAUDE.md` or `AGENTS.md`.

This configuration file is the soul of the entire system. Define your format standards and conventions here, for example:

**Data structure requirements:** Specify that every new entity page must include a standardized YAML frontmatter block (e.g., tags, date added, source references).

**Index maintenance protocol:** Require the Agent to update `index.md` (the global directory) and `log.md` (the operation ledger) every time it modifies any content.

The resulting structured Markdown files are immediately readable in Obsidian. They're equally ready to be published as a static knowledge site via MkDocs, or used as the underlying data source for a private RAG solution — seamlessly plugging into any digital transformation initiative.

---

## 3. Three Core Operations

Once the Agent takes over, your daily interaction with the knowledge base compresses into three actions:

### Ingest
When you drop a PDF or web clipping about, say, "digital transformation strategies" into the Raw Sources folder, you simply type a single command in the terminal:

```
claude "Process this new document and update the Wiki"
```

The Agent reads the content, extracts key insights, generates new entity cards, establishes bidirectional links with existing cards, and logs the operation — all automatically.

### Query
When you need to make a technical or business decision, ask the Agent directly:

```
"Compare the hardware costs of the local LLM deployment options
 (e.g., Ollama) documented in our wiki."
```

The Agent reads through the relevant Markdown notes, synthesizes a conclusion, and saves the comparison as a new Wiki page — instead of letting it vanish into a temporary chat window.

### Lint
As the knowledge base grows, redundancy and drift accumulate. Periodically issue a maintenance sweep:

```
"Run a health check. Find orphaned pages with no inbound links
 and identify any conflicting or contradictory claims."
```

The Agent surfaces these logical gaps and keeps the entire knowledge system tight and consistent.

---

## 4. A Self-Evolving Knowledge Network

As the Agent continuously cross-references and organizes content in the background, you no longer need to manually maintain `[[bidirectional links]]`. Open Obsidian's **Graph View** and you'll see a self-growing, logically coherent knowledge network taking shape.

Your only job is to keep feeding it valuable information. Classification, archiving, and association — all delegated to the AI Agent.
