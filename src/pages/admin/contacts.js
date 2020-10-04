import AdminLayout from "../../layouts/AdminLayout";

export default function Contacts() {
  return (
    <AdminLayout>
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* <!--
            Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
            Read the documentation to get started: https://tailwindui.com/documentation
          --> */}
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Site
                      </th>
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
                    </tr>
                  </thead>
                  <tbody>
                    {/* <!-- Odd row --> */}
                    <tr class="bg-white">
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Strasbourg
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Jane Cooper
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Regional Paradigm Technician
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        <a
                          href="mailto:cody.fisher@colmar.fr"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          jane.cooper@example.com
                        </a>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        <div className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-gray-800">
                          Admin
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>

                    {/* <!-- Even row --> */}
                    <tr class="bg-gray-50">
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Colmar
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Cody Fisher
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Product Directives Officer
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        <a
                          href="mailto:cody.fisher@colmar.fr"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          cody.fisher@example.com
                        </a>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        <div className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-gray-800">
                          Intervenants
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
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
      </main>
    </AdminLayout>
  );
}
