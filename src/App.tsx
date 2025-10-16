import { useState, type ChangeEvent, type FormEvent } from "react";

const dbData = [
  { title: "Become a Professional Software Developer" },
  { title: "Get Physically Fit" },
  { title: "Earn 100K per month" },
  { title: "Purchase a House" },
  { title: "Start a Business" },
];

export default function App() {
  const [issues, setIssues] = useState(dbData);
  const [inputValue, setInputValue] = useState("");

  const issueList = issues.map((issue) => <p>{issue.title}</p>);

  const addIssue = (e: FormEvent) => {
    e.preventDefault();
    const newIssue = { title: inputValue };
    dbData.push(newIssue);
    setIssues(dbData);
    setInputValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>Issue Tracker</h1>
      <div>{issueList}</div>
      <form onSubmit={addIssue}>
        <input type="text" onChange={handleChange} value={inputValue} />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}
