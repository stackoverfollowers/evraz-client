import cx from 'clsx';

interface ButtonProps extends React.ComponentProps<'button'> {
	variant?: 'contained' | 'outlined' | 'text' | 'secondary';
}

const Button = (props: ButtonProps) => {
	const {
		variant = 'contained',
		children,
		className,
		type = 'button',
		...rest
	} = props;

	let style = '';

	switch (variant) {
		case 'contained':
			style = 'bg-[#FAB82E] hover:bg-[#F9A823] border-transparent';
			break;
		case 'outlined':
			style = 'bg-white border-[#FAB82E] hover:bg-[#FEF1DB]';
			break;
		case 'text':
			style =
				'bg-white border-transparent hover:bg-[#FAFAFA] text-[#FAB82E] hover:text-[#F9A823]';
			break;
		case 'secondary':
			style =
				'bg-[#FAFAFA] border-[#EAEAEA] hover:bg-[#EFEFEF] text-[#6E6E6D] hover:text-[#565655]';
			break;
	}
	return (
		<button
			type={type}
			{...rest}
			className={cx(
				'flex text-sm border font-medium text-center flex-none justify-center items-center  rounded-[4px] px-3 py-[5px] w-auto h-[26px]',
				style
			)}
		>
			{children}
		</button>
	);
};

export default Button;
