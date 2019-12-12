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
  setOrders
}) {
  return openOrderDialog ? (
    <>
      <DialogShadow />
      <Dialog>
        <DialogContent>
          <h2> 🚙 🚴‍♂️ Your Order is on the way! 🍕 💖</h2>
          <p style={{ textAlign: "center" }}>
            We've got your email with the order. Thanks for choosing WOOP Pizza
          </p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={() => {
              setOrders([]);
              setOpenOrderDialog();
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
