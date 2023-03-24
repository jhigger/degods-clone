import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create T3 App</title>
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center">
				<h1 className="text-5xl font-extrabold tracking-widest">
					Hello, World
				</h1>
			</main>
		</>
	);
};

export default Home;
