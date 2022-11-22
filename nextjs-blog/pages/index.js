import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <b>Jun Park</b>.
        </p>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/posts/first-post">First Post</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
