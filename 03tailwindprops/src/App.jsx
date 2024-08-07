import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoeCard from './components/ShoeCard'

function App() {
  return (
    <>
    <ShoeCard name="Jordan" price="300.10" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0cad363-0e2e-406c-a23e-63d71af4dc06/AIR+JORDAN+1+LOW+SE.png"/>
    <ShoeCard name="Dior" price="1500" src="https://media.dior.com/couture/ecommerce/media/catalog/product/J/Z/1720003520_3SN272ZIR_H165_E02_GH.jpg?imwidth=3000"/>
    </>
  )
}

export default App
