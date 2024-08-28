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
  let defaultRoot = root ? root : '/lyfepay';

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='Explore our guides and examples to integrate The lyfecycle PAYMENTS.' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        property="og:image"
        content="https://developers.lyfepay.io/_next/image?url=%2Flyfepay%2Flogo.png&w=3840&q=75" />
      <meta
        property="og:description"
        content="Explore our guides and examples to integrate The lyfecycle PAYMENTS." />
      <meta property="og:title" content="lyfecycle PAYMENTS | API Documentation" />
      <link rel="apple-touch-icon" sizes="180x180" href={`${defaultRoot}/apple-touch-icon.png`} />
      <link rel='icon' href={`${defaultRoot}/favicon.ico`} />
      <link href={`${defaultRoot}/site.webmanifest`} rel='manifest' />
    </Head>
  );
};

export default PageHeader;
