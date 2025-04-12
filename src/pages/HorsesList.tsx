import React, { Suspense, useEffect, useMemo, useState } from "react";
import { fetchHorses } from "../services/horseService";
import { Horse } from "../types/Horse";
import HorseSearch from "../components/HorseSearch/HorseSearch";
import Pagination from "../components/Pagination/Pagination";
import Loading from "../components/shared/Loading/Loading";
import ErrorMessage from "../components/shared/ErrorMessage/ErrorMessage";
const HorseGrid = React.lazy(() => import("../components/HorseGrid/HorseGrid"));

const HorsesList: React.FC = () => {
  const [horses, setHorses] = useState<Horse[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchHorses();
        setHorses(data?.data?.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const filteredHorses = useMemo(() => {
    return horses.filter((horse) =>
      horse.name.toLowerCase().includes(search.toLowerCase()) ||
      horse.breed.toLowerCase().includes(search.toLowerCase())
    );
  }, [horses, search]);  
  

  const totalPages = Math.ceil(filteredHorses.length / itemsPerPage);
  const paginatedHorses = filteredHorses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main style={{ padding: "20px" }}>
      <h1>قائمة الخيول</h1>
      <HorseSearch search={search} setSearch={setSearch} />

      {loading ? (
        <p><Loading /></p>
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <Suspense fallback={<Loading text="جاري تحميل الخيول..." />}>
            <HorseGrid horses={paginatedHorses} />
          </Suspense>

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </main>
  );
};

export default HorsesList;