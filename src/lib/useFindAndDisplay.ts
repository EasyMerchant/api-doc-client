import { useCallback } from 'react';
import { Attribute, Param, IService } from '~/interfaces';

export const useFindEnpoints = ({ services }: { services?: IService[] }) => {
  /**
   * Find and display the endpoint from the data object
   */
  const findEnpoints = useCallback(
    (services: IService[]) => {
      const endpoints: Array<{ method: string; url: string }> = [];

      services.forEach((service) => {
        const alreadyIncluded = endpoints.some((ept) => {
          if (
            ept.method === service.endpoint.method &&
            ept.url === service.endpoint.url
          ) {
            return true;
          }
          return false;
        });
        if (!alreadyIncluded) {
          endpoints.push({
            method: service.endpoint.method,
            url: service.endpoint.url,
          });
        }
      });
      return endpoints;
    },
    [services],
  );

  return { findEnpoints } as const;
};

export const useFindAttribute = ({
  attributes,
}: {
  attributes?: Attribute[];
}) => {
  /**
   * Find and return the attribute from the data object
   */
  const findAttribute = useCallback(
    (attributes: Attribute[], param: Param) => {
      const attribute = attributes?.find(
        (attr) => param.attributeId === attr.id,
      );
      return attribute;
    },
    [attributes],
  );

  return { findAttribute } as const;
};
