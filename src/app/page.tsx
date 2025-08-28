"use client";

import { JSX, useEffect, useState } from "react"
import Card from "./components/Card"

const MainPage = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch("/api/users").then(res => res.json()).then(setUsers)
  }, [])
    return (
      <>
        {users.map(item => (
          <Card key={item.email} name={item.nome} email={item.email} />
        ))}
      </>
    )
}

export default MainPage