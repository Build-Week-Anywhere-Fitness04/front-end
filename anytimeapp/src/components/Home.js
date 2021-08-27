import React, { useEffect } from "react";
// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
import Nav from "./Nav";
// import {
//   BadgeCheckIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
//   CollectionIcon,
//   SearchIcon,
//   SortAscendingIcon,
//   StarIcon,
// } from "@heroicons/react/solid";
// import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { auth } from "./Firebase";
import UserHome from "./HomeComponents/UserHome";
import InstructorHome from "./HomeComponents/InstructorHome";
import { db } from "./Firebase";
import { useState } from "react";
// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Domains", href: "#", current: false },
// ];
// const userNavigation = [
//   { name: "Your Profile", href: "#" },
//   { name: "Settings", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Domains", href: "#", current: false },
// ];
// const userNavigation = [
//   { name: "Your Profile", href: "#" },
//   { name: "Settings", href: "#" },
//   { name: "Sign out", href: "#" },
// ];
// const projects = [
//   {
//     name: "Workcation",
//     href: "#",
//     siteHref: "#",
//     repoHref: "#",
//     repo: "debbielewis/workcation",
//     tech: "Laravel",
//     lastDeploy: "3h ago",
//     location: "United states",
//     starred: true,
//     active: true,
//   },
//   // More projects...
// ];
// const activityItems = [
//   {
//     project: "Workcation",
//     commit: "2d89f0c8",
//     environment: "production",
//     time: "1h",
//   },
//   // More items...
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [userType, setUserType] = useState("");

  const fetchUser = async () => {
    const userResponse = db.collection("users");
    console.log(userResponse);
    userResponse.get().then((res) => {
      // console.log(res);
      // const ohGodPleaseWork = res._delegate.query._path.segments[0].toString();
      setUserType(res._delegate.query._path.segments[0].toString());
      // console.log(userType);
      // console.log(ohGodPleaseWork);
      // return ohGodPleaseWork;
    });
    // setUserType(ohGodPleaseWork);
    // console.log(userData);
  };

  // console.log(userType, "usertype");

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {/* Background color split screen for large screens */}
      <div
        className="fixed top-0 left-0 w-1/2 h-full bg-white"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
        aria-hidden="true"
      />
      <div className="relative min-h-screen flex flex-col">
        {/* Navbar */}
        <Nav />
        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 min-w-0 bg-white xl:flex">
            {/* Account profile */}
            <div className="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
              <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1 space-y-8">
                    <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                      {/* Profile */}

                      <UserHome />

                      {/* <div>
                          <ul role="list" className="divide-y divide-gray-200">
                            {activityItems.map((item) => (
                              <li key={item.commit} className="py-4">
                                <div className="flex space-x-3">
                                  <img
                                    className="h-6 w-6 rounded-full"
                                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                                    alt=""
                                  />
                                  <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between">
                                      <h3 className="text-sm font-medium">
                                        You
                                      </h3>
                                      <p className="text-sm text-gray-500">
                                        {item.time}
                                      </p>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                      Deployed {item.project} ({item.commit} in
                                      master) to {item.environment}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <div className="py-4 text-sm border-t border-gray-200">
                            <a
                              href="#"
                              className="text-indigo-600 font-semibold hover:text-indigo-900"
                            >
                              View all C <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects List */}
          {/* <div className="bg-white lg:min-w-0 lg:flex-1">
            <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
              <div className="flex items-center">
                <h1 className="flex-1 text-lg font-medium">Projects</h1>
                <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <Menu as="div" className="relative">
                  <Menu.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <SortAscendingIcon
                      className="mr-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Sort
                    <ChevronDownIcon
                      className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Name
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Date modified
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Date created
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>
              </div>
            </div>

            <div>
              <ClassList />
            </div>
          </div> */}
          {/* Activity feed */}
          {/* <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
            <div className="pl-6 lg:w-80">
              <div className="pt-6 pb-2">
                <h2 className="text-sm font-semibold">
                  Lest Grab from an API and display a list of different workout
                  routine articles or diet foods or something like that here
                </h2>
              </div>
              <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                  <div>
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                      Press
                    </h2>
                    <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                      <p className="text-xl text-gray-500">
                        Get weekly articles in your inbox on how to grow your
                        business.
                      </p>
                      <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                        <div>
                          <label htmlFor="email-address" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email-address"
                            name="email-address"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                          <button
                            type="button"
                            className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                          >
                            Notify me
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
