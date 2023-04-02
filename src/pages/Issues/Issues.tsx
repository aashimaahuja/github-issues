import { IssuesList } from "./components/IssuesList/IssuesList"
import { FilterContextProvider } from "./context/FilterContextProvider"

export const Issues = () => {
  return (
    <FilterContextProvider>
      <IssuesList />
    </FilterContextProvider>
  )
}