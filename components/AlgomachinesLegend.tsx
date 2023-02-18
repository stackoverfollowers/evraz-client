import { FiThermometer, FiRadio, FiDroplet } from 'react-icons/fi';

const AlgomachinesLegend = () => {
	return (
		<div className="flex justify-end items-end gap-[20px]">
			<div className="gap-2 flex items-center text-[#2B2B2A] h-[15px]">
				<div className="flex items-center">
					<span className="font-medium text-[13px] leading-[15px]">T</span>
					<FiThermometer className="h-3.5 w-3.5" />
				</div>
				<span className="font-light text-[13px] leading-[15px]">
					Температура
				</span>
			</div>
			<div className="gap-2 flex items-center text-[#2B2B2A] h-[15px]">
				<div className="flex items-center gap-[2px]">
					<span className="font-medium text-[13px] leading-[15px]">V</span>
					<FiRadio className="h-3.5 w-3.5" />
				</div>
				<span className="font-light text-[13px] leading-[15px]">Вибрация</span>
			</div>
			<div className="gap-2 flex items-center text-[#2B2B2A] h-[15px]">
				<div className="flex items-center gap-[2px]">
					<span className="font-medium text-[13px] leading-[15px]">L</span>
					<FiDroplet className="h-3.5 w-3.5" />
				</div>
				<span className="font-light text-[13px] leading-[15px]">
					Уровень масла
				</span>
			</div>
			<div className="gap-2 flex items-center text-[#2B2B2A] h-[15px]">
				<div className="h-3 w-3 bg-[#F9A823] rounded-[2px]" />
				<span className="font-light text-[13px] leading-[15px]">
					Предупреждение
				</span>
			</div>
			<div className="gap-2 flex items-center text-[#2B2B2A] h-[15px]">
				<div className="h-3 w-3 bg-[#E32112] rounded-[2px]" />
				<span className="font-light text-[13px] leading-[15px]">Опасность</span>
			</div>
		</div>
	);
};

export default AlgomachinesLegend;
