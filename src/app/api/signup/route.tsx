import { NextResponse } from "next/server";

/*
* API ROUTE 생성
* */
export async function POST(req: Request) {
    const body = await req.json();
    const { id, password } = body;

    console.log(id);
    console.log(password);

    if (!id || !password) {
        return NextResponse.json(
            { message: "아이디와 비밀번호를 입력하세요." },
            { status: 400 }
        );
    }

    const response = await fetch("http://localhost:8080/api/v1/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, password})
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}