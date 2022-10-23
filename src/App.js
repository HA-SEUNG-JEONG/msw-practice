import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [badges, setBadges] = useState([]);
  console.log(badges.map((badge) => badge.rank));
  const [badge, setBadge] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch("badges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: badge,
    }).then((res) => {
      fetch("https://api.stackexchange.com/2.3/badges?order=desc&sort=rank&site=stackoverflow")
        .then((res) => res.json())
        .then((data) => {
          setBadge("");
          setBadges(data);
          setLoading(false);
        });
    });
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://api.stackexchange.com/2.3/badges?order=desc&sort=rank&site=stackoverflow")
      .then((res) => res.json())
      .then((data) => {
        setBadges(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <h2>할일 목록</h2>
      <ul>
        {badges.map((b, id) => (
          //badges로 map 한 후에 이 element를 JSX 코드에서 그대로 사용하려니 오류남
          <li key={id}>{b.award_count}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="새로운 할일"
          disabled={loading}
          value={badge}
          onChange={({ target: { value } }) => setBadge(value)}
        />
        <button disabled={!badge}>추가</button>
      </form>
    </div>
  );
}

export default App;
