"use client";
import { sendStkPush } from "@/actions/mpesa/stkPush";
import { stkPushQuery } from "@/actions/mpesa/stkPushQuery";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAppStore from "@/stores/appStore";
import { useState } from "react";
import { toast } from "sonner";
import StkPushQueryLoading from "../StkPushQueryLoading";

interface dataFromForm {
  phone: string;
  credits: number;
}

export function PaymentDialog() {
  const { isPaymentDialogOpen, closePaymentDialog } = useAppStore();
  const [stkQueryLoading, setStkQueryLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataFromForm, setDataFromForm] = useState<dataFromForm>({
    phone: "",
    credits: 0,
  });

  //query logic
  var reqcount = 0;

  const stkPushQueryWithIntervals = (CheckoutRequestID: string) => {
    const timer = setInterval(async () => {
      reqcount += 1;

      if (reqcount === 15) {
        //handle long payment
        clearInterval(timer);
        setStkQueryLoading(false);
        setLoading(false);
        toast.error("You took too long to pay");
      }

      const { data, error } = await stkPushQuery(CheckoutRequestID);

      if (error) {
        if (error.response.data.errorCode !== "500.001.1001") {
          setStkQueryLoading(false);
          setLoading(false);
          toast.error(error?.response?.data?.errorMessage);
        }
      }

      if (data) {
        if (data.ResultCode === "0") {
          clearInterval(timer);
          setStkQueryLoading(false);
          setLoading(false);
          setDataFromForm({
            phone: "",
            credits: 0,
          })
          toast.success("Payment received successfully");
          closePaymentDialog()
        } else {
          clearInterval(timer);
          setStkQueryLoading(false);
          setLoading(false);
          toast.error(data?.ResultDesc);
        }
      }
    }, 2000);
  };

  //end of query
  const handleSubmit = async () => {
    setLoading(true);

    const formData = {
      mpesa_number: dataFromForm.phone.trim(),
      credits: dataFromForm.credits,
    };

    const kenyanPhoneNumberRegex =
      /^(07\d{8}|01\d{8}|2547\d{8}|2541\d{8}|\+2547\d{8}|\+2541\d{8})$/;

    if (!kenyanPhoneNumberRegex.test(formData.mpesa_number)) {
      setLoading(false);
      return toast.error("Invalid mpesa number");
    }

    const { data: stkData, error: stkError } = await sendStkPush(formData);

    if (stkError) {
      setLoading(false);
      return alert(stkError);
    }

    const checkoutRequestId = stkData.CheckoutRequestID;

    setStkQueryLoading(true);
    stkPushQueryWithIntervals(checkoutRequestId);
  };

  return (
    <Dialog open={isPaymentDialogOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[425px]">
        {stkQueryLoading ? (
          <StkPushQueryLoading phone={dataFromForm.phone} />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Recharge Credits</DialogTitle>
              <DialogDescription>
                Enter The Number Of Credits You Would like to purchase
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="credits" className="text-right">
                  Credits
                </Label>
                <Input
                  id="credits"
                  className="col-span-3"
                  name="credits"
                  type="number"
                  value={dataFromForm.credits}
                  onChange={(e) =>
                    setDataFromForm({
                      ...dataFromForm,
                      credits: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  className="col-span-3"
                  name="phone"
                  type="number"
                  value={dataFromForm.phone}
                  onChange={(e) =>
                    setDataFromForm({
                      ...dataFromForm,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={loading} onClick={handleSubmit}>
                {loading ? "Processing.." : "Make Payment"}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
