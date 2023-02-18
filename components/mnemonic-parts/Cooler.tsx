import { SingleExhausterType } from '@/types';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

interface CoolerProps {
	water_temp_before: SingleExhausterType['water_temp_before'];
	water_temp_before_status: SingleExhausterType['water_temp_before_status'];
	water_temp_after: SingleExhausterType['water_temp_after'];
	water_temp_after_status: SingleExhausterType['water_temp_after_status'];
}

const Cooler = (props: CoolerProps) => {
	let beforeColor = '';
	let afterColor = '';

	switch (true) {
		case props.water_temp_after_status === 'alarm':
			afterColor = 'bg-[#F18863]';
			break;
		case props.water_temp_after_status === 'warning':
			afterColor = 'bg-[#FDC65F]';
			break;
		case props.water_temp_before_status === 'alarm':
			beforeColor = 'bg-[#F18863]';
			break;
		case props.water_temp_before_status === 'warning':
			beforeColor = 'bg-[#FDC65F]';
			break;
	}

	return (
		<>
			<div className="absolute tracking-tighter text-white text-[15px] leading-[17.4px] font-medium flex items-center justify-center top-[5.99px] left-[1234.58px] h-[29px] w-[60px] bg-[#414F4F] rounded-[4px]">
				{props.water_temp_before} °С
			</div>
			{/* <FiArrowDown className="absolute top-[34px] left-[1250px] h-8 w-8 text-[#677272]" />
			<FiArrowUp className="absolute top-[34px] left-[1334px] h-8 w-8 text-[#677272]" /> */}

			<div className="absolute tracking-tighter text-white text-[15px] leading-[17.4px] font-medium flex items-center justify-center top-[5.99px] left-[1319px] h-[29px] w-[60px] bg-[#414F4F] rounded-[4px]">
				{props.water_temp_after} °С
			</div>

			<div className="absolute tracking-tighter text-white text-[15px] leading-[17.4px] font-medium flex items-center justify-center top-[97.2px] left-[1153px] h-[29px] w-[60px] bg-[#414F4F] rounded-[4px]">
				{props.water_temp_before} °С
			</div>

			<div className="absolute tracking-tighter text-white text-[15px] leading-[17.4px] font-medium flex items-center justify-center top-[172.2px] left-[1277.5px] h-[29px] w-[60px] bg-[#414F4F] rounded-[4px]">
				{props.water_temp_after} °С
			</div>

			<div className="absolute top-[66.2px] left-[1231px] w-[150px] h-[97px] bg-[#E8EAEA] border-2 border-[#8D9595] rounded-[10px]">
				<div className="flex flex-col w-full h-full p-2.5">
					<div className="px-2.5 py-[3px] bg-[rgba(255,255,255,0.5)] w-full text-center text-[14px] leading-4 font-medium">
						Охладитель
					</div>
				</div>
			</div>
		</>
	);
};

export default Cooler;
