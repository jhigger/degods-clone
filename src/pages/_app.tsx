import { Montserrat } from "@next/font/google";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const font = Montserrat({
	subsets: ["latin"],
	weight: ["400", "600", "700", "800"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<div className={font.className}>
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
