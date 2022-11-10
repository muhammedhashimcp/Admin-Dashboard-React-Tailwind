import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function NavBar() {

  return (
		<nav className="w-full bg-white shadow">
			<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
				<div className="ml-10">
					<div className="flex items-center justify-between py-3 md:py-5 md:block">
						<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
							<li className="text-gray-600 hover:text-blue-600">
								<a href="javascript:void(0)">Home</a>
							</li>
							<li className="text-gray-600 hover:text-blue-600">
								<a href="javascript:void(0)">Product</a>
							</li>
							<li className="text-gray-600 hover:text-blue-600">
								<a href="javascript:void(0)">About US</a>
							</li>
							<li className="text-gray-600 hover:text-blue-600">
								<a href="javascript:void(0)">Contact US</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="ml-10">
					<a href="javascript:void(0)">
						<h2 className="text-2xl  font-bold">LOGO</h2>
					</a>
				</div>
			</div>
		</nav>
  );
}
