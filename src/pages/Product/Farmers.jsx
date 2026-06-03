import { useNavigate, useSearchParams } from 'react-router-dom'

function Farmers({ brands, setMyOrder }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const brandCheck = searchParams.get('brand')
    ? searchParams.get('brand').split(',').map(Number)
    : []

  return (
    <>
      <li>產地篩選</li>
      {brands.map((v, i) => {
        return (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                value={v}
                checked={brandCheck.includes(i + 1)}
                onChange={() => {
                  setMyOrder([])
                  const deQuery = Object.fromEntries(searchParams)
                  delete deQuery.orderprice
                  delete deQuery.page
                  if (brandCheck.includes(i + 1)) {
                    const newBrand = brandCheck.filter((v2) => v2 !== i + 1)
                    const newQuery = { ...deQuery, brand: newBrand.join(',') }
                    navigate(
                      `?${new URLSearchParams(newQuery)
                        .toString()
                        .replaceAll('%2C', ',')}`
                    )
                  } else {
                    const newBrand = [...brandCheck, i + 1]
                    const newQuery = { ...deQuery, brand: newBrand.join(',') }
                    navigate(
                      `?${new URLSearchParams(newQuery)
                        .toString()
                        .replaceAll('%2C', ',')}`
                    )
                  }
                }}
              />
              <span>{v}</span>
            </label>
          </li>
        )
      })}
    </>
  )
}

export default Farmers
