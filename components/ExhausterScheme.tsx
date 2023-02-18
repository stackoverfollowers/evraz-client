import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import cx from 'clsx';

interface ExhausterSchemeProps {
	exhausterTitle: string;
}

const ExhausterScheme = ({ exhausterTitle }: ExhausterSchemeProps) => {
	const hovered = useSelector((state: RootState) =>
		state.scheme.hovered?.split('_')
	);

	let type,
		styles = { background: '' },
		borderStyle = '';

	if (hovered) {
		type = hovered[2];
	}

	switch (type) {
		case 'alarm':
			borderStyle = 'border-[#EB5835]';
			styles = {
				background:
					'linear-gradient(0deg, rgba(235, 87, 87, 0.25), rgba(235, 87, 87, 0.25)), #414F4F',
			};
			break;
		default:
			borderStyle = 'border-[#EFF2F6]';
			styles = {
				background:
					'linear-gradient(0deg, rgba(239, 242, 246, 0.25), rgba(239, 242, 246, 0.25)), #414F4F',
			};
	}

	return (
		<div className="relative rounded-md bg-[#eff2f6] h-[142px] flex flex-col p-2.5 items-start justify-start border-2 border-solid border-[#ced7e7]">
			<>
				<img
					className="absolute left-[8px] top-[10px]"
					src="/exhauster/13570.svg"
				/>

				<img
					className="absolute left-[26px] top-[41px]"
					src="/exhauster/13568.svg"
				/>

				<img
					className="absolute left-[7px] top-[56px]"
					src="/exhauster/13567.svg"
				/>

				<img
					className="absolute left-[50px] top-[56px]"
					src="/exhauster/13571.svg"
				/>

				<img
					className="absolute left-[76px] top-[31px]"
					src="/exhauster/13556.svg"
				/>

				<img
					className="absolute left-[137px] top-[29px]"
					src="/exhauster/13574.svg"
				/>

				<img
					className="absolute left-[164px] top-[18px]"
					src="/exhauster/13572.svg"
				/>

				<img
					className="absolute left-[228px] top-[29px]"
					src="/exhauster/13573.svg"
				/>
			</>

			{/* GROUP */}
			<>
				<div
					id="4"
					style={styles}
					className={cx(
						'absolute left-[84px] top-[39.5px] border-2 h-4 w-[21px] z-10 rounded-[0.757583px]',
						borderStyle,
						hovered && hovered[1] === exhausterTitle && hovered[0] === '4'
							? 'opacity-100'
							: 'opacity-0'
					)}
				/>
				<div
					id="3"
					style={styles}
					className={cx(
						'absolute left-[108px] top-[39.5px] border-2 h-4 w-[21px] z-10 rounded-[0.757583px]',
						borderStyle,
						hovered && hovered[1] === exhausterTitle && hovered[0] === '3'
							? 'opacity-100'
							: 'opacity-0'
					)}
				/>
				<div
					id="6"
					style={styles}
					className={cx(
						'absolute left-[84px] top-[58.5px] border-2 h-4 w-[21px] z-10 rounded-[0.757583px]',
						borderStyle,
						hovered && hovered[1] === exhausterTitle && hovered[0] === '6'
							? 'opacity-100'
							: 'opacity-0'
					)}
				/>
				<div
					id="5"
					style={styles}
					className={cx(
						'absolute left-[108px] top-[58.5px] border-2 h-4 w-[21px] z-10 rounded-[0.757583px]',
						borderStyle,
						hovered && hovered[1] === exhausterTitle && hovered[0] === '5'
							? 'opacity-100'
							: 'opacity-0'
					)}
				/>
			</>

			{/* GROUP */}
			<>
				<div
					id="98"
					style={styles}
					className={cx(
						'absolute left-[10px] top-[61.5px] border-2 h-[18px] w-2.5 z-10 rounded-[0.757583px]',
						borderStyle,
						hovered &&
							hovered[1] === exhausterTitle &&
							(hovered[0] === '9' || hovered[0] === '8')
							? 'opacity-100'
							: 'opacity-0'
					)}
				/>
				<div
					id="7"
					style={styles}
					className={cx(
						'absolute left-[55px] top-[61.5px] border-2 h-[18px] w-2.5 z-10 rounded-[0.757583px]',
						borderStyle,
						hovered && hovered[1] === exhausterTitle && hovered[0] === '7'
							? 'opacity-100'
							: 'opacity-0'
					)}
				/>
				<div
					id="2"
					style={styles}
					className={cx(
						'absolute left-[150px] top-[34.5px] border-2 h-[18px] w-2.5 z-10 rounded-[0.757583px]',
						borderStyle,
						hovered && hovered[1] === exhausterTitle && hovered[0] === '2'
							? 'opacity-100'
							: 'opacity-0'
					)}
				/>
				<div
					id="1"
					style={styles}
					className={cx(
						'absolute left-[234px] top-[34.5px] border-2 h-[18px] w-2.5 z-10 rounded-[0.757583px]',
						borderStyle,
						hovered && hovered[1] === exhausterTitle && hovered[0] === '1'
							? 'opacity-100'
							: 'opacity-0'
					)}
				/>
			</>
		</div>
	);
};

export default ExhausterScheme;
