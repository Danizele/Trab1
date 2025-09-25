import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <input
        placeholder="Buscar receita (ex: chicken)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default function MealsPage() {
  const [query, setQuery] = useState('chicken')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`)
        if (!res.ok) throw new Error('Falha ao buscar receitas')
        const data = await res.json()
        if (!ignore) setMeals(data.meals || [])
      } catch (e) {
        if (!ignore) setError(e.message || 'Erro desconhecido')
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    load()
    return () => { ignore = true }
  }, [query])

  const results = useMemo(() => meals || [], [meals])

  return (
    <div className="container">
      <h1>Receitas</h1>
      <SearchBar value={query} onChange={setQuery} />
      {loading && <div>Carregando...</div>}
      {error && <div className="error">{error}</div>}
      {!loading && !error && results.length === 0 && (
        <div>Nenhuma receita encontrada.</div>
      )}
      <ul className="grid">
        {results.map((m) => (
          <li key={m.idMeal} className="card">
            <img src={m.strMealThumb} alt={m.strMeal} />
            <div className="card-body">
              <strong>{m.strMeal}</strong>
              <div className="muted">{m.strArea} • {m.strCategory}</div>
            </div>
            <Link className="btn" to={`/meal/${m.idMeal}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


