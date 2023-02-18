import { SingleExhausterType } from '@/types';
import cx from 'clsx';
import OilLevel from './mnemonic-parts/OilLevel';
import OilPressure from './mnemonic-parts/OilPressure';
import MainDrive from './mnemonic-parts/MainDrive';
import Cooler from './mnemonic-parts/Cooler';
import GasTemperature from './mnemonic-parts/GasTemperature';
import MnemonicLegend from './MnemonicLegend';

interface MnemonicSchemeProps {
	exhauster: SingleExhausterType;
}

interface MnemonicProps {
	exhauster: SingleExhausterType;
}

const PSDataBlock = ({
	bearing,
}: {
	bearing: SingleExhausterType['bearings'][0];
}) => {
	const renderData = (type: 'block' | 'rect') => {
		const statusMapping = {
			alarm: 'bg-[#EB5835]',
			warning: 'bg-[#FAB82E]',
			default: '',
		};

		return (
			<>
				<div className="flex items-center justify-center border border-[#8D9595] h-[21px] w-[100px] text-center text-white font-medium text-lg">
					{bearing.index} ПС
				</div>
				<div className="flex flex-col mt-[2px] gap-1 w-full text-white">
					<div
						className={cx(
							'flex justify-between text-sm px-[5px] rounded-[4px]',
							statusMapping[bearing.temp_status]
						)}
					>
						<span>T, °С</span>
						<span className="font-medium tracking-tighter">
							{bearing.temperature}
						</span>
					</div>
					{type === 'block' && (
						<>
							<div
								className={cx(
									'flex justify-between text-sm px-[5px]',
									bearing.vert_vibration_status
										? statusMapping[bearing.vert_vibration_status]
										: 'default'
								)}
							>
								<span>В, мм/с</span>
								<span className="font-medium tracking-tighter">
									{bearing.vertical_vibration}
								</span>
							</div>
							<div
								className={cx(
									'flex justify-between text-sm px-[5px]',
									bearing.hor_vibration_status
										? statusMapping[bearing.hor_vibration_status]
										: 'default'
								)}
							>
								<span>Г, мм/с</span>
								<span className="font-medium tracking-tighter">
									{bearing.horizontal_vibration}
								</span>
							</div>
							<div
								className={cx(
									'flex justify-between text-sm px-[5px]',
									bearing.axial_vibration_status
										? statusMapping[bearing.axial_vibration_status]
										: 'default'
								)}
							>
								<span>О, мм/с</span>
								<span className="font-medium tracking-tighter">
									{bearing.axial_vibration}
								</span>
							</div>
						</>
					)}
				</div>
			</>
		);
	};

	switch (bearing.index) {
		case 1:
			return (
				<div className="absolute top-[474.7px] left-[calc(50%-140px/2+498px)] w-[140px] h-[156px] p-2.5">
					<div className="flex flex-col justify-between items-center w-[120px] h-[136px] bg-[#414F4F] rounded-[10px] p-2.5 pb-[5px]">
						{renderData('block')}
					</div>
				</div>
			);
		case 2:
			return (
				<div className="absolute top-[474.33px] left-[calc(50%-140px/2+168.02px)] w-[140px] h-[156px] p-2.5">
					<div className="flex flex-col justify-between items-center w-[120px] h-[136px] bg-[#414F4F] rounded-[10px] p-2.5 pb-[5px]">
						{renderData('block')}
					</div>
				</div>
			);
		case 3:
			return (
				<div className="absolute top-[196.7px] left-[calc(50%-140px/2+15px)] w-[140px] h-[87px] p-2.5">
					<div className="flex flex-col justify-between items-center w-[120px] h-[67px] bg-[#414F4F] rounded-[10px] p-2.5 pb-[5px]">
						{renderData('rect')}
					</div>
				</div>
			);

		case 4:
			return (
				<div className="absolute top-[196.7px] left-[calc(50%-140px/2-146.5px)] w-[140px] h-[87px] p-2.5">
					<div className="flex flex-col justify-between items-center w-[120px] h-[67px] bg-[#414F4F] rounded-[10px] p-2.5 pb-[5px]">
						{renderData('rect')}
					</div>
				</div>
			);

		case 5:
			return (
				<div className="absolute top-[474.33px] left-[calc(50%-140px/2+16.5px)] w-[140px] h-[87px] p-2.5">
					<div className="flex flex-col justify-between items-center w-[120px] h-[67px] bg-[#414F4F] rounded-[10px] p-2.5 pb-[5px]">
						{renderData('rect')}
					</div>
				</div>
			);

		case 6:
			return (
				<div className="absolute top-[474.5px] left-[calc(50%-140px/2-146.5px)] w-[140px] h-[87px] p-2.5">
					<div className="flex flex-col justify-between items-center w-[120px] h-[67px] bg-[#414F4F] rounded-[10px] p-2.5 pb-[5px]">
						{renderData('rect')}
					</div>
				</div>
			);
		case 7:
			return (
				<div className="absolute top-[551.96px] left-[calc(50%-140px/2-147px)] w-[140px] h-[156px] p-2.5">
					<div className="flex flex-col justify-between items-center w-[120px] h-[136px] bg-[#414F4F] rounded-[10px] p-2.5 pb-[5px]">
						{renderData('block')}
					</div>
				</div>
			);

		case 8:
			return (
				<div className="absolute top-[460.59px] left-[calc(50%-140px/2-598.82px)] w-[140px] h-[156px] p-2.5">
					<div className="flex flex-col justify-between items-center w-[120px] h-[136px] bg-[#414F4F] rounded-[10px] p-2.5 pb-[5px]">
						{renderData('block')}
					</div>
				</div>
			);
		case 9:
			return (
				<div className="absolute top-[366.7px] left-[calc(50%-140px/2-600.33px)] w-[140px] h-[87px] p-2.5">
					<div className="flex flex-col justify-between items-center w-[120px] h-[67px] bg-[#414F4F] rounded-[10px] p-2.5 pb-[5px]">
						{renderData('rect')}
					</div>
				</div>
			);
	}

	return null;
};

