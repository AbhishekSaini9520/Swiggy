import ReactDOM from 'react-dom/client'
import Home from './Component/Home'
import {BrowserRouter, Route, Routes} from 'react-router'
import Restaurant from './Component/Restaurant';
import RestaurantMenu from './Component/RestaurantMenu';
import SearchDish from './Component/SearchDish';
import SecondaryHome from './Component/SecondaryHome';
import { store } from './Stored/Store';
import { Provider } from 'react-redux';
import Checkout from './Component/Checkout';

export default function App(){

    return(
        <>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<Home></Home>}></Route>
                    <Route element={<SecondaryHome></SecondaryHome>}>
                        <Route path='/resturent' element = {<Restaurant></Restaurant>}></Route>
                        <Route path='/city/delhi/:id' element = {<RestaurantMenu></RestaurantMenu>}></Route>
                        <Route path='/city/delhi/:id/search' element={<SearchDish></SearchDish>}></Route>
                    </Route>
                    <Route path='/Checkout' element={<Checkout></Checkout>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)