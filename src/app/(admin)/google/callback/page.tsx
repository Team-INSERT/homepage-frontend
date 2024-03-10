"use client";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("./GetAccessToken"), { ssr: false });
export default Home;
