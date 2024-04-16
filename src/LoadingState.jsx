import { useEffect, useState } from "react";
import "./App.css";

function LoadingState() {
  const [data, setData] = useState();
  const [id, setId] = useState(2);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pets-v2.dev-apis.com/pets?id=${id}`
      );
      const responseData = await response.json();
      setData(responseData.pets);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return <>{loading ? <p>Loading...</p> : <p>{data[0].name}</p>}</>;
}

export default LoadingState;
