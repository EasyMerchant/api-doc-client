import { useScrollPosition } from '~/hooks/useScrollPositions';
import { IApiData, IService } from '~/interfaces';
import { getElementId, injectVariables } from '~/lib';
import CodeBox from './CodeBox';
import Endpoints from './Endpoints';
import Snippet from './httpSnippet/Snippet';
import RequestResponse from './RequestResponse';
import Services from './Services';
import { useAppContext } from '~/hooks';

export default function Entities({ data }: { data: IApiData[] }) {
  useScrollPosition();

  const ctx = useAppContext();

  return (
    <>
      {data?.map((entity: IApiData, i: number) => (
        <div
          className='my-20 flex'
          key={i}
          id={getElementId(entity.attributes.name)}
        >
          <div className='w-full pt-10 md:pt-16 px-5 md:px-8 md:max-w-5xl 2xl:max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row justify-between relative md:space-x-5'>
              <div className='w-full max-w-md 2xl:max-w-xl'>
                <h2
                  className={`text-3xl font-semibold ${ctx?.dark?.heading} ${ctx?.light?.heading}`}
                >
                  {entity.attributes.name}
                </h2>
                {entity.attributes.description?.map((p, i) => (
                  <p
                    key={i}
                    className='mt-6 text-gray-700 dark:text-slate-300 max-w-lg 2xl:max-w-xl'
                  >
                    {injectVariables(p, { identifier: ctx?.identifier })}
                  </p>
                ))}
              </div>

              {entity?.attributes.info?.data && (
                <CodeBox
                  heading={entity?.attributes.info?.data?.attributes?.heading}
                  description={
                    entity?.attributes.info?.data?.attributes?.description
                  }
                  code_box={
                    entity?.attributes?.info?.data?.attributes?.code_box
                  }
                />
              )}

              {entity.attributes.services?.data.length ? (
                <Endpoints entity={entity} />
              ) : null}
            </div>

            {entity.attributes.services ? (
              <div
                className={`mt-2 divide-y w-full ${ctx?.dark?.divider?.primary} ${ctx?.light?.divider?.primary}`}
              >
                {entity.attributes.services.data.map(
                  (service: IService, i: number) => (
                    <div
                      className='h-full py-20 md:py-32 flex flex-col md:flex-row md:space-x-10 xl:space-x-20 relative'
                      key={service.id}
                      id={getElementId(service.attributes.name)}
                    >
                      {/* left pane > display services and description */}
                      <Services service={service} />

                      <div className='mt-10 md:mt-0 w-full md:max-w-md space-y-4 2xl:max-w-[565px]'>
                        {service?.attributes?.endpoint?.data?.attributes && (
                          <Snippet
                            endpoint={service.attributes.endpoint.data}
                            params={service.attributes.parameters.data}
                          />
                        )}
                        {service?.attributes.endpoint?.data?.attributes && (
                          <RequestResponse service={service} />
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
}
