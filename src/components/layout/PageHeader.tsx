import Head from 'next/head';

const PageHeader = ({
  pageTitle,
  route,
  root,
}: {
  pageTitle?: string;
  route: string;
  root: string;
}) => {
  let title = pageTitle ? `${pageTitle} | ${route}` : 'lyfecycle PAYMENTS | API Documentation';

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='created with love by rawjson' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href={`${root}/favicon.ico`} />
      <link href={`${root}/site.webmanifest`} rel='manifest' />
    </Head>
  );
};

export default PageHeader;
