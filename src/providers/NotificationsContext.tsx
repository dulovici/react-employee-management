/* eslint-disable @typescript-eslint/no-explicit-any */
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";

export const NotificationsContext = React.createContext<any>(undefined);
NotificationsContext.displayName = "Notifications Context";

const NotificationsProvider = (props: any) => {
  const [isShown, setIsShown] = useState(false);
  const [message, setMessage] = useState("");

  const notify = (message: string) => {
    setIsShown(true);
    setMessage(message);
  };

  const closeNotification = () => {
    setIsShown(false);
  };

  const values = React.useMemo(() => ({ notify }), [isShown, message]);

  return (
    <NotificationsContext.Provider value={values} {...props}>
      <Snackbar
        open={isShown}
        autoHideDuration={2000}
        onClose={() => closeNotification()}
        message={message}
      />
      {props.children}
    </NotificationsContext.Provider>
  );
};

const useNotificationsContext = () => {
  const context = React.useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      `useNotificationsContext must be used within an ${NotificationsContext.displayName}`
    );
  }
  return context;
};

export { NotificationsProvider, useNotificationsContext };
