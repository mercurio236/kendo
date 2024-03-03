import { describe, expect, it } from "vitest";
import { Header } from "./header";
import { render } from "@testing-library/react";


describe('Components: Header', () =>{
    it('should be verify img', async () =>{
      const {getByAltText} = await  render(<Header/>)
        const image = getByAltText('logo')

        expect(image.src).toBeTruthy()
    })
})