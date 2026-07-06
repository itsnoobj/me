import React, { useState } from "react";
import styles from "./styles.module.css";

interface AskAgentProps {
  /** Absolute URL of the post, e.g. https://noobj.me/notes/the-screen-between-us */
  url: string;
}

function buildPrompt(url: string): string {
  return `Here's a blog post: ${url}

Read it, then give me a one-line teaser of what it's about — enough to
make me curious, not a summary. Then wait.

I'll ask questions as I go. Keep answers short — a few sentences, not
a re-summary of the post. Don't ration into pieces or ask me how I want
it delivered; just answer the specific thing I asked, briefly. Use a
simple ASCII diagram instead of prose when it's showing a flow,
comparison, or relationship. Then end with a short follow-up question
of your own, pointing at what's most interesting to explore next. When
you answer, open by connecting it to what we just discussed — phrase
that connection as a question, not a statement, so it feels like one
continuous thread rather than a new topic.`;
}

const HUMAN_LABEL = "🧑 Human";
const HUMAN_QUIP = "You chose the hard way 🫡";

export default function AskAgent({ url }: AskAgentProps): React.JSX.Element {
  const [copied, setCopied] = useState(false);
  const [humanClicked, setHumanClicked] = useState(false);

  const handleAgentClick = async () => {
    const prompt = buildPrompt(url);
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      // Clipboard API unavailable — fail silently, button just won't confirm.
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleHumanClick = () => {
    setHumanClicked(true);
    setTimeout(() => setHumanClicked(false), 2000);
  };

  return (
    <div className={styles.askAgent}>
      <div className={styles.question}>How do you want to read this?</div>
      <div className={styles.toggle}>
        <button
          type="button"
          className={styles.option}
          onClick={handleHumanClick}
          aria-label="Read it the old-fashioned way"
        >
          {humanClicked ? HUMAN_QUIP : HUMAN_LABEL}
        </button>
        <span className={styles.divider}>/</span>
        <button
          type="button"
          className={styles.option}
          onClick={handleAgentClick}
          aria-label="Copy a prompt to chat with this post in your AI tool"
        >
          {copied ? "Copied — paste in your agent" : "🤖 Agent"}
        </button>
      </div>
    </div>
  );
}
