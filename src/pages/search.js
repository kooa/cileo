import PatientLayout from "../layouts/PatientLayout";

function Activity({ children }) {
  return (
    <a
      href="#"
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-blue-100 text-blue-800"
    >
      {children}
    </a>
  );
}

function TableActivity() {
  return (
    <div className="bg-white-100 px-2 py-1 border sm:rounded-md border-gray-100 shadow-sm">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-1 text-center" />
            <th className="py-1 text-center">lun</th>
            <th className="py-1 text-center">mar</th>
            <th className="py-1 text-center">mer</th>
            <th className="py-1 text-center">jeud</th>
            <th className="py-1 text-center">vend</th>
            <th className="py-1 text-center">sam.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-1 text-gray-500 text-center">8:00</td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center">
              <Activity>test</Activity>
            </td>
          </tr>
          <tr>
            <td className="py-1 text-gray-500 text-center">10:00</td>
            <td className="py-1 text-center">
              <Activity>test</Activity>
            </td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
          </tr>
          <tr>
            <td className="py-1 text-gray-500 text-center">12:00</td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center">
              <Activity>test</Activity>
            </td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
          </tr>
          <tr>
            <td className="py-1 text-gray-500 text-center">14:00</td>
            <td className="py-1 text-center">
              <Activity>test</Activity>
            </td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
          </tr>
          <tr>
            <td className="py-1 text-gray-500 text-center">16:00</td>
            <td className="py-1 text-center">
              <Activity>test</Activity>
            </td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center">
              <Activity>test</Activity>
            </td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center">
              <Activity>test</Activity>
            </td>
          </tr>
          <tr>
            <td className="py-1 text-gray-500 text-center">18:00</td>
            <td className="py-1 text-center">
              <Activity>test</Activity>
            </td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center">
              <Activity>test</Activity>
            </td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
            <td className="py-1 text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function Search() {
  return (
    <>
      <PatientLayout>
        <div className="bg-white py-5 border-b border-gray-200 sm:px-6 sm:rounded-md shadow">
          {/* <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
--> */}
          <div className="px-4 py-2">
            <label
              for="activity-type"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              type d'activité
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="activity-type"
                className="form-input block w-full sm:text-sm sm:leading-5"
                placeholder="un placeholder à définir"
              />
            </div>
          </div>

          <div className="overflow-hidden py-2">
            <ul>
              <li>
                <div className="px-4">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">
                          Strasbourg
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-600">
                          Vous pouvez cliquer sur une activé pour vous inscrire.
                        </p>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <TableActivity />
                    </div>
                  </div>
                </div>
              </li>
              {/* <li className="border-t border-gray-200"></li>
              <li className="border-t border-gray-200"></li> */}
            </ul>
          </div>
        </div>
      </PatientLayout>
    </>
  );
}
