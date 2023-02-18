import { BearingType, ExhausterType } from '@/types';
import { FiThermometer, FiRadio, FiDroplet } from 'react-icons/fi';
import cx from 'clsx';
import { useDispatch } from 'react-redux';
import { setHovered } from '@/features/schemeSlice';

export type BadgeType = 'default' | 'alarm' | 'warning';
type Category = 'T' | 'V' | 'L';

interface BadgeProps {
	type?: BadgeType;
	category: Category;
}

const Badge = ({ type = 'default', category }: BadgeProps) => {
	let rootStyle =
		'flex h-5 items-center px-[5px] py-[2px] justify-center gap-[2px] border rounded-sm';

	let backgroundStyle, iconStyle;
	let icon;

	switch (type) {
		case 'warning':
			backgroundStyle = 'bg-[#FEF1DB] border-[#F69112]';
			iconStyle = 'text-[#F37E0D]';
			break;
		case 'alarm':
			backgroundStyle = 'bg-[#FCDBCB] border-[#EB5835]';
			iconStyle = 'text-[#E32112]';
			break;
		default:
			backgroundStyle = 'bg-[#F4F4F4] border-[#CCCCCC]';
			iconStyle = 'text-[#868686]';
	}

	switch (category) {
		case 'T':
			icon = <FiThermometer className={cx('h-3.5 w-3.5', iconStyle)} />;
			break;
		case 'V':
			icon = <FiRadio className={cx('h-3.5 w-3.5', iconStyle)} />;
			break;
		case 'L':
			icon = <FiDroplet className={cx('h-3.5 w-3.5', iconStyle)} />;
			break;
	}

	return (
		<div className={cx(rootStyle, backgroundStyle)}>
			<span className="font-medium text-[13px] leading-[15px]">{category}</span>
			{icon}
		</div>
	);
};

const Bearing = ({
	bearing,
	exhausterTitle,
}: {
	bearing: BearingType;
	exhausterTitle: string;
}) => {
	const {
		is_temp_alarm,
		is_temp_warning,
		is_vibration_alarm,
		is_vibration_warning,
	} = bearing;

	const dispatch = useDispatch();

	const handleMouseEnter = () => {
		let type = 'default';
		if (is_temp_alarm || is_vibration_alarm) {
			type = 'alarm';
		}

		dispatch(
			setHovered(`${bearing.index.toString()}_${exhausterTitle}_${type}`)
		);
	};

	const handleMouseLeave = () => {
		dispatch(setHovered(null));
	};

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="flex cursor-default rounded-[4px] bg-[#FAFAFA] border border-[#F0F0F0] hover:border-[#9EADC5]"
		>
			<div className="w-full py-[7px] px-2.5 text-[#262626] text-[13px] leading-[15px] font-medium">
				№{bearing.index}
			</div>
			<div className="flex gap-[7px] px-2.5 items-center">
				{is_temp_alarm != null && is_temp_warning != null && (
					<Badge
						category="T"
						type={
							is_temp_alarm ? 'alarm' : is_temp_warning ? 'warning' : 'default'
						}
					/>
				)}
				{is_vibration_alarm != null && is_vibration_warning != null && (
					<Badge
						category="V"
						type={
							is_vibration_alarm
								? 'alarm'
								: is_vibration_warning
								? 'warning'
								: 'default'
						}
					/>
				)}
			</div>
		</div>
	);
};

const Oil = ({ oil_type }: { oil_type: BadgeType }) => {
	return (
		<div className="flex cursor-default rounded-[4px] bg-[#FAFAFA] border border-[#F0F0F0]">
			<div className="w-full py-[7px] px-2.5 text-[#262626] text-[13px] leading-[15px] font-medium">
				Уровень масла
			</div>
			<div className="flex gap-[7px] px-2.5 items-center">
				<Badge category="L" type={oil_type} />
			</div>
		</div>
	);
};

interface BearingsProps {
	exhausterTitle: string;
	bearings: BearingType[];
	oil_type: BadgeType | null;
}

const Bearings = (props: BearingsProps) => {
	const renderBearings = () =>
		props.bearings.map(b => (
			<Bearing
				key={b.index}
				bearing={b}
				exhausterTitle={props.exhausterTitle}
			/>
		));

	return (
		<>
			{renderBearings()}
			{props.oil_type && <Oil oil_type={props.oil_type} />}
		</>
	);
};

export default Bearings;
