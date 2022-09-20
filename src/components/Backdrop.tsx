interface appProps {
  onCancel: React.MouseEventHandler;
}

function Backdrop({ onCancel }: appProps) {
  return <div className="backdrop" onClick={onCancel} />;
}

export default Backdrop;
