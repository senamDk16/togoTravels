import ContactEmail from "@/emails/contactEmail";
import { NextResponse } from "next/server";
import { CreateEmailOptions, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)


export async function POST(req:Request){
    const body = await req.json();

    const emailProps = {
        fullName: `${body.nom} ${body.prenom}`,
        email: body.email,
        message: body.message
    }

    

    const payload:CreateEmailOptions = {
        from: body.email,
        to: 'dekusm88@gmail.com',
        subject: `Contact Togo Travels Message de ${body.nom} ${body.prenom}`,
        react: ContactEmail(emailProps)
    }
    // return NextResponse.json(payload)
    try{
        const {data, error} = await resend.emails.send(payload)

        if(error){
            return NextResponse.json({error}, {status: 500})
        }

        return NextResponse.json(data)
    }catch (error){
        return NextResponse.json({error}, {status: 500})
    }

    return NextResponse.json(
        {
            data: body
        }
    )
}