const MnemonicScheme = ({ exhauster }: MnemonicSchemeProps) => {
	return (
		<div className="relative w-full h-full">
			{/* SVG, элементы мнемосхемы */}
			<img
				className="absolute left-[818px] top-[-10px]"
				src="/mnemonic/14292.svg"
			/>

			{/* 1-9 ПС */}
			{exhauster.bearings.map(b => (
				<PSDataBlock key={b.index} bearing={b} />
			))}

			{/* SVG, элементы мнемосхемы */}
			<>
				<img
					className="absolute left-[441.04px] top-[120.7px]"
					src="/mnemonic/13570.svg"
				/>

				<img
					className="absolute left-[540.5px] top-[409.7px]"
					src="/mnemonic/4092.svg"
				/>

				<img
					className="absolute left-[702px] top-[390.2px]"
					src="/mnemonic/4094.svg"
				/>

				<div className="absolute left-[600.5px] top-[375.7px] w-[59px] h-[100px] bg-[#8D9595] rounded-[6.48px]" />
				<div className="absolute left-[411.5px] top-[375.7px] w-[59px] h-[100px] bg-[#8D9595] rounded-[6.48px]" />

				<div className="absolute left-[1397.5px] top-[290.7px] w-[59px] h-[100px] bg-[#8D9595] rounded-[6.48px]" />

				<img
					className="absolute left-[453.14px] top-[409.85px]"
					src="/mnemonic/4092-1.svg"
				/>
				<img
					className="absolute left-[499.5px] top-[312.7px]"
					src="/mnemonic/13568.svg"
				/>
				<img
					className="absolute left-[949.5px] top-[338.7px]"
					src="/mnemonic/4092-2.svg"
				/>
				<img
					className="absolute left-[615.12px] top-[393.7px]"
					src="/mnemonic/4094.svg"
				/>

				<img
					className="absolute left-[993.5px] top-[319.7px]"
					src="/mnemonic/4094.svg"
				/>

				<img
					className="absolute left-[1387.5px] top-[327.7px]"
					src="/mnemonic/4095.svg"
				/>

				<img
					className="absolute left-[1409.5px] top-[308.7px]"
					src="/mnemonic/4094.svg"
				/>

				<img
					className="absolute left-[1135.5px] top-[307.7px]"
					src="/mnemonic/8060.svg"
				/>

				<img
					className="absolute left-[1377px] top-[307.7px]"
					src="/mnemonic/8061.svg"
				/>

				<div>
					<img
						className="absolute left-[441.5px] top-[503.7px]"
						src="/mnemonic/13.svg"
					/>
					<div className="absolute left-[495.5px] top-[603.7px] w-[79px] h-[92px] bg-[#B3B9B9]" />
					<img
						className="absolute left-[494.5px] top-[651.7px]"
						src="/mnemonic/mask.svg"
					/>

					<div className="absolute left-[604.05px] top-[648.96px] w-[3.72px] h-[18px] bg-[#4a8f40]" />

					<div
						style={{
							width: `${115 - exhauster.gas_valve_position}px`,
							left: `${491 + exhauster.gas_valve_position}px`,
						}}
						className="absolute  top-[652.96px]  h-[9.46px] bg-[#4a8f40]"
					/>

					<div className="absolute left-[619.2px] top-[648.48px] text-[13px] leading-[15px] text-center">
						{exhauster.gas_valve_position}%
					</div>
				</div>
				<img
					className="absolute left-[387.67px] top-[457.7px]"
					src="/mnemonic/14291.svg"
				/>
				<img
					className="absolute left-[385.5px] top-[407.85px]"
					src="/mnemonic/14280.svg"
				/>
				<img
					className="absolute left-[423.5px] top-[393.7px]"
					src="/mnemonic/4094.svg"
				/>
				<img
					className="absolute left-[626.5px] top-[487px]"
					src="/mnemonic/14283.svg"
				/>
				<img
					className="absolute left-[626.5px] top-[458.7px]"
					src="/mnemonic/14275.svg"
				/>
				<img
					className="absolute left-[674px] top-[588px]"
					src="/mnemonic/14287.svg"
				/>
				<img
					className="absolute left-[678px] top-[588px]"
					src="/mnemonic/14288.svg"
				/>
				<img
					className="absolute left-[674px] top-[497px]"
					src="/mnemonic/14286.svg"
				/>

				<img
					className="absolute left-[674px] top-[487px]"
					src="/mnemonic/14285.svg"
				/>

				<img
					className="absolute left-[637px] top-[487px]"
					src="/mnemonic/14284.svg"
				/>
			</>

			{/* Маслобак */}
			<OilLevel {...exhauster} />

			{/* Главный привод */}
			<MainDrive {...exhauster} />

			{/* Охладитель */}
			<Cooler {...exhauster} />

			{/* Давление масла */}
			<OilPressure {...exhauster} />

			{/* Температура газа */}
			<GasTemperature {...exhauster} />

			{/* Редуктор */}
			<div className="absolute left-[778.5px] top-[302.7px] w-[171px] h-[170px] bg-[#8D9595] rounded-[12.96px]" />
			<div className="absolute z-10 top-[326.7px] left-[802.5px] w-[123px] h-[122px] bg-[#E8EAEA] border-2 border-[#8D9595] rounded-[10px]">
				<div className="flex w-full h-full items-center justify-center p-2.5">
					<div className="px-2.5 py-[3px] bg-[rgba(255,255,255,0.5)] w-full text-center text-[14px] leading-4 font-medium">
						Редуктор
					</div>
				</div>
			</div>
		</div>
	);
};

const Mnemonic = ({ exhauster }: MnemonicProps) => {
	return (
		<div className="flex flex-col p-4 gap-4 h-full w-full">
			<MnemonicLegend />
			<div className="flex flex-col grow">
				<MnemonicScheme exhauster={exhauster} />
			</div>
		</div>
	);
};

export default Mnemonic;
