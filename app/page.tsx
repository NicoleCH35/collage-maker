import Collage from "@/components/grid/collage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"><p>Upload</p></div>
        </div>
      </aside>

      <div className="p-4 ml-64 h-full">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-full">
          <Collage />
        </div>
      </div>
    </main>
  );
}

// <div className="flex flex-row">
//   <div className="height-full bg-slate-800 p-2 shadow-md"><p>Side bar</p></div>
//   <div className="size-full grow bg-slate-600"><p>Main content</p></div>
// </div>
