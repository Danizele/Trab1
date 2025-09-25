import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MealDetailPage() {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        if (!res.ok) throw new Error('Falha ao carregar receita')
        const data = await res.json()
        const found = data.meals && data.meals[0]
        if (!ignore) setMeal(found || null)
      } catch (e) {
        if (!ignore) setError(e.message || 'Erro desconhecido')
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    load()
    return () => { ignore = true }
  }, [id])

  if (loading) return <div className="container">Carregando...</div>
  if (error) return <div className="container error">{error}</div>
  if (!meal) return <div className="container">Receita não encontrada.</div>

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`]
    const mea = meal[`strMeasure${i}`]
    if (ing) ingredients.push(`${ing}${mea ? ` - ${mea}` : ''}`)
  }

  return (
    <div className="container">
      <Link to="/" className="link">← Voltar</Link>
      <h1>{meal.strMeal}</h1>
      <div className="grid-2">
        <div className="panel">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="cover" />
        </div>
        <div className="panel">
          <h2>Detalhes</h2>
          <ul>
            <li><strong>Categoria:</strong> {meal.strCategory}</li>
            <li><strong>Origem:</strong> {meal.strArea}</li>
            <li><strong>Tags:</strong> {meal.strTags || '—'}</li>
          </ul>
          <h2>Ingredientes</h2>
          <ul>
            {ingredients.map((it, idx) => <li key={idx}>{it}</li>)}
          </ul>
        </div>
      </div>
      <div className="panel">
        <h2>Instruções</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{meal.strInstructions}</p>
      </div>
      {meal.strYoutube && (
        <div className="panel">
          <h2>Vídeo</h2>
          <a href={meal.strYoutube} target="_blank" rel="noreferrer" className="link">Assistir no YouTube</a>
        </div>
      )}
    </div>
  )
}


