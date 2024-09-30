import { NextResponse } from "next/server"

export async function GET(){
	const users = {
		name: "tet",
		idade: 32
	}

	return new NextResponse(JSON.stringify(users), {
		status: 200,
		statusText: "OK",
	})
}