import Head from "next/head";

type PagesMetaHeadProps = {
  title?: string;
  keywords?: string;
  description?: string;
};

const PagesMetaHead = ({
  title,
  keywords,
  description,
}: PagesMetaHeadProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default PagesMetaHead;
