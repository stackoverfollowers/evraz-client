const MnemonicLegend = () => {
	return (
		<div className="flex justify-end items-end gap-[20px]">
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

export default MnemonicLegend;
