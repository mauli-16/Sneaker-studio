import { NextResponse } from "next/server";//send a response from nextjs api route
import { users } from "@/lib/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

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
      const token = jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );
    return NextResponse.json(
    { message: "Login successful" },
  );
}

