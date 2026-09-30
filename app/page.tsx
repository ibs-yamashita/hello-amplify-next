// ==========================================================
// app/page.tsx
// 概要：トップページ（/）に「Hello World」を表示する。
//       時刻はサーバー側で作り、ボタンはブラウザ側で動かす。
// ==========================================================

// ボタンの部品（ブラウザで動く部分）を別ファイルから読み込む
import Counter from "./Counter";

// Next.js では app/page.tsx に書いた関数がそのままトップページになる
// 何も指定しなければ「サーバーコンポーネント」＝サーバー側で HTML を作る
export default function Home() {
  // この時刻はサーバーで HTML を作ったときの時刻になる
  const now: string = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

  return (
    <main style={{ textAlign: "center", marginTop: "80px", fontFamily: "sans-serif" }}>
      <h1>Hello World from Next.js on AWS Amplify!</h1>
      <p>サーバーで作成した時刻：{now}</p>
      {/* ボタンなど、クリックに反応する部分は Counter に任せる */}
      <Counter />
    </main>
  );
}