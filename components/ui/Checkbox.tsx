import cx from 'clsx';

interface CheckboxProps extends React.ComponentProps<'input'> {}

const Checkbox = (props: CheckboxProps) => {
	const { className, type = 'checkbox', ...rest } = props;

	return (
		<input
			type={type}
			{...rest}
			className={cx(
				'border border-[#CCCCCC] rounded-[3px] p-[1px] box-border w-4 h-4 hover:border-[#F9A823] text-white accent-[#FAB82E] hover:accent-[#F9A823]',
				className
			)}
		></input>
	);
};

export default Checkbox;
