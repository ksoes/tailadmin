import { NextResponse } from "next/server";

/*
* API Route 생성
* */
export async function POST(req: Request) {
    const body = await req.json();
    const { id, password } = body;

    if (!id || !password) {
        return NextResponse.json(
            { message: "아이디와 비밀번호를 입력하세요." },
            { status: 400 }
        );
    }

    return login(body);
}

async function login({id, password}: {id: string, password: string}) {
    const response = await fetch("http://localhost:8080/api/v1/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({id, password}),
    });

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data, {status: response.status});
}