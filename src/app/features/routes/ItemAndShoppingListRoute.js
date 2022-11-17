import React from 'react'

const ItemAndShoppingListRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<ListContainer />}>
          <Route path="" element={<ItemSection />} />
        </Route>
        <Route path="/history" element={<History />}>
          <Route path="" element={<ItemSection />} />
        </Route>
        <Route path="/analysis" element={<Analysis />}>
          <Route path="" element={<ItemSection />} />
        </Route>
      </Routes>
    </div>
  )
}

export default ItemAndShoppingListRoute;