import { Attribute, Param, IService } from '~/interfaces';

/**
 * Find and display the endpoint from the data object
 */
const findEnpoints = (services: IService[]) => {
  const endpoints: Array<{ method: string; url: string }> = [];
  services.forEach((service) =>
    endpoints.push({
      method: service?.attributes?.endpoint?.data?.attributes?.method || '',
      url: service?.attributes?.endpoint?.data?.attributes?.url || '',
    }),
  );

  for (let i = 0; i < endpoints.length; i++) {
    for (let j = i + 1; j < endpoints.length; j++) {
      if (
        endpoints[i].method === endpoints[j].method &&
        endpoints[i].url === endpoints[j].url
      ) {
        endpoints.splice(j--);
      }
    }
  }
  return endpoints;
};

/**
 * Find and return the attribute from the data object
 */
// const findAttribute = (attributes: Attribute[], param: Param) => {
//   const attribute = attributes?.find((attr) => param.attributeId === attr.id);
//   return attribute;
// };

/**
 * Calculate the window dimensions and assign them to the data object
 * @param {*} obj the data object for which the dimensions need to be caluclated
 * @param {*} offsetHeight  offset y axis height of window
 * @param {*} offsetTop offest y axis height where the window begins
 */

export { findEnpoints };
