import { SingleExhausterType } from '@/types';
import cx from 'clsx';

interface MainDriveProps {
	rotor_current: SingleExhausterType['rotor_current'];
	rotor_current_status: SingleExhausterType['rotor_current_status'];

	stator_current: SingleExhausterType['stator_current'];
	stator_current_status: SingleExhausterType['stator_current_status'];

	rotor_voltage: SingleExhausterType['rotor_voltage'];
	stator_voltage: SingleExhausterType['stator_voltage'];
}

const MainDrive = (props: MainDriveProps) => {
	let rotorColor = 'bg-[#414F4F]';
	let statorColor = 'bg-[#414F4F]';

	switch (true) {
		case props.stator_current_status === 'alarm':
			statorColor = 'bg-[#F18863]';
			break;
		case props.stator_current_status === 'warning':
			statorColor = 'bg-[#FDC65F]';
			break;
		case props.rotor_current_status === 'alarm':
			rotorColor = 'bg-[#F18863]';
			break;
		case props.rotor_current_status === 'warning':
			rotorColor = 'bg-[#FDC65F]';
			break;
	}

	return (
		<>
			<div className="absolute top-[267.7px] left-[1145.5px] w-[232px] h-[150px] bg-[#E8EAEA] border-2 border-[#8D9595] rounded-[10px]">
				<div className="flex flex-col justify-between w-full h-full p-2.5 gap-3">
					<div className="px-2.5 py-[3px] bg-[rgba(255,255,255,0.5)] w-full text-center text-[14px] leading-4 font-medium">
						Главный привод
					</div>
					<div className="flex flex-col  gap-[3px] font-medium leading-[14px] tracking-tighter">
						<div className="flex justify-between items-center">
							<span>
								Ток<span className="font-normal">, А</span>
							</span>
							<div
								className={cx(
									'flex items-center justify-center w-[34px] h-5 py-[3px] px-[6px] rounded-[4px] text-[12px] leading-[14px] font-medium text-white',
									rotorColor
								)}
							>
								{props.rotor_current}
							</div>
						</div>

						<div className="flex justify-between items-center">
							<span>
								Ток двигателя<span className="font-normal">, А</span>
							</span>
							<div
								className={cx(
									'flex items-center justify-center w-[34px] h-5 py-[3px] px-[6px] rounded-[4px] text-[12px] leading-[14px] font-medium text-white',
									statorColor
								)}
							>
								{props.stator_current}
							</div>
						</div>

						<div className="flex justify-between items-center">
							<span>
								Напряжение ротера<span className="font-normal">, кВт</span>
							</span>
							<div className="flex tracking-tighter items-center justify-center bg-[#414F4F] w-[34px] h-5 py-[3px] px-[6px] rounded-[4px] text-[12px] leading-[14px] font-medium text-white ">
								{props.rotor_voltage}
							</div>
						</div>

						<div className="flex justify-between items-center">
							<span>
								Напряжение статера<span className="font-normal">, кВт</span>
							</span>
							<div className="flex items-center justify-center bg-[#414F4F] w-[34px] h-5 py-[3px] px-[6px] rounded-[4px] text-[12px] leading-[14px] font-medium text-white ">
								{props.stator_voltage}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainDrive;
