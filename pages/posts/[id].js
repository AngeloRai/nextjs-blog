import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Moment from "moment";
import styles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  Moment.locale("en");
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={styles.headingXl}>{postData.title}</h1>
      <br />
      <p className={styles.lightText}>{Moment(postData.date).format("LL")}</p>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
