
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 150, y: 50 }, data: { label: 'First node' } },
  { id: '2', position: { x: 150, y: 150 }, data: { label: 'Second node' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function App() {
  return (
    <>
    <h4>Flows app</h4>
    
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
    </>
  );
}