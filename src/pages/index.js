import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <p className="m-4 font-bold text-center text-blue-500">تست فونت کلمه</p>
  );
}
