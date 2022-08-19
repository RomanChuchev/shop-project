import React, { useEffect } from "react";
import "./alertBye.css";

function AlertBye({ name = "", closeAlertBye = Function.prototype }) {
  useEffect(() => {
    const timerId = setTimeout(() => closeAlertBye(), 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name, closeAlertBye]);

  return (
    <div className="alert alert-dismissible alert-success alert-bye-position text-light">
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          <strong>Товары успешно оплачены!</strong>{" "}
        </font>
      </font>
    </div>
  );
}

export { AlertBye };
