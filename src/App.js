import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import HomeContainer from "./containers/HomeContainer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Layout>
      <HomeContainer />
      <Analytics />
    </Layout>
  );
}

export default App;
