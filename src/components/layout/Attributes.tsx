import { IApiData } from '~/interfaces';
import { classJoiner } from '~/lib';
import DataType from './DataType';
import AttributeName from './AttributeName';
import { useAppContext } from '~/context/AppProvider';

export default function Attributes({ entity }: { entity: IApiData }) {
  const { divider, border } = useAppContext();
  return (
    <table className='mt-8 w-full'>
      <thead>
        <tr className={classJoiner('border-b', border?.bottom)}>
          <th className='text-left py-2 text-gray-600 dark:text-slate-300 font-medium'>
            Attributes
          </th>
        </tr>
      </thead>
      <tbody className={classJoiner('divide-y', divider?.secondary)}>
        {entity?.attributes?.map((attr, i) => (
          <tr key={i} className='flex flex-col'>
            <td className='pt-4 font-medium flex items-center space-x-2'>
              <AttributeName>{attr.name}</AttributeName>
              <DataType>{attr.data_type}</DataType>
            </td>
            <td
              className='text-sm pb-4 pt-2 font-normal text-gray-500 dark:text-slate-300'
              dangerouslySetInnerHTML={{
                __html: attr.description,
              }}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
