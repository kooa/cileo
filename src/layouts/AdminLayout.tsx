import Link from "next/link";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import { useMemo, useState } from "react";

function AdminLink({
  href,
  className,
  activeClassName,
  children,
}: React.ComponentProps<"a"> & { href: string; activeClassName?: string }) {
  const router = useRouter();
  let isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={isActive ? activeClassName : className}
        // on indique que le lien est la page courante en accessibilité
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </a>
    </Link>
  );
}

function SvgLink({
  href,
  activeClassName,
  className,
  ...props
}: React.ComponentProps<"svg"> & { href?: string; activeClassName?: string }) {
  const router = useRouter();
  let isActive = router.pathname === href;

  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      className={isActive ? activeClassName : className}
    />
  );
}

const linkClassNames = {
  mobile:
    "group rounded-md py-2 px-4 flex items-center text-base leading-6 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150",
  mobileActive:
    "group flex items-center py-2 px-3 text-sm leading-5 font-medium text-purple-600 bg-purple-50 border-l-4 border-purple-600 focus:outline-none focus:bg-purple-100 transition ease-in-out duration-150",
  desktop:
    "group rounded-md py-2 px-4 flex items-center text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150",
  desktopActive:
    "group flex items-center px-3 py-2 text-sm leading-5 font-medium text-purple-600 bg-purple-50 border-l-4 border-purple-600 focus:outline-none focus:bg-purple-100 transition ease-in-out duration-150",
};

export default function AdminLayout({ children }: React.PropsWithChildren<{}>) {
  const [isOpen, setIsOpen] = useState(false);

  const links = useMemo(() => {
    return [
      {
        href: "/",
        label: "Retour à l'accueil",
        icon: (
          <SvgLink className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </SvgLink>
        ),
      },
      {
        href: "/admin",
        label: "Calendrier",
        icon: (
          <SvgLink
            href="/admin"
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            activeClassName="mr-3 h-6 w-6 text-purple-500 transition ease-in-out duration-150"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </SvgLink>
        ),
      },
      {
        href: "/admin/tiers",
        label: "Tiers",
        icon: (
          <SvgLink
            href="/admin/tiers"
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            activeClassName="mr-3 h-6 w-6 text-purple-500 transition ease-in-out duration-150"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </SvgLink>
        ),
      },
      {
        href: "/admin/posts",
        label: "Billet",
        icon: (
          <SvgLink
            href="/admin/posts"
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            activeClassName="mr-3 h-6 w-6 text-purple-500 transition ease-in-out duration-150"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </SvgLink>
        ),
      },
      {
        href: "/admin/theme",
        label: "Themes",
        icon: (
          <SvgLink
            href="/admin/theme"
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            activeClassName="mr-3 h-6 w-6 text-purple-500 transition ease-in-out duration-150"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </SvgLink>
        ),
      },
    ];
  }, []);

  return (
    <div className="h-screen bg-white overflow-hidden flex">
      <div className={`${!isOpen ? "hidden" : ""} md:hidden`}>
        <div className="fixed inset-0 z-40 flex">
          <Transition
            show={isOpen}
            className="fixed inset-0"
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute inset-0 bg-gray-600 opacity-75" />
          </Transition>

          <Transition
            show={isOpen}
            className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col"
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="absolute top-0 right-0 -mr-14 p-1">
              <button
                className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-600"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close sidebar</span>
              </button>
            </div>
            <div className="flex-shrink-0 px-4 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/v1/easywire-logo-purple-600-gray-900.svg"
                alt="Easywire"
              />
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="h-full flex flex-col">
                <div className="space-y-1">
                  {links.map((link) => (
                    <AdminLink
                      key={link.href}
                      href={link.href}
                      className={linkClassNames.mobile}
                      activeClassName={linkClassNames.mobileActive}
                    >
                      {link.icon}
                      {link.label}
                    </AdminLink>
                  ))}
                </div>
                <div className="mt-auto pt-10 space-y-1">
                  <AdminLink
                    href="#"
                    className={linkClassNames.mobile}
                    activeClassName={linkClassNames.mobileActive}
                  >
                    <svg
                      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Besoin d'aide ?
                  </AdminLink>

                  <AdminLink
                    href="#"
                    className={linkClassNames.mobile}
                    activeClassName={linkClassNames.mobileActive}
                  >
                    <svg
                      className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Déconnexion
                  </AdminLink>
                </div>
              </nav>
            </div>
          </Transition>
          <div className="flex-shrink-0 w-14">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-64 flex flex-col">
          <nav className="bg-gray-50 border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
            <div className="flex-shrink-0 px-4 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/v1/easywire-logo-purple-600-gray-900.svg"
                alt="Easywire"
              />
            </div>
            <div className="flex-grow mt-5 flex flex-col">
              <div className="flex-1 space-y-1">
                {links.map((link) => (
                  <AdminLink
                    key={link.href}
                    href={link.href}
                    className={linkClassNames.desktop}
                    activeClassName={linkClassNames.desktopActive}
                  >
                    {link.icon}
                    {link.label}
                  </AdminLink>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 block w-full">
              <AdminLink
                href="#"
                className="group rounded-md py-2 px-4 flex items-center text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
                activeClassName="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-purple-600 bg-purple-50 border-l-4 border-purple-600 focus:outline-none focus:bg-purple-100 transition ease-in-out duration-150"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Besoin d'aide ?
              </AdminLink>

              <AdminLink
                href="#"
                className="group rounded-md py-2 px-4 flex items-center text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
                activeClassName="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-purple-600 bg-purple-50 border-l-4 border-purple-600 focus:outline-none focus:bg-purple-100 transition ease-in-out duration-150"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Déconnexion
              </AdminLink>
            </div>
          </nav>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col">
        <div className="w-full max-w-4xl mx-auto md:px-8 xl:px-0">
          <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
            <button
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
              aria-label="Ouvrir le menu"
              onClick={() => setIsOpen(true)}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <div className="flex-1 flex justify-between px-4 md:px-0">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search_field" className="sr-only">
                    Recherche
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <svg
                        className="flex-shrink-0 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search_field"
                      className="h-full w-full rounded-md py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:hidden"
                      placeholder="Search"
                      type="search"
                    />
                    <input
                      id="search_field"
                      className="hidden h-full w-full rounded-md py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:block"
                      placeholder="Search jobs, applicants, and more"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500">
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <div className="sr-only">Notifications</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <main
          className="flex-1 overflow-y-auto focus:outline-none"
          tabIndex={0}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
