import "./styles/Messages.css";

function ErrorMessage({ error }) {
  return (
    <p
      className={
        (error.errMsg && "error-msg") || (!error.errMsg && "error-msg hide")
      }
    >
      {error.errMsg}
    </p>
  );
}

export { ErrorMessage };
