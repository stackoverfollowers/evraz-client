import { SingleExhausterType } from '@/types';
import cx from 'clsx';

interface OilPressureProps {
	oil_pressure: SingleExhausterType['oil_pressure'];
	oil_pressure_status: SingleExhausterType['oil_pressure_status'];
}

const OilPressure = ({
	oil_pressure,
	oil_pressure_status,
}: OilPressureProps) => {
	let bgColor = 'bg-[#4adb62]';

	const percentage = oil_pressure / 100;

	switch (oil_pressure_status) {
		case 'alarm':
			bgColor = 'bg-[#F18863]';
			break;
		case 'warning':
			bgColor = 'bg-[#FDC65F]';
	}

	return (
		<div className="absolute flex flex-col justify-between top-[190px] left-[1380px] w-[231px] h-[61px] bg-[#EFF2F6] border-2 border-[#8D9595] rounded-[2px] p-[4px] gap-[2px]">
			<div className="h-[14px] w-[219px] flex first:border-l text-[#595959] text-[12px] leading-[14px] ">
				{[...Array(10)].map((_, i) => (
					<div
						key={i}
						className="w-[31px] h-[14px] flex items-center justify-center border-r border-[#D9DADA]"
					>
						{i}
					</div>
				))}
			</div>
			<div>
				{/* <div className="flex h-[33px] w-[2px] bg-[#EB5835]" /> */}
				<div
					className={cx(
						'flex flex-col items-center h-[33px] w-full px-3 py-[2px] relative',
						bgColor
					)}
					style={{ width: `${percentage * 100}%` }}
				>
					{/* <div className="flex left-0 absolute top-0 h-[33px] w-[2px] bg-[#EB5835]" />
				<div className="flex right-0 absolute top-0 h-[33px] w-[2px] bg-[#EB5835]" /> */}

					<span className="text-[13px] leading-[15px] font-medium whitespace-nowrap absolute left-3 top-0">
						{oil_pressure}
					</span>
					<span className="text-[10px] leading-3 text-[#262626] font-[375] whitespace-nowrap absolute left-3 top-4">
						ДАВЛЕНИЕ МАСЛА, кг/см<sup>2</sup>
					</span>
				</div>
			</div>
		</div>
	);
};

export default OilPressure;
