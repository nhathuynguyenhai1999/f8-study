import { render, screen } from '@testing-library/react';
import App from './App';

function test(rendersLearnReactLink, param2) {
  let description;
  console.log(`Running Test: ${description}`)
}
function expect(linkElement) {
  return {
    toBeInTheDocument: function (){
      if(!linkElement){
        throw new Error('Element is not defined.');
      }
      if(!screen.getByText(!linkElement)){
        throw new Error(`Expected new link element ${linkElement} to be in the document.`)
      }
    }
  }
}
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
