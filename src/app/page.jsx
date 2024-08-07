import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2">
      <h1>我是首页</h1>
      <div className="flex">
        <Link
          type="submit"
          className="p-2 bg-blue-600 text-white py-2 hover:bg-blue-700 focus:outline-none"
          href={'/login'}
        >
          点击跳转登录
        </Link>
      </div>
    </div>
  );
}
