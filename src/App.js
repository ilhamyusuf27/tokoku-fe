import { Provider } from "react-redux";
import "./asset/style/App.css";
import Router from "./routes";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router />
			</PersistGate>
		</Provider>
	);
}

export default App;
