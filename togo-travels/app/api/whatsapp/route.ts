import { NextResponse } from "next/server";



export async function POST(req:Request){
    const body = await req.json();

    const emailProps = {
        fullName: `${body.nom} ${body.prenom}`,
        email: body.email,
        message: body.message
    }

}