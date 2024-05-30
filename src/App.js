import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post" element={<NewPost />} /> {/* Add element prop with component */}
          <Route path="/edit/:id" element={<EditPost />} /> {/* Add element prop with component */}
          <Route path="/post/:id" element={<PostPage />} /> {/* Add element prop with component */}
          <Route path="/about" element={<About />} /> {/* Add element prop with component */}
          <Route path="*" element={<Missing />} /> {/* Add element prop with component */}
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
