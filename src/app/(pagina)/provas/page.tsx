"use client";

import { useEffect, useState } from "react";
import SingleItem from "@/components/comp_home/SingleItem";
import { getAllProvas } from "../../../../api/api";
import LoadingOrFailed from "@/components/Optional/LoadingOrFailed";
import type { Prova } from "@/types/AllProvas";

export default function ProvasPage() {
  const [search, setSearch] = useState("");
  const [prova, setProva] = useState<Prova[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllProvas();
      setProva(data);
    }
    fetchData();
  }, []);

  if (!prova) {
    return <LoadingOrFailed />;
  }

  const filteredProvas = prova.filter((prova: Prova) =>
    prova.year.toString().includes(search)
  );

  return (
    <div>
      {/* Input de busca */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none w-full border border-blue-300 dark:border-yellow-500 p-5 pr-12 font-medium text-sm rounded-lg 
             bg-blue-50 dark:bg-blue-950 text-gray-700 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 
             transition-all duration-300 
             focus:border-blue-600 dark:focus:border-yellow-400 
             focus:ring focus:ring-blue-300 dark:focus:ring-yellow-500"
        placeholder="Pesquisar por ano..."
      />
      {/* Grid centralizado */}
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          {filteredProvas.map((currObj: Prova, index: number) => (
            <SingleItem {...currObj} key={`${currObj.title}-${index}`} />
          ))}
        </div>
      </div>
         
    </div>
  );
}
