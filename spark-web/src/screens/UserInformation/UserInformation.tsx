import React, { useState } from "react";

import UserInformationProfiles from "./items/UserInformationProfiles";
import LastDialogbox from "./items/LastDialogbox";
import FirstDialogbox from "./items/FirstDialogbox";
import UserDialogbox from "./items/UserDialogbox";

function UserInformation() {
	return (
		<div className={"px-[20px]"}>
			<UserInformationProfiles />
			<FirstDialogbox questions={"어떤 분야에서 활동을?"} />
			<LastDialogbox questions={"어떤 분야에서 활동을?"} />
			<UserDialogbox questions={"어떤 분야에엇 활동을?"} />
			<UserInformationProfiles />
			<FirstDialogbox questions={"어떤 분야에서 활동을?"} />
			<LastDialogbox questions={"어떤 분야에서 활동을?"} />
		</div>
	);
}

export default UserInformation;
