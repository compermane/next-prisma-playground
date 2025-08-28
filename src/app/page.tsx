import { JSX } from "react"
import Header from "./components/Header"
import Card from "./components/Card"

interface MockedUsers {
  name: string,
  email: string
}

const users: MockedUsers[] = [
  {name: "Teste 1", email: "teste1@email.com"},
  {name: "Teste 2", email: "teste2@email.com"},
  {name: "Teste 3", email: "teste3@email.com"},
  {name: "Teste 4", email: "teste4@email.com"},
  {name: "Teste 5", email: "teste5@email.com"}
] as const satisfies MockedUsers[]

const MainPage = (): JSX.Element => {
    return (
      <>
        {users.map(item => (
          <Card key={item.email} name={item.name} email={item.email} />
        ))}
      </>
    )
}

export default MainPage