export default function Table({ columns, datas, onEdit, onDelete }) {
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
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Nom
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Adresse
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Code postal
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Ville
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Tel
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 bg-gray-50"></th>
                    <th className="px-6 py-3 bg-gray-50"></th>
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

function TableBody({ columns, datas, onEdit, onDelete }) {
  //data[column.name]
  const body = datas.map((data) => {
    const rows = columns.map((column) => {
      return (
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
          {data[column.key]}
        </td>
      );
    });
    return <tr className="bg-white">{rows}</tr>;
  });

  return <tbody>{body}</tbody>;
}
