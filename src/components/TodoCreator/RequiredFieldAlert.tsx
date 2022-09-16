type RequiredFieldAlertProps = {
  message: string;
};

function RequiredFieldAlert(props: RequiredFieldAlertProps) {
  return <div style={{ color: 'red', fontSize: '0.8rem', marginLeft: '10px', fontWeight: '600' }}>{props.message}</div>;
}

export default RequiredFieldAlert;
