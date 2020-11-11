export interface TableProps {
  datas?: Record<string, any>[] | undefined;
  columns: ColumnState[];
  onEdit(id:number): void,
  onDelete(id:number):void
}

export interface ColumnState {
  key:string;
  label:string;
}


export default function Table({ columns, datas, onEdit, onDelete }:TableProps) {
  return (
    <>
      <div className="mb-3">
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150"
        >
          <svg
            className="-ml-0.5 mr-2 h-4 w-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V12M12 12V18M12 12H18M12 12L6 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Créer un tiers
        </button>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    {columns.map((column:ColumnState) => {
                      return (
                        <th key={column.key} className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          {column.label}
                        </th>
                      );
                    })}
                    <th key="editCol" className="px-6 py-3 bg-gray-50"></th>
                    <th key="deleteCol" className="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <TableBody
                  columns={columns}
                  datas={datas}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TableBody({ columns, datas, onEdit, onDelete }:TableProps) {
  if (datas)
  {
    const body = datas.map((data:any) => {
      const rows = columns.map((column:ColumnState) => {
        return (
          <td key={column.key} className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
            {data[column.key]}
          </td>
        );
      });
      return (<tr key={data.id} className="bg-white">
                {rows}
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <a href="#" className="text-green-400 hover:text-indigo-900">Editer</a>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <a href="#" className="text-red-600 hover:text-red-900" onClick={()=>onDelete(data.id)}>Supprimer</a>
                </td>
              </tr>);
    });
  
    return <tbody>{body}</tbody>;
  }

  return null;

}
