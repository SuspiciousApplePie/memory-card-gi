function About({ aboutPageStatus, setAboutPageStatus }) {
  return (
    <div
      className={
        (aboutPageStatus && "about-page") ||
        (!aboutPageStatus && "about-page hide")
      }
    >
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        voluptates. Dolorum adipisci, itaque consectetur ipsum, et deserunt
        facere illum, eveniet impedit quisquam quaerat maiores? Ullam ipsum
        culpa aliquam id veniam. <br></br>
        <br></br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
        quod saepe laboriosam? Eveniet qui, facilis quod impedit, itaque quasi
        ipsum sapiente eius consequatur aperiam suscipit dicta consequuntur?
        Enim, temporibus quibusdam.
      </p>
      <button onClick={() => setAboutPageStatus(false)}>Back</button>
    </div>
  );
}

export { About };
