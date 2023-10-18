import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";

import AddContainer from "./redux/AddContainer";
import CrudTable from "./components/cruds/CrudTable";
import CrudListView from "./components/cruds/CrudListView";
import CrudGridView from "./components/cruds/CrudGridView";
import CrudDetails from "./components/cruds/CrudDetails";

import EditContainer from "./redux/EditContainer";

import DeleteContainer from "./redux/DeleteContainer";
import Footer from "./components/common/Footer";
import {Provider} from 'react-redux';
import store from "./redux/store";


function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/cruds" element={<CrudTable />} />					
					<Route exact path="/cruds/list-view" element={<CrudListView />} />
					<Route exact path="/cruds/grid-view" element={<CrudGridView />} />
					
					<Route exact path="/cruds/new" element={<Provider store={store}>
                <AddContainer />
              </Provider>} />
					<Route exact path="/cruds/:_id" element={<CrudDetails />} />
					
					<Route exact path="/cruds/:_id/edit" element={<Provider store={store}>
                <EditContainer />
              </Provider>} />

					
					<Route exact path="/cruds/:_id/delete" element={<Provider store={store}>
                <DeleteContainer />
              </Provider>} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
