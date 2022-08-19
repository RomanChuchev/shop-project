import React, { useEffect, useContext } from "react";
import { ShopContext } from "../../context";
import "./alertBye.css";

function AlertBye() {
  const { name = "", closeAlertBye = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(() => closeAlertBye(), 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name, closeAlertBye]);

  return (
    <div className="alert alert-dismissible alert-success alert-bye-position text-black">
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          <strong>Товары успешно оплачены!</strong>{" "}
        </font>
      </font>
    </div>
  );
}

export { AlertBye };
