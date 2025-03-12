"use client"

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {

  const [teste, setTeste] = useState('')
  const [teste2, setTeste2] = useState('')
  const [teste3, setTeste3] = useState('')

  console.log('renderizei');

  return (
    <div>
      {teste}

      {/* <input type="text"  /> */}

      <Input value={teste} onChange={e => setTeste(e.target.value)} />
      <Input value={teste2} onChange={e => setTeste2(e.target.value)} />
      <Input value={teste3} onChange={e => setTeste3(e.target.value)} />

    </div>
  );
}