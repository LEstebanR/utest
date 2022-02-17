import Footer from '../components/Footer';
import {render} from "@testing-library/react";


describe("Header", () => {
  it("should render Header", () => {
    const  getByTestId  = render(<Footer/>);
    expect(getByTestId.getByText("Recursos"));
    
  });
})