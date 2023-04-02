import { IssuesList } from './pages/Issues/components/IssuesList/IssuesList';
import { Header } from './pages/Issues/components/Header/Header';
import { FilterContext } from './pages/Issues/context/FilterContext';
import { FilterContextProvider } from './pages/Issues/context/FilterContextProvider';

function App() {
  return (
    <div className="App">
      <Header />
      <FilterContextProvider>
        <IssuesList />
      </FilterContextProvider>
    </div>
  );
}

export default App;
