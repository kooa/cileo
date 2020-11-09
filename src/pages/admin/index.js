import { useState } from "react";
import { toJson } from "../../tools/tools";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import frLocale from "@fullcalendar/core/locales/fr";
import AdminLayout from "../../layouts/AdminLayout";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import { db } from "../../prisma";

export default function Admin({ role, user }) {
  return (
    // <!--
    //   Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    //   Read the documentation to get started: https://tailwindui.com/documentation
    // -->
    <AdminLayout>
      <div className="pt-10 pb-2">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-grow text-3xl font-bold leading-tight text-gray-900">
                Accueil
              </h1>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm leading-5 font-medium text-gray-700 sr-only"
                >
                  Sites
                </label>
                <select
                  id="location"
                  className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>Colmar</option>
                  <option selected>Strasbourg</option>
                  <option>Selestat</option>
                </select>
                <span className="inline-flex rounded-md shadow-sm mt-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                  >
                    Ajouter un utilisateur
                  </button>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="mt-8">
              {role.libelle}
              <br />
              {role.createdAt}
              <br />
              {user[0].firstname}
              <br />
              <FullCalendar
                slotMinTime="07:00"
                slotMaxTime="20:30"
                locale={frLocale}
                initialView="timeGridWeek"
                plugins={[timeGridPlugin]}
                allDaySlot={false}
                editable={true}
                events={[
                  {
                    start: "2020-09-28 08:00",
                    end: "2020-09-28 10:00",
                    title: "Conf 1 ....",
                  },
                  {
                    start: "2020-09-29 08:00",
                    end: "2020-09-29 10:00",
                    title: "Conf 2 ....",
                  },
                  {
                    start: "2020-09-29 10:00",
                    end: "2020-09-29 12:00",
                    title: "Conf 3 ....",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const role = await db.role.findOne({ where: { code: "ADMIN" } });
  const dataRole = toJson(role);

  const user = await db.user.findMany({ orderBy: { createdAt: "asc" } });
  const dataUser = toJson(user);

  return {
    props: {
      role: dataRole,
      user: dataUser,
    },
  };
}
