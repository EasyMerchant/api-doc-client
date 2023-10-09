import { IApiData } from '~/interfaces';
import Entities from './Entities';
import SandBoxDialog from './SandBoxDialog';
import { DocumentationLayout } from './DocumentationLayout';

export default function Main({ data, ...props }: { data: IApiData[] }) {
  return (
    <DocumentationLayout
      navigation={data.map((entity) => {
        return {
          id: entity.id,
          defaultOpen: entity.defaultOpen,
          title: entity.name,
          subNavigation: entity.services?.map((service) => {
            return { id: service.id, label: service.name };
          }),
        };
      })}
      {...props}
    >
      <Entities data={data} />

      <SandBoxDialog />
    </DocumentationLayout>
  );
}
