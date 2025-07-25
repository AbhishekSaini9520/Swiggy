import ReactDOM from 'react-dom/client'
import Home from './Component/Home'
import {BrowserRouter, Route, Routes} from 'react-router'
import Resturent from './Component/Resturent';

export default function App(){

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<Home></Home>}></Route>
                    <Route path='/resturent' element = {<Resturent></Resturent>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)