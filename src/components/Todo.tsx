interface appProps {
  text: string;
}

function Todo({ text }: appProps) {
  const deleteHandler = () => {};

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
