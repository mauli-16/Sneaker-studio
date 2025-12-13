import { NextResponse } from "next/server";//send a response from nextjs api route
import { users } from "@/lib/users";
import bcrypt from "bcryptjs";


export async function POST(req: Request) {
    const { email, password } = await req.json();
    if (!email || !password) {
        return NextResponse.json({
            message:"missing fields"
        },{
            status:400
        })

    }
    const user=users.find((u)=>{
        u.email===email;
    })
   if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      
    );
  }


    const pass=await bcrypt.compare(password,user.password);
    if(!pass){
        return NextResponse.json({
            message:"Invalid password"
        })
    }
    return NextResponse.json(
    { message: "Login successful" },
  );
}

