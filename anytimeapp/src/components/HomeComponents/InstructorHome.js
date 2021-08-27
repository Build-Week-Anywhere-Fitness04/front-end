import React from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import Nav from "./Nav";
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
// import ClassList from "../ClientPage/ClassList";
// import { auth } from "./Firebase";
// import { Route } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Domains", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function InstructorHome() {
  return <h1>Hello Instructor</h1>;
}
