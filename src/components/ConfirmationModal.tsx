type ConfirmationProps = {
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmationModal = ({ setConfirmation }: ConfirmationProps) => {
  return (
    <div className="confirmation-modal">
      <button onClick={() => setConfirmation(false)}>X</button>
      <h2>Tack för ditt mejl!</h2>
    </div>
  );
};

export default ConfirmationModal;
