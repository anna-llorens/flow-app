import BasicTabs from "./components/tabs";

export default function App() {
  return (
    <div style={{ marginLeft: "50px" }}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button>Allocate assets</button>
      </div>
      <BasicTabs />
    </div>
  );
}
