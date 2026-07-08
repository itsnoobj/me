import React from "react";
import Layout from "@theme/Layout";

type Link = {
  label: string;
  url: string;
};

type Talk = {
  title: string;
  eventUrl?: string; // makes the title clickable, links to the event/meetup page
  venue: string;
  location: string; // "City, Country"
  date: string; // display label, e.g. "Jun 2026"
  description: string;
  links?: Link[]; // recordings, decks, repos, etc. shown below the description
};

type YearGroup = {
  year: string;
  talks: Talk[];
};

// Newest first.
const talks: YearGroup[] = [
  {
    year: "2026",
    talks: [
      {
        title: "Kafka & Time: The Hardest Dependency",
        eventUrl: "https://www.meetup.com/bangalore-kafka-data-ai/events/315066570/",
        venue: "Bangalore Apache Kafka®, Data & AI Meetup — InMobi",
        location: "Bengaluru, India",
        date: "Jun 20, 2026",
        description:
          "Distributed systems are hard not because they span machines, but because they span time. A look at real production outages caused by partition keys, timestamp modes, and windowing contracts nobody consciously chose.",
        links: [
          { label: "Slides (PDF)", url: "/talks/kafka-time-hardest-dependency.pdf" },
        ],
      },
      {
        title: "How Startups Transform Legacy Organisations from the Inside",
        eventUrl: "https://www.meetup.com/sooner-safer-happier-emea-bvssh/events/315069428/",
        venue: "Sooner Safer Happier EMEA Meetup (BVSSH)",
        location: "Remote / EMEA",
        date: "Jun 16, 2026",
        description:
          "How a small acqui-hired startup team, dropped into a 4,000+ person legacy organisation, actually changed the way it worked from the inside — years of setbacks, small wins, and the slow work of building trust rather than pushing best practices.",
        links: [
          { label: "Watch", url: "https://www.youtube.com/watch?v=zX_KYeQyD1o" },
          { label: "Slides (PDF)", url: "/talks/bvssh-transformation-journey.pdf" },
        ],
      },
      {
        title: "OWASP Top 10 for LLM Applications — live breaking and fixing",
        eventUrl: "https://www.meetup.com/darling-meetup/events/314313854/",
        venue: "DARLing Meetup — IBM, Bellandur",
        location: "Bengaluru, India",
        date: "May 16, 2026",
        description:
          "A live, hands-on session breaking and fixing LLM applications against the OWASP Top 10 for LLM risks — prompt injection, misinformation, excessive agency, supply chain, and more, each with a real demo and a real fix.",
        links: [
          { label: "Slides (PDF)", url: "/talks/owasp-llm-top10.pdf" },
          { label: "Repo", url: "https://github.com/itsnoobj/llm-owasp-10-attack-mitigate-demo" },
        ],
      },
      {
        title: "Vector Search & Storage in PostgreSQL with pgvector",
        eventUrl: "https://www.ivorysql.org/events",
        venue: "HOW2026 — PostgreSQL & IvorySQL Eco Conference",
        location: "Jinan, China",
        date: "Apr 27–28, 2026",
        description:
          "Inside pgvector: how embeddings get stored (and TOASTed), why B-trees can't index vectors, and how IVFFlat and HNSW trade off build time, recall, and speed — plus quantization and the production gotchas that show up past the demo.",
        links: [
          { label: "Slides (PDF)", url: "/talks/pgvector-ivorysql-china.pdf" },
          { label: "Repo", url: "https://github.com/itsnoobj/vectors-high-dimensional-data-storage-talk" },
        ],
      },
      {
        title: "From Text to Vector: How High Dimensional Data Gets Stored, Searched & Retrieved",
        eventUrl: "https://www.ai-india.ai/home",
        venue: "AI India",
        location: "Bengaluru, India",
        date: "Apr 12, 2026",
        description:
          "What actually happens after you call an embedding API — how text becomes vectors, how they're stored, and how semantic search finds the closest match. Starts with a brute-force scan across 50,000 vectors, then shows how IVFFlat and HNSW deliver 50–150x speedups, all in plain SQL you can run on your laptop.",
        links: [
          { label: "Slides (PDF)", url: "/talks/vector-search-fundamentals-ai-india.pdf" },
          { label: "Repo", url: "https://github.com/itsnoobj/vectors-high-dimensional-data-storage-talk" },
        ],
      },
      {
        title: "Storing high-dimensional data at scale",
        eventUrl: "https://mitramandal.ai/past-events",
        venue: "mitramandal.ai Episode 3 — ClayWorks Create (hosted by DailyRounds/Marrow)",
        location: "Bengaluru, India",
        date: "Apr 11, 2026",
        description:
          "What breaks when you push vector search to 100M+ rows on Postgres, how IVF/HNSW and quantization help, and why DiskANN plus hybrid BM25/vector search mattered in production.",
        links: [
          { label: "Watch", url: "https://youtu.be/NFofNNfbk2c" },
          { label: "Repo", url: "https://github.com/itsnoobj/vectors-high-dimensional-data-storage-talk" },
        ],
      },
    ],
  },
  {
    year: "2025",
    talks: [
      {
        title: "Git internals beyond add, commit, push",
        eventUrl: "https://commandlineheroes.one2n.io/episodes/episode-2-bengaluru/",
        venue: "Command Line Heroes Episode 2 — Bengaluru",
        location: "Bengaluru, India",
        date: "Oct 25, 2025",
        description:
          "A practical deep dive into Git internals, for using Git with more confidence than the everyday porcelain commands give you.",
        links: [
          { label: "Slides (PDF)", url: "/talks/git-internals-beyond-porcelain.pdf" },
        ],
      },
      {
        title: "Inside pgvector: how PostgreSQL stores and manages high-dimensional data",
        venue: "Hyderabad PostgreSQL User Group",
        location: "Hyderabad, India",
        date: "Dec 19, 2025",
        description:
          "How pgvector represents and indexes high-dimensional embeddings inside PostgreSQL, and what that means for query performance at scale.",
        links: [
          { label: "Watch", url: "https://www.youtube.com/watch?v=8EtxdLRnoyw" },
          { label: "Slides (PDF)", url: "/talks/pgvector-hyderabad.pdf" },
          { label: "Repo", url: "https://github.com/itsnoobj/vectors-high-dimensional-data-storage-talk" },
        ],
      },
    ],
  },
  {
    year: "2024",
    talks: [
      {
        title: "Unlocking Efficiency and Collaboration: How Backstage Solves Key Developer Challenges",
        eventUrl: "https://meetups.nabarun.dev/next",
        venue: "Platform Engineering Meetup — Harness.io",
        location: "Bengaluru, India",
        date: "Sep 14, 2024",
        description:
          "How Backstage, the open-source developer portal, tackles knowledge discovery, code ownership, system interfaces, dependency mapping, tech radar, and service creation.",
        links: [
          {
            label: "Slides",
            url: "https://docs.google.com/presentation/d/1dtFhcUF4vfMho-iP5QOj5ObWi6wJahN_iWMcaY-Xw3s/mobilepresent?slide=id.g3003e63884e_1_78",
          },
        ],
      },
      {
        title: "Effective data consumption from Kafka",
        eventUrl: "https://www.meetup.com/bangalore-kafka-data-streams/events/300653985/",
        venue: "Bangalore Apache Kafka® Meetup — Razorpay",
        location: "Bengaluru, India",
        date: "May 11, 2024",
        description:
          "Configuring consumers for reliability and speed — fetch size, session timeouts, rebalancing, consumer lag, and the tradeoffs between throughput, latency, and resource use.",
      },
    ],
  },
  {
    year: "2023",
    talks: [
      {
        title: "Why, what, and how of practically working with Apache Kafka®",
        eventUrl:
          "https://forum.confluent.io/t/recording-ready-to-view-speaker-q-a-thread-24-february-2023-why-what-and-how-of-practically-working-with-apache-kafka-while-balancing-out-configs/7311",
        venue: "Confluent Community (virtual)",
        location: "Remote",
        date: "Feb 24, 2023",
        description:
          "What problems Kafka actually solves, when to reach for it, and a long walk through common use cases — the knobs to turn and the tradeoffs that come with them.",
        links: [
          {
            label: "Recording",
            url: "https://forum.confluent.io/t/recording-ready-to-view-speaker-q-a-thread-24-february-2023-why-what-and-how-of-practically-working-with-apache-kafka-while-balancing-out-configs/7311",
          },
        ],
      },
    ],
  },
  {
    year: "2022",
    talks: [
      {
        title: "GitLab Bengaluru — first in-person meetup",
        eventUrl: "https://x.com/urAvgKarthik/status/1591677476899536899",
        venue: "GitLab Bengaluru",
        location: "Bengaluru, India",
        date: "Nov 12, 2022",
        description:
          "Spoke at GitLab's first in-person Bengaluru meetup, alongside a full house on a rainy Saturday morning.",
      },
    ],
  },
];

