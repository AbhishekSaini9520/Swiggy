import ReactDOM from 'react-dom/client'
import Home from './Component/Home'
import {BrowserRouter, Route, Routes} from 'react-router'
import Restaurant from './Component/Restaurant';
import RestaurantMenu from './Component/RestaurantMenu';
import SearchDish from './Component/SearchDish';

export default function App(){

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<Home></Home>}></Route>
                    <Route path='/resturent' element = {<Restaurant></Restaurant>}></Route>
                    <Route path='/city/delhi/:id' element = {<RestaurantMenu></RestaurantMenu>}></Route>
                    <Route path='/city/delhi/:id/search' element={<SearchDish></SearchDish>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)