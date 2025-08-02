import React from "react";
import Link from "next/link";
const Logo = () => {
	return (
<Link href="/" className="text-2xl font-bold">
							<span className="font-black flex items-center gap-1">
								<span className=" dark:text-gray-500">{"</>"}</span>
								<span>
									<span className="text-gray-900 dark:text-white">Port</span>
									<span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-700">
										folio
									</span>
								</span>
							</span>
						</Link>
	);
};

export default Logo;
