import React, { useState } from "react";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <section className={`h-full hidden md:block ${sidebar?"block":"hidden"}`}>
      <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-green-800 shadow w-60 items-center">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-white mt-40">Endoxous</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm items-center">
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span className="text-gray-300">Home</span>
                  </a>
                </li>

                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span className="text-gray-300">Orders</span>
                  </a>
                </li>

                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span className="text-gray-300">Products</span>
                  </a>
                </li>

                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span className="text-gray-300">Payments</span>
                  </a>
                </li>

                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span className="text-gray-300">Nurseries</span>
                  </a>
                </li>

                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span className="text-red-600 ">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
