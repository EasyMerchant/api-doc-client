import { useScrollPosition } from '~/hooks/useScrollPositions';
import { IApiData, IService } from '~/interfaces';
import { classJoiner, injectVariables } from '~/lib';
import CodeBox from './CodeBox';
import Endpoints from './Endpoints';
import Snippet from './httpSnippet/Snippet';
import RequestResponse from './RequestResponse';
import Services from './Services';
import { useAppContext } from '~/context/AppProvider';
import Attributes from './Attributes';

export default function Entities({ data }: { data: IApiData[] }) {
  useScrollPosition();
  const { injectables, heading, divider, paragraphs } = useAppContext();

  return (
    <>
      {data?.map((entity: IApiData, i: number) => (
        <div className='flex py-10' key={i} id={entity.id}>
          <div className='w-full pt-10 md:pt-16 px-5 md:px-8 md:max-w-5xl 2xl:max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row justify-between relative md:space-x-5'>
              <div className='w-full max-w-md 2xl:max-w-xl'>
                <h2 className={classJoiner('text-3xl font-semibold', heading)}>
                  {entity.name}
                </h2>
                {entity.description?.map((p, i) => (
                  <p
                    key={i}
                    className={classJoiner(
                      'mt-6 max-w-lg 2xl:max-w-xl',
                      paragraphs,
                    )}
                    dangerouslySetInnerHTML={{
                      __html: injectVariables(p, { ...injectables }),
                    }}
                  />
                ))}
                {entity?.attributes && <Attributes entity={entity} />}
              </div>
              {entity?.info && <CodeBox entity={entity} />}
              {entity?.services && <Endpoints entity={entity} />}
            </div>

            {entity.services ? (
              <div
                className={classJoiner(
                  'mt-2 divide-y w-full',
                  divider?.primary,
                )}
              >
                {entity.services.map((service: IService, i: number) => (
                  <div
                    className='h-full py-20 lg:py-32 flex flex-col lg:flex-row lg:space-x-10 xl:space-x-20 relative'
                    key={service.id}
                    id={service.id.toString()}
                  >
                    {/* left pane > display services and description */}
                    <Services service={service} entity={entity} />

                    <div className='mt-10 lg:mt-0 w-full space-y-4 max-w-md 2xl:max-w-[565px] sticky top-20'>
                      <Snippet
                        attributes={entity.attributes || []}
                        endpoint={service.endpoint}
                      />

                      <RequestResponse service={service} />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
}
