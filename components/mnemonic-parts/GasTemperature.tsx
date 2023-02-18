import { SingleExhausterType } from '@/types';

interface GasTemperatureProps {
	gas_temp_before: SingleExhausterType['gas_temp_before'];
	gas_underpressure_before: SingleExhausterType['gas_underpressure_before'];
}

const GasTemperature = (props: GasTemperatureProps) => {
	const percentage = props.gas_temp_before / 100;

	return (
		<>
			<div className="absolute flex flex-col gap-[6px] top-[161.7px] left-[455.5px] w-[159px] h-[43px] bg-[#EFF2F6] border-2 border-[#8D9595] rounded-[2px] p-[4px]">
				<div>
					<div
						className={
							'flex flex-col items-center h-[33px] w-full max-w-[147px] px-3 py-[2px] relative bg-[#B3B9B9]'
						}
						style={{ width: `${percentage * 100}%` }}
					>
						{/* <div className="flex left-0 absolute top-0 h-[33px] w-[2px] bg-[#EB5835]" />
				<div className="flex right-0 absolute top-0 h-[33px] w-[2px] bg-[#EB5835]" /> */}

						<span className="text-[13px] leading-[15px] font-medium whitespace-nowrap absolute left-3 top-0">
							{props.gas_temp_before}
						</span>
						<span className="text-[10px] leading-3 text-[#262626] font-[375] whitespace-nowrap absolute left-3 top-4">
							ТЕМПЕРАТУРА ГАЗА, °C
						</span>
					</div>
				</div>
				<div className="flex justify-between items-center text-[12px] font-medium leading-[13.92px] tracking-tighter">
					<span className="text-white">
						Разряжение<span className="font-normal">, мм.в.ст</span>
					</span>
					<div className="flex tracking-tighter items-center justify-center bg-[#414F4F] w-[34px] h-5 py-[3px] px-[6px] rounded-[4px] text-[12px] leading-[14px] font-medium text-white ">
						{props.gas_underpressure_before}
					</div>
				</div>
			</div>
		</>
	);
};

export default GasTemperature;
