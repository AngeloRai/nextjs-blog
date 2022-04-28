import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Moment from "moment";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a Software Engineer and life enthusiast. You can contact me on{" "}
          <Link href="https://www.linkedin.com/in/angeloraimondi/">
            Linkedin
          </Link>{" "}
          or by email: angraimondi@gmail.com
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <Link href="https://nextjs.org/learn/foundations/about-nextjs">
            our Next.js tutorial
          </Link>
          .)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className={utilStyles.listItem}>
              <Link href={`/posts/${id}`}>
                <a>
                  {title}
                  <br />
                </a>
              </Link>
              <small className={utilStyles.lightText}>
                {Moment(date).format("LL")}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
