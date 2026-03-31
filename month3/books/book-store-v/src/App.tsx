import './App.css'
import Layout from './components/layout/Layout';
import Home from './pages/Home'
import ThemeSwitcher from './components/header/ThemeSwicher';
import { BookStoreThemeProvider } from './context/themeContext';

function App() {
  //const { themeName, toggleTheme } = useContext(ThemeContext);
  //const [themeName, setThemeName] = useState<ThemeName>("light");

  return (
    <BookStoreThemeProvider>
        <ThemeSwitcher/>
        <Layout>
          <Home />
        </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