function TalkEntry({ talk }: { talk: Talk }): React.JSX.Element {
  return (
    <div className="talk-entry">
      <h3 className="talk-entry__title">
        {talk.eventUrl ? (
          <a href={talk.eventUrl} target="_blank" rel="noopener noreferrer">
            {talk.title}
          </a>
        ) : (
          talk.title
        )}
      </h3>
      <p className="talk-entry__meta">
        {talk.venue} · {talk.location} · {talk.date}
      </p>
      <p className="talk-entry__description">{talk.description}</p>
      {talk.links && talk.links.length > 0 && (
        <p className="talk-entry__links">
          {talk.links.map((link, i) => (
            <React.Fragment key={link.url}>
              {i > 0 && " · "}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} — ${talk.title}`}
              >
                {link.label} →
              </a>
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  );
}

export default function Talks(): React.JSX.Element {
  return (
    <Layout
      title="Talks"
      description="Conference talks, meetups, and community appearances."
    >
      <main className="talks-page">
        <h1>Talks</h1>
        <p className="talks-intro">
          A running list of conference talks, meetups, and community
          appearances — Kafka, vector search, Git, platform engineering, org
          change, whatever I was deep in at the time.
        </p>

        {talks.map((group) => (
          <section key={group.year} className="talks-year">
            <h2 className="talks-year__label">{group.year}</h2>
            {group.talks.map((talk) => (
              <TalkEntry key={talk.title} talk={talk} />
            ))}
          </section>
        ))}
      </main>
    </Layout>
  );
}
