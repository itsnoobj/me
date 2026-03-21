import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <main className="landing">
        <section className="hero-section">
          <h1>Jeevan D C</h1>
          <p className="subtitle">Builder & Architect of Chaos</p>
        </section>

        <section className="story">
          <p>
            <strong>These days I work</strong> on tech strategy, org design, and
            talent attraction — the stuff that shapes how engineering actually
            functions. Most orgs end up optimising for local wins — not because
            anyone chose to, but because the org design, communication flows, and
            incentive structures made it inevitable. I apply engineering thinking
            to those problems: theory of constraints on how teams collaborate, org
            design treated like system design, fixing the structures that make
            people optimise for themselves instead of the whole. You don't build a
            basketball team by replacing football players one at a time — you
            redesign the game, and the mindset follows. I{" "}
            <a href="https://academy.hyperverge.org/" target="_blank" rel="noopener noreferrer">
              teach at HyperVerge Academy
            </a>{" "}
            — something that gives me real joy, helping folks who want to help
            themselves — speak at conferences, and run a 2,000+ member tech community.
          </p>
          <p>
            <strong>Somewhere in between,</strong> I picked up a General Management
            program at{" "}
            <a href="https://www.iimb.ac.in/" target="_blank" rel="noopener noreferrer">
              IIM Bangalore
            </a>{" "}
            — for fun, mostly. Ended up finishing top of the class as the youngest
            in the cohort, winning strategy competitions along the way. Turns out
            questioning how things are managed is something I can't stop doing.
          </p>
          <p>
            <strong>I wrote the first line of code</strong> for a digital bank
            that went on to serve 1.5 million customers in 18 months. Architected
            most of the critical services — built a 5-minute microservice
            templating system with all the bells and whistles before Backstage was
            even a thing. Designed the full network path: traffic hitting edge,
            mTLS to API gateway, through Kubernetes, down to databases and
            on-prem data centres. HA clusters, DC failover drills, regulatory
            approvals, everything as code — including a hacky but working HA Kafka
            setup across only 2 availability zones on Alicloud. Scaled the team
            from 3 engineers to 300, and migrated the entire cloud from Alicloud
            to GCP with just 4 hours of downtime. Everything automated, nothing
            left to chance.
          </p>
          <p>
            <strong>Before that,</strong> I helped the largest telco in
            Southeast Asia re-architect their consumer apps to handle 30 million
            users — taking them from 5 million without breaking a sweat. Across
            my career, I've built across insurance, gaming, banking, and SaaS
            ecosystems.
          </p>
          <p>
            <strong>I've tried the startup thing.</strong> PMF stayed elusive.
            Currently testing an idea at the intersection of learning and markets.
          </p>
          <p>
            <strong>Problem solver at heart.</strong> I question processes the way
            others question tech debt — because process debt is just as real and
            twice as ignored. I have opinions about everything that matters: time,
            money, partners, family, friends, and work. Most of them end up here.
          </p>
        </section>

        <div className="cta">
          <Link to="/blog" className="cta-link">
            Blogs →
          </Link>
        </div>
      </main>
    </Layout>
  );
}
