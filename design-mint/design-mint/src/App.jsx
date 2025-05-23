import { useEffect, useState } from 'react';

function App() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menus')
      .then(res => res.json())
      .then(data => setMenus(data))
      .catch(err => console.error(err));
  }, []);

  console.log(menus);
  

  return (
    <div>
      <h1>Menu List</h1>
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
