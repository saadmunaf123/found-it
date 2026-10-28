import Dashboard from "./components/home/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <div>
    <main className="flex flex-1 w-full flex-col mx-auto min-h-20 w-full max-w-6xl py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10">
        <Dashboard/>
    </main>
  </div>
  );
}
