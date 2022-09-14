import { Provider } from "react-redux";
import "./asset/style/App.css";
import Router from "./routes";
import { store } from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

export default App;
