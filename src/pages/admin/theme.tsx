import AdminLayout from "../../layouts/AdminLayout";

export default function ThemePage() {
  return (
    <AdminLayout>
      <div className="pt-10 pb-2">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-grow text-3xl font-bold leading-tight text-gray-900">
                Themes
              </h1>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="py-6">
              <div className="mt-8">todo theme</div>
            </div>
          </div>
        </main>
      </div>
    </AdminLayout>
  );
}
