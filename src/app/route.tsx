import { redirect } from "next/navigation";

export function GET() {
    redirect("/login");
}

/*
* route.tsx
* App router에서 Next.js의 API Route를 만들때 사용하는 파일
* URI는 폴더 구조로 자동 매핑됨
* */