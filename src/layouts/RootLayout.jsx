export default function RootLayout({ children }) {
  return (
    <div>
      <header className="site-header">
        <div className="wrap">
          <a className="brand" href="/">🍽️ Receitas</a>
          <nav>
            <a className="nav-link" href="/">Início</a>
            <a className="nav-link" href="https://www.themealdb.com/" target="_blank" rel="noreferrer">API</a>
          </nav>
        </div>
      </header>
      <main className="wrap">
        {children}
      </main>
      <footer className="site-footer">
        <div className="wrap">Feito com TheMealDB • Vite + React</div>
      </footer>
    </div>
  )
}
