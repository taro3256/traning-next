/**
 * @jest-environment jsdom
 */
 import { render } from '@testing-library/react'
 import '@testing-library/jest-dom/extend-expect'
 import Home from '../pages/index'
 
 it('Should render title text', () => {
   render(<Home />)
 })
 