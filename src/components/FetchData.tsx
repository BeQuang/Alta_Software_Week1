import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    // Giả sử fetch API
    setTimeout(() => {
      setData(["Task 1", "Task 2", "Task 3"]);
    }, 2000);
  }, []); // Chỉ chạy một lần khi component mount

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default FetchData;
