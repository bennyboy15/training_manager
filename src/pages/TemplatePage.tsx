
import { SortableTable } from "../components";
const columns: Array<{ key: 'name' | 'email' | 'age' | 'id'; label: string; sortable?: boolean }> = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'age', label: 'Age', sortable: true },
];

const users = [
    {id: 1, name: "Johnny Doe", email:"test@example.com", age:12},
    {id: 2, name: "Jane Doe", email:"test@example.com", age:12},
    {id: 3, name: "Mike Doe", email:"test@example.com", age:12},
]

function TemplatePage() {
    return (
        <div className="flex flex-row">
            <p>I AM CONTENT</p>
  
<SortableTable 
  data={users} 
  columns={columns} 
  rowKey="id"
/>
        </div>
    )
}

export default TemplatePage