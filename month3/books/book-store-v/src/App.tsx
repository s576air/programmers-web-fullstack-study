import './App.css'
import Layout from './components/layout/Layout';
import Home from './pages/Home'
import { BookStoreThemeProvider } from './context/themeContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './components/common/Error';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout><Home /></Layout>,
    errorElement: <Error />
  },
  {
    path: "/books",
    element: <Layout><div>도서 목록</div></Layout>
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
  },
])

function App() {
  //const { themeName, toggleTheme } = useContext(ThemeContext);
  //const [themeName, setThemeName] = useState<ThemeName>("light");

  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
