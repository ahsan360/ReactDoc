import { useEffect, useState } from "react"; 
import "./App.css"; 

function UseEffect() {
  const [data, setData] = useState();
  const [id, setId] = useState(2);
  const [oncngId, setcngId] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pets-v2.dev-apis.com/pets?id=${id}`
      );
      const responseData = await response.json();
      setData(responseData.pets);
    };
    fetchData();
  }, [id]);
  const handleChange = (e) => {
    setcngId(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(), setId(oncngId);
        }}
      >
        <input name="id" onChange={(e) => handleChange(e)} />
        <button type="submit">Submit</button>
      </form>
      <br />
      {console.log(data[0])}
    </>
  );
}

export default UseEffect;
