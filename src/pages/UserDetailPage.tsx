import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export default function UserDetailPage() {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    async function load() {
      try {
        const [userRes, postsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
          fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`),
        ])
        if (!userRes.ok) throw new Error('Falha ao carregar usuário')
        if (!postsRes.ok) throw new Error('Falha ao carregar posts')
        const userData: User = await userRes.json()
        const postsData: Post[] = await postsRes.json()
        setUser(userData)
        setPosts(postsData)
      } catch (e: any) {
        setError(e.message || 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return <div className="container">Carregando detalhes...</div>
  if (error) return <div className="container error">{error}</div>
  if (!user) return <div className="container">Usuário não encontrado.</div>

  return (
    <div className="container">
      <Link to="/" className="link">← Voltar</Link>
      <h1>{user.name}</h1>
      <div className="grid-2">
        <div className="panel">
          <h2>Informações</h2>
          <ul>
            <li><strong>Username:</strong> {user.username}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Telefone:</strong> {user.phone}</li>
            <li><strong>Website:</strong> {user.website}</li>
          </ul>
        </div>
        <div className="panel">
          <h2>Posts</h2>
          <ul className="posts">
            {posts.map((p) => (
              <li key={p.id}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export default function UserDetailPage() {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    async function load() {
      try {
        const [userRes, postsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
          fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`),
        ])
        if (!userRes.ok) throw new Error('Falha ao carregar usuário')
        if (!postsRes.ok) throw new Error('Falha ao carregar posts')
        const userData: User = await userRes.json()
        const postsData: Post[] = await postsRes.json()
        setUser(userData)
        setPosts(postsData)
      } catch (e: any) {
        setError(e.message || 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return <div className="container">Carregando detalhes...</div>
  if (error) return <div className="container error">{error}</div>
  if (!user) return <div className="container">Usuário não encontrado.</div>

  return (
    <div className="container">
      <Link to="/" className="link">← Voltar</Link>
      <h1>{user.name}</h1>
      <div className="grid-2">
        <div className="panel">
          <h2>Informações</h2>
          <ul>
            <li><strong>Username:</strong> {user.username}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Telefone:</strong> {user.phone}</li>
            <li><strong>Website:</strong> {user.website}</li>
          </ul>
        </div>
        <div className="panel">
          <h2>Posts</h2>
          <ul className="posts">
            {posts.map((p) => (
              <li key={p.id}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


