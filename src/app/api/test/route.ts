import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET() {
  const supabase = await createClient()

  try {
    // Example call to Supabase to verify connection
    // In a real scenario, you'd fetch data here
    const { data, error } = await supabase.from('your_table_name').select('*').limit(1)

    if (error) {
      console.error('Supabase Setup Error:', error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(
      {
        message: 'API Route setup with Supabase connection active',
        data,
      },
      { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const supabase = await createClient()
  
  try {
    const body = await request.json()
    // process POST request...
    
    return NextResponse.json({
      message: 'POST request received successfully',
      body
    }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
