import CoCursorProvider from "cocursor";
import Navbar from "@/components/commons/Navbar";

export default function Home() {
  return (
    <CoCursorProvider apiKey={process.env.NEXT_PUBLIC_COCURSOR_APIKEY!}>
      <Navbar />
    </CoCursorProvider>
  );
}
