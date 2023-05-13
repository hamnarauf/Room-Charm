import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import ErrorBoundary from "../../components/ErrorBoundary";

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <ErrorBoundary>
        <ShoppingList />
      </ErrorBoundary>
      <Subscribe />
    </div>
  );
}

export default Home;
