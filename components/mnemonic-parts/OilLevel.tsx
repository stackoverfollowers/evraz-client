import { SingleExhausterType } from '@/types';
import cx from 'clsx';

interface OilLevelProps {
	oil_level: SingleExhausterType['oil_level'];
	oil_level_status: SingleExhausterType['oil_level_status'];
}

const OilLevel = ({ oil_level, oil_level_status }: OilLevelProps) => {
	let bgColor = 'bg-[#4adb62]';

	const percentage = oil_level / 100;

	switch (oil_level_status) {
		case 'alarm':
			bgColor = 'bg-[#F18863]';
			break;
		case 'warning':
			bgColor = 'bg-[#FDC65F]';
	}

	return (
		<div className="absolute top-[30.7px] left-[898px] w-[232px] h-[165px] bg-[#E8EAEA] border-2 border-[#8D9595] rounded-[10px]">
			<div className="flex flex-col items-center w-full h-full p-2.5">
				<div className="px-2.5 py-[3px] bg-[rgba(255,255,255,0.5)] w-full text-center text-[14px] leading-4 font-medium">
					Маслобак
				</div>
				<div className="flex flex-col justify-between box-border mt-[21px] p-[4px] w-[200px] h-[59px] bg-[#EFF2F6] border-2 border-[#8D9595] gap-[2px]">
					<div className="h-[14px] w-[188px] flex first:border-l text-[#595959] text-[12px] leading-[14px]">
						{[...Array(10)].map((_, i) => (
							<div
								key={i}
								className="w-[31px] h-[14px] flex items-center justify-center border-r border-[#D9DADA]"
							>
								{i}
							</div>
						))}
					</div>
					<div
						className={cx(
							'flex flex-col items-center h-[31px] w-full px-3 py-[2px] relative',
							bgColor
						)}
						style={{ width: `${percentage * 100}%` }}
					>
						<span className="text-[13px] leading-[15px] font-medium whitespace-nowrap absolute left-3 top-0">
							{oil_level}
						</span>
						<span className="text-[10px] leading-3 text-[#262626] font-[375] whitespace-nowrap absolute left-3 top-4">
							УРОВЕНЬ МАСЛА, %
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OilLevel;
