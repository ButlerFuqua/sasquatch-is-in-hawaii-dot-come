import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gvvpxhxpdbpczyswpcsa.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY_ISM
const supabase = createClient(supabaseUrl, supabaseKey ?? '')


type ResponseData = {
    message: string
}

async function handler(
    req: NextRequest,
    res: NextResponse
) {

    const { count, error } = await supabase
        .from('subscribers')
        .select('email', { count: 'exact', head: true })

    if (error || !count) {
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

    return NextResponse.json(
        {
            count
        },
        {
            status: 200,
        },
    );
}

export { handler as GET, handler as POST }