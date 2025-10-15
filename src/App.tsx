const dbData = [
  { title: "Become a Professional Software Developer" },
  { title: "Get Physically Fit" },
  { title: "Earn 100K per month" },
  { title: "Purchase a House" },
  { title: "Start a Business" },
];

export default function App() {
  const issues = dbData.map((issue) => <p>{issue.title}</p>);

  return (
    <>
      <h1>Issue Tracker</h1>
      <div>{issues}</div>
    </>
  );
}
