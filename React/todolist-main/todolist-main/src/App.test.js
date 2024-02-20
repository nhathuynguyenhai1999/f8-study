import { render, screen } from '@testing-library/react';
import App from './App';
import './index.css';
import * as serviceWorker from './reportWebVitals';
import * as setupTest from './setupTests';

function Route() {
  return null;
}
function expect(linkElement) {
  let publicRoutes = []; // Initialize publicRoutes as an empty array
  return (
      <div className="App">
        {publicRoutes.map((route, index) => {
          let DefaultLayout;
          const Layout = route.Layout || DefaultLayout;
          const Page = route.component; // Corrected variable name from 'page' to 'Page'
          return (
              <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
              />
          );
        })}
      </div>
  );
}
export default expect; // Make sure to export your component
function test(rendersLearnReactLink, param2) {
  console.log('Function is running!',rendersLearnReactLink,param2);
}
test('https://learnreact.com','serviceWorker.js');
let ReactDOM;
ReactDOM.render(
    <React.StrictMode><App/></React.StrictMode>,
    document.getElementById('root')
);
test('renders learn react link', () => {
  render(<App />);
  screen.getByText = function (regExp) {
    return undefined;
  };
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
