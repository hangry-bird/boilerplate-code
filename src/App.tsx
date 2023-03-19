import { useEffect } from 'react';
import styled from 'styled-components'
import SearchSuggestionDropdown from './components/organisms/searchSuggestionDropdown';

const App = () => {
  return (
    <AppContainer>
      <SearchSuggestionDropdown 
        value="a"
        searchArray={[]}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {}}
      />
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`

