interface UserDialogbox {
	questions: string;
	isTyped: boolean;
}

function UserDialogbox({ questions, isTyped }: UserDialogbox) {
	return (
		<div className={"text-right my-[20px]"}>
			<div
				className={
					"bg-highEmphasis text-white px-[20px] py-[10px] rounded-b-medium rounded-tl-medium inline-block"
				}
			>
				{questions}
			</div>
		</div>
	);
}

export default UserDialogbox;
