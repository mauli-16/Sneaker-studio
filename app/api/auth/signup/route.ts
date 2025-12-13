import { NextResponse } from "next/server";//send a response from nextjs api route
import bcrypt from "bcryptjs";
type User = {
  email: string;
  password: string;
};

const users: User[] = [];
export async function POST(req: Request) {
    const { email, password } = await req.json();
    if (!email || !password) {
        return NextResponse.json({
            message:"missing fields"
        },{
            status:400
        })

    }
    const existingUser=users.find((u)=>{
        u.email===email;
    })
    if(existingUser){
        return NextResponse.json({
            message:"user already exists"
        })
    }

    const hashedpass=await bcrypt.hash(password,10);
    users.push({email,password:hashedpass});
    return NextResponse.json({
        message:"user created successfully"
    })
}

