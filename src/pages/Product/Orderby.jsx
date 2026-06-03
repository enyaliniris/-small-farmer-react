import { useNavigate, useSearchParams } from 'react-router-dom'

function Orderby({ myOrder, setMyOrder, setSidepop, data, setData }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  return (
    <>
      {' '}
      <div className="P-product-btn container d-flex justify-content-end align-items-center gap-3 mt-3 font-M">
        <button
          className="d-md-none"
          onClick={() => {
            setSidepop(true)
          }}
        >
          分類選單
        </button>
        <button
          className={`ms-auto ${myOrder.length > 0 ? 'active' : ''}`}
          onClick={() => {
            const currentQuery = Object.fromEntries(searchParams)
            delete currentQuery.page
            if (myOrder.length === 0) {
              setMyOrder([...myOrder, 'desc'])
              navigate(
                `?${new URLSearchParams({
                  ...currentQuery,
                  orderprice: 'desc',
                }).toString()}`
              )
            }
            if (myOrder[0] === 'desc') {
              setMyOrder(['asc'])
              navigate(
                `?${new URLSearchParams({
                  ...currentQuery,
                  orderprice: 'asc',
                }).toString()}`
              )
            } else {
              setMyOrder(['desc'])
              navigate(
                `?${new URLSearchParams({
                  ...currentQuery,
                  orderprice: 'desc',
                }).toString()}`
              )
            }
          }}
        >
          價格排序
          <i
            className={`fa-solid  ms-2 ${
              myOrder[0] === 'asc' ? 'fa-caret-up' : 'fa-caret-down'
            }`}
          ></i>
        </button>
      </div>
    </>
  )
}

export default Orderby
