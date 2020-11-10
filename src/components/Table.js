export default function Table({ data, onEdit, onDelete }) {
  return (
    <>
      <div class="mb-3">
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150"
        >
          <svg
            class="-ml-0.5 mr-2 h-4 w-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V12M12 12V18M12 12H18M12 12L6 12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Créer un tiers
        </button>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th class="px-6 py-3 bg-gray-50"></th>
                    <th class="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- Odd row --> */}
                  <tr class="bg-white">
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Jane Cooper
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      Regional Paradigm Technician
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      jane.cooper@example.com
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      Admin
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a href="#" class="text-green-600 hover:text-green-900">
                        Editer
                      </a>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a href="#" class="text-red-600 hover:text-red-900">
                        Supprimer
                      </a>
                    </td>
                  </tr>

                  {/* <!-- Even row --> */}
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Cody Fisher
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      Product Directives Officer
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      cody.fisher@example.com
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      Owner
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a href="#" class="text-green-600 hover:text-green-900">
                        Editer
                      </a>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a href="#" class="text-red-600 hover:text-red-900">
                        Supprimer
                      </a>
                    </td>
                  </tr>
                  {/* <!-- More rows... --> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
