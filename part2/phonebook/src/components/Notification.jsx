const Notification = ({ addedMessage, errorMessage }) => {
  if (addedMessage === null && errorMessage === null) {
    return null;
  }

  const className = addedMessage !== null ? "message" : "errorMessage";
  const message = addedMessage !== null ? addedMessage : errorMessage;

  return (
    <>
      <div className={className}>{message}</div>
    </>
  );
};

export default Notification;
