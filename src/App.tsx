import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

type Issue = {
  title: String
}

export default function App() {
  const [issues, setIssues] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/issues`);
      if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setIssues(result);
    }

    fetchData();
   }, []);

  const issueList = issues.map((issue: Issue) => <p>{issue.title}</p>);

  // const addIssue = (e: FormEvent) => {
  //   e.preventDefault();
  //   const newIssue = { title: inputValue };
  //   dbData.push(newIssue);
  //   setIssues(dbData);
  //   setInputValue("");
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>Issue Tracker</h1>
      <div>{issueList}</div>
      <form onSubmit={() => {}}>
        <input type="text" onChange={handleChange} value={inputValue} />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}
