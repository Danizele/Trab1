import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type User = {
  id: number
  name: string
  email: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error('Falha ao carregar usuários')
        const data: User[] = await res.json()
        setUsers(data)
      } catch (e: any) {
        setError(e.message || 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="container">Carregando usuários...</div>
  if (error) return <div className="container error">{error}</div>

  return (
    <div className="container">
      <h1>Usuários</h1>
      <ul className="list">
        {users.map((u) => (
          <li key={u.id} className="card">
            <div>
              <strong>{u.name}</strong>
              <div className="muted">{u.email}</div>
            </div>
            <Link to={`/users/${u.id}`} className="btn">Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type User = {
  id: number
  name: string
  email: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error('Falha ao carregar usuários')
        const data: User[] = await res.json()
        setUsers(data)
      } catch (e: any) {
        setError(e.message || 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="container">Carregando usuários...</div>
  if (error) return <div className="container error">{error}</div>

  return (
    <div className="container">
      <h1>Usuários</h1>
      <ul className="list">
        {users.map((u) => (
          <li key={u.id} className="card">
            <div>
              <strong>{u.name}</strong>
              <div className="muted">{u.email}</div>
            </div>
            <Link to={`/users/${u.id}`} className="btn">Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


