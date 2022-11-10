import React, { useState } from "react";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  return (
		<section
			className={`h-full hidden md:block ${sidebar ? 'block' : 'hidden'}`}
		>
			<div className="z-30 absolute left-5 top-5">
				<button
					className="p-2 text-gray-700 rounded-md outline-none  focus:border-gray-400 focus:border "
					onClick={() => setSidebar(!sidebar)}
				>
					{sidebar ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 text-white "
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 "
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>
			{sidebar && (
				<div className="flex">
					<div className="flex flex-col h-screen p-3 bg-green-800 shadow w-60 items-center">
						<div className="space-y-3">
							<div className="flex items-center">
								<h2 className="text-2xl font-bold  mt-40">
									Endoxous
								</h2>
							</div>
							<div className="flex-1">
								<ul className="pt-2 pb-4 space-y-1 text-sm items-center">
									<li className="rounded-sm">
										<a
											href="#"
											className="flex items-center p-2 space-x-3 rounded-md"
										>
											<span className="text-gray-300">
												Home
											</span>
										</a>
									</li>

									<li className="rounded-sm">
										<a
											href="#"
											className="flex items-center p-2 space-x-3 rounded-md"
										>
											<span className="text-gray-300">
												Orders
											</span>
										</a>
									</li>

									<li className="rounded-sm">
										<a
											href="#"
											className="flex items-center p-2 space-x-3 rounded-md"
										>
											<span className="text-gray-300">
												Products
											</span>
										</a>
									</li>

									<li className="rounded-sm">
										<a
											href="#"
											className="flex items-center p-2 space-x-3 rounded-md"
										>
											<span className="text-gray-300">
												Payments
											</span>
										</a>
									</li>

									<li className="rounded-sm">
										<a
											href="#"
											className="flex items-center p-2 space-x-3 rounded-md"
										>
											<span className="text-gray-300">
												Nurseries
											</span>
										</a>
									</li>

									<li className="rounded-sm">
										<a
											href="#"
											className="flex items-center p-2 space-x-3 rounded-md"
										>
											<span className="text-red-600 ">
												Logout
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
  );
}
