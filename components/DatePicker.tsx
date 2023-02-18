import { Dispatch, SetStateAction, useRef } from 'react';

interface DatePickerProps {
	range: {
		from: Date;
		to: Date;
	};
	setRange: Dispatch<
		SetStateAction<{
			from: Date;
			to: Date;
		}>
	>;
}

const DatePicker = ({ range, setRange }: DatePickerProps) => {
	const handleDateRangeChange = (event: any) => {
		const { name, value } = event.target;
		setRange(prevState => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		console.log(range);
	};
	const inputFromRef = useRef<HTMLInputElement>(null);
	const inputToRef = useRef<HTMLInputElement>(null);

	function handleClick() {
		inputFromRef.current?.focus;
		console.log('clicked');
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center gap-[2px] bg-white w-fit h-9 p-[6px]"
		>
			<input
				type="datetime-local"
				name="from"
				value={range.from.toISOString().slice(0, 16)}
				onChange={handleDateRangeChange}
				ref={inputFromRef}
				onClick={handleClick}
				className="w-fit text-sm font-medium px-[12px] py-[5px] bg-[#FAB82E] h-6 border rounded-[4px] outline-none"
			/>
			<span className="font-medium">-</span>
			<input
				type="datetime-local"
				name="to"
				value={range.to.toISOString().slice(0, 16)}
				onChange={handleDateRangeChange}
				ref={inputToRef}
				onClick={() => inputToRef.current?.focus}
				className="w-fit text-sm font-medium px-[12px] py-[5px] bg-[#FAB82E] h-6 border rounded-[4px] outline-none"
			/>
			{/* <button
				type="submit"
				className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
			>
				Submit
			</button> */}
		</form>
	);
};

export default DatePicker;
