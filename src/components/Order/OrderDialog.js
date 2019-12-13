import React from "react";
import {
  Dialog,
  DialogContent,
  DialogShadow,
  DialogFooter,
  ConfirmButton
} from "../Dialog/Dialog";

export default function OrderDialog({
  openOrderDialog,
  setOpenOrderDialog,
  setOrders,
  setDisplayOrder
}) {
  return openOrderDialog ? (
    <>
      <DialogShadow />
      <Dialog>
        <DialogContent>
          <h2>
            {" "}
            <span role="img" aria-label="emoji">
              🚙 🚴‍♂️
            </span>{" "}
            Your Order is on the way!
            <span role="img" aria-label="emoji">
              🍕 💖
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            We've got your email with the order. Thanks for choosing WOOP Pizza
          </p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={() => {
              setOrders([]);
              setOpenOrderDialog();
              setDisplayOrder(false);
            }}
          >
            I'm still hungry
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : (
    <div />
  );
}
