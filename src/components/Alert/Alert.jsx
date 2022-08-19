import React, { useState, useEffect } from "react";
import "./alert.css";

function Alert({ name = "", closeAlert = Function.prototype }) {
  const [classes, setClasses] = useState(
    "alert alert-dismissible alert-success alert-position text-light"
  );

  const close = () => {
    setClasses(
      "alert alert-dismissible alert-success alert-position text-light hidden"
    );
  };

  useEffect(() => {
    setClasses(
      "alert alert-dismissible alert-success alert-position text-light"
    );
    const timerId = setTimeout(() => closeAlert(), 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name, closeAlert]);

  return (
    <div className={classes}>
      <button type="button" className="btn-close" onClick={close}></button>

      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          <strong>{name}</strong> добавлен в корзину!{" "}
        </font>
      </font>
    </div>
  );
}

export { Alert };
