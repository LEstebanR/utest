import Header from '../components/Header';
import {fireEvent, render} from "@testing-library/react";



describe("Header", () => {
  it("should render Header", () => {
    const  getByTestId  = render(<Header/>);
    expect(getByTestId.getByText("Conduce"));
    
  })

})