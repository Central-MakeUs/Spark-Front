import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import UserInformation from "./screens/UserInformation/UserInformation";

import { useReward } from "react-rewards";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const { reward, isAnimating } = useReward("rewardId", "confetti");
	return (
		<>
			<UserInformation />
		</>
	);
}

export default App;
