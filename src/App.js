import { Accordion } from "./accordion";
import "./styles.css";

export default function App() {
  const accordionItems = [
    { title: "Section 1", content: "This is the content for Section 1" },
    { title: "Section 2", content: "This is the content for Section 2" },
    { title: "Section 3", content: "This is the content for Section 3" },
    { title: "Section 4", content: "This is the content for Section 4" },
  ];
  return (
    <div className="App">
      <h1>React Accordion</h1>
      <div className="accordion">
        {accordionItems.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
