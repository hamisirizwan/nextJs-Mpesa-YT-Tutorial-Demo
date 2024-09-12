import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const searchParams = request.nextUrl.searchParams;

  const userId = searchParams.get("userId");
  //   const jsonString = decodeURIComponent(mybody as string);
  //   const jsonData = JSON.parse(jsonString);

  if (!userId) {
    return NextResponse.json("ok saf");
  }
  if (!data.Body.stkCallback.CallbackMetadata) {
    //for failed transactions
    // console.log(data.Body.stkCallback.ResultDesc);
    return NextResponse.json("ok saf");
  }

  //lets extract the values from the callback metadata

  const body = data.Body.stkCallback.CallbackMetadata;
  const amountObj = body.Item.find((obj: any) => obj.Name === "Amount");
  const amount = amountObj.Value;

  //mpesa code
  const codeObj = body.Item.find(
    (obj: any) => obj.Name === "MpesaReceiptNumber"
  );
  const mpesaCode = codeObj.Value;

  //phone number - in recent implimentations, it is hashed.
  const phoneNumberObj = body.Item.find(
    (obj: any) => obj.Name === "PhoneNumber"
  );
  const phoneNumber = phoneNumberObj.Value.toString();

  try {
    //complete your logic - Eg saving transaction to db

    const creditsToAdd = Number(amount) * 10
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        credits: true,
      },
    });
    
    if(!user){
      return NextResponse.json("ok saf");
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        credits: user.credits === null 
          ? creditsToAdd 
          : { increment: creditsToAdd },
      },
    });

    
    //revalidate the dashboard path
    revalidatePath('/account/dashboard')
    return NextResponse.json("ok", { status: 200 });
  } catch (error: any) {
    return NextResponse.json("ok");
  }
}
