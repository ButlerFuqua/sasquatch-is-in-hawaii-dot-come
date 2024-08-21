import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js'
import Joi from 'joi';



const supabaseUrl = 'https://gvvpxhxpdbpczyswpcsa.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY_ISM
const supabase = createClient(supabaseUrl, supabaseKey ?? '')


type ResponseData = {
    message: string
}

const schema = Joi.object({
    email: Joi.string()
        // .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .email({ tlds: { allow: false } })
})

const validateEmail = async (email: string) => {
    try {
        await schema.validateAsync({ email });
        return true;
    }
    catch (err) {
        return false;
    }
}

async function handler(
    req: NextRequest,
    res: NextResponse
) {

    const bodyData = await req.json();

    let { fromEmail, messageBody, messageSubject, } = bodyData;
    fromEmail = fromEmail.trim().toLowerCase();
    messageBody = messageBody.trim();
    messageSubject = messageSubject ? messageSubject.trim() : undefined;

    const valid = await validateEmail(fromEmail);
    if (!valid) {
        return NextResponse.json(
            {
                message: `Error, Email may not be valid`
            },
            {
                status: 400,
            },
        );
    }

    const { data, error: createError } = await supabase
        .from('messages')
        .insert([
            {
                from_email: fromEmail,
                message_body: messageBody,
                message_subject: messageSubject,
            },
        ])
        .select()

    if (createError) {
        console.log(createError)
        return NextResponse.json(
            {
                message: 'Error'
            },
            {
                status: 500,
            },
        );
    }
    return NextResponse.json(
        {
            message: 'Success!'
        },
        {
            status: 201,
        },
    );
}

export { handler as GET, handler as POST }