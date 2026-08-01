function Loading({ isLoading, aboutPageStatus }) {
  return (
    <div
      className={
        (!isLoading && "loading hide") ||
        (aboutPageStatus && "loading hide") ||
        (isLoading && "loading")
      }
    >
      Loading...
    </div>
  );
}

export { Loading };
