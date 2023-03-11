import { useEffect } from 'react';
import styled from 'styled-components'
import SearchInput from './components/organisms/searchInput';

const App = () => {
  return (
    <AppContainer>
      <SearchInput 
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

