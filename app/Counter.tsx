// ==========================================================
// app/Counter.tsx
// 概要：クリック回数を数えるボタン（ブラウザ側で動く部品）
// ==========================================================

// この1行で「このファイルはブラウザで動かす部品です」と Next.js に伝える
// useState やクリック処理を使うときは必須
"use client";

import { useState } from "react";

export default function Counter() {
  // count：今の回数、setCount：回数を書き換える関数
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      クリック回数：{count}
    </button>
  );
}