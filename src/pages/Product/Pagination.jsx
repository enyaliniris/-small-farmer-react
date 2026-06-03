import { useNavigate, useSearchParams } from 'react-router-dom'

function Pagination({ page, totalPages }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const goToPage = (p) => {
    const qo = Object.fromEntries(searchParams)
    qo.page = p
    navigate(`?${new URLSearchParams(qo).toString()}`)
  }

  return (
    <ul className="P-page d-flex justify-content-center gap-3 list-unstyled font-M p-md-5">
      <li>
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault()
            goToPage(page - 1 === 0 ? 1 : page - 1)
          }}
        >
          <i className="fa-solid fa-angle-left"></i>
        </a>
      </li>
      {[...Array(5)].map((v, i) => {
        const p = page - 2 + i
        if (p < 1 || p > totalPages) return null
        return (
          <li className={p === page ? 'active' : ''} key={p}>
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault()
                goToPage(p)
              }}
            >
              {p}
            </a>
          </li>
        )
      })}
      <li>
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault()
            goToPage(page + 1 > totalPages ? totalPages : page + 1)
          }}
        >
          <i className="fa-solid fa-angle-right"></i>
        </a>
      </li>
    </ul>
  )
}

export default Pagination
