import { data } from '~/db/database';

export default async function getStaticProps() {
  return {
    props: {
      data,
      error: null,
    },
  };
}
