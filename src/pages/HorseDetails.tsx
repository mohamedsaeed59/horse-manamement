import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHorseDetails } from "../services/horseService";
import { Horse } from "../types/Horse";
const HorseDetailsHeader = React.lazy(() => import("../components/HorseDetailsHeader/HorseDetailsHeader"));

const HorseDetails: React.FC = () => {
  const { id } = useParams();
  const [horse, setHorse] = useState<Horse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchHorse = async () => {
      try {
        const data = await getHorseDetails(id as string);
        setHorse(data.horse);
      } catch (err) {
        setError("حدث خطأ أثناء تحميل بيانات الحصان.");
      } finally {
        setLoading(false);
      }
    };

    fetchHorse();
  }, [id]);

  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p>{error}</p>;
  if (!horse) return <p>لم يتم العثور على الحصان.</p>;

  return (
    <main className="horse-details" style={{ padding: "20px" }}>
      <Suspense fallback={<p>جاري تحميل تفاصيل الحصان...</p>}>
        <HorseDetailsHeader horse={horse} />
      </Suspense>
    </main>
  );
};

export default HorseDetails;
