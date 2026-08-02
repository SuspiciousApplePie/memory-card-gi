import "./styles/Score.css";

function Score({ score, highScore }) {
  return (
    <aside>
      <span>Score: {score}</span>
      <span>High Score: {highScore}</span>
    </aside>
  );
}

export { Score };
