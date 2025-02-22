import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import Home from "@/components/Home";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ArticleDetail from './pages/ArticleDetail';
import Header from "./components/Header";

const queryClient = new QueryClient();

const About = () => {
  console.log("In about...");
  const [count, setCount] = useState(0);

  return (
    <>
      <div>About page...</div>
      <Link to="/?hello=world&molly=YA">Go to home!</Link>
      <p></p>
      <Button onClick={() => setCount((count) => count + 1)}>
        Click me count is {count}
      </Button>
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="article/:id" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
