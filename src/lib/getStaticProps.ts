import { API_CONFIG } from './config';
import axios from 'axios';

export default async function getStaticProps() {
  const { STRAPI_TOKEN, STRAPI_URL } = process.env;
  const config = {
    url: `${STRAPI_URL}/api/entities?sort[0]=id&${API_CONFIG.POPULATE_RELATIONS}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  };
  try {
    const { data: api_data } = await axios(config);
    return {
      props: {
        data: api_data['data'],
      },
    };
  } catch (e) {
    return {
      props: {
        error: JSON.stringify(e),
      },
    };
  }
}
