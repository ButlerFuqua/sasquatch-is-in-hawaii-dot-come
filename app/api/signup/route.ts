import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js'
import Joi from 'joi';
import axios from 'axios';

const supabaseUrl = 'https://gvvpxhxpdbpczyswpcsa.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY_ISM
const supabase = createClient(supabaseUrl, supabaseKey ?? '')

const beehiibPubId = process.env.BEEHIIV_PUB_ID
const beehiibApiKey = process.env.BEEHIIV_API_KEY

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
    let { email } = bodyData;
    email = email.trim().toLowerCase();

    const valid = await validateEmail(email);
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

    let { data: subscribers, error } = await supabase
        .from('subscribers')
        .select('email')
        .eq('email', email)

    if (error || !subscribers) {
        console.error(error);
        return NextResponse.json(
            {
                message: `Error`
            },
            {
                status: 500,
            },
        );
    }

    if (subscribers?.length) {
        // Send success instead of error. Either way, they've subscribe and it hides who has already subscribed
        // return res.status(409).json({ message: 'Already Subscribed' });
        return NextResponse.json(
            {
                message: `Success!`
            },
            {
                status: 201,
            },
        );
    }

    // Add to NewsLetter - Behiiv

    /*
        Example:
        curl --request POST \
        --url https://api.beehiiv.com/v2/publications/publicationId/subscriptions \
        --header 'Accept: application/json' \
        --header 'Authorization: Bearer 123' \
        --header 'Content-Type: application/json' \
        --data '{
            "email": "bruce.wayne@wayneenterprise.com",
            "reactivate_existing": false,
            "send_welcome_email": false,
            "utm_source": "WayneEnterprise",
            "utm_campaign": "fall_2022_promotion",
            "utm_medium": "organic",
            "referring_site": "www.wayneenterprise.com/blog",
            "custom_fields": [
                {
                "name": "First Name",
                "value": "Bruce"
                },
                {
                "name": "Last Name",
                "value": "Wayne"
                }
            ]
        }'
    */

    try {
        await axios.post(`https://api.beehiiv.com/v2/publications/${beehiibPubId}/subscriptions`,
            {
                email,
                reactivate_existing: false,
                send_welcome_email: false,
                utm_source: "Sasquatch is in Hawaii",
                utm_campaign: "ongoing_promotion",
                utm_medium: "organic",
                referring_site: "www.sasquatchisinhawaii.com/api",
            },
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${beehiibApiKey}`,
                    'Content-Type': 'application/json',
                }
            }
        );
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {
                message: `Error`
            },
            {
                status: 500,
            },
        );
    }


    // End add to newsletter

    const { data, error: createError } = await supabase
        .from('subscribers')
        .insert([
            { email },
        ])
        .select()

    if (createError) {
        console.log(createError)
        return NextResponse.json(
            {
                message: `Error`
            },
            {
                status: 500,
            },
        );
    }

    return NextResponse.json(
        {
            message: `Success!`
        },
        {
            status: 201,
        },
    );
}

export { handler as GET, handler as POST }