import { Alert, AlertTitle } from "@mui/material";

const ErrorNotification = ({
  action,
  failed
}:{
  action: string,
  failed: boolean
}) => {
  
  return(
    <div
      style={{
        position: "absolute",
        bottom: 50,
        backgroundColor: "white"
      }}
    >
      <Alert
        variant="outlined"
        severity="error"
      >
        <AlertTitle>Error</AlertTitle>
        Failed to {action}. Please check your network connectivity.
      </Alert>
    </div>
  );
}

export default ErrorNotification;
