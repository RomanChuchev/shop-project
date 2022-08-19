import React, { useState, useEffect } from "react";
import "./alertBye.css";

function AlertBye({ name = "", closeAlertBye = Function.prototype }) {
  const [classes, setClasses] = useState(
    "alert alert-dismissible alert-success alert-bye-position text-light"
  );

  const close = () => {
    setClasses(
      "alert alert-dismissible alert-success alert-bye-position text-light hidden"
    );
  };

  useEffect(() => {
    setClasses(
      "alert alert-dismissible bg-success alert-bye-position text-black"
    );
    const timerId = setTimeout(() => closeAlertBye(), 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name, closeAlertBye]);

  return (
    <div className={classes}>
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          <strong>Товары успешно оплачены!</strong>{" "}
        </font>
      </font>
    </div>
  );
}

export { AlertBye };
