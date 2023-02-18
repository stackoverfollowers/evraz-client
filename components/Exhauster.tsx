import { ExhausterType } from '@/types';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { FiChevronRight, FiChevronDown, FiAlertCircle } from 'react-icons/fi';
import ExhausterScheme from './ExhausterScheme';
import cx from 'clsx';
import Bearings, { BadgeType } from './Bearings';

interface ExhausterProps {
	exhauster: ExhausterType;
}

const Exhauster = ({ exhauster }: ExhausterProps) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString();
		return `${day}.${month}.${year}`;
	};

	const warnings = exhauster.bearings.filter(bearing =>
		Object.values(bearing).some(val => val === true)
	);

	const bearings = exhauster.bearings.filter(
		bearing => !warnings.includes(bearing)
	);

	let oil_type: BadgeType =
		exhauster.oil_level < 10
			? 'alarm'
			: exhauster.oil_level < 20
			? 'warning'
			: 'default';

	return (
		<div className="flex flex-col w-full">
			{/* Header */}
			<div className="flex items-center bg-[#6E6E6D] gap-5 py-[7px] px-3.5 rounded-t-[4px] w-full">
				<div className="flex items-center gap-2.5 w-full">
					<div
						className={cx(
							'w-2.5 h-2.5 rounded-full',
							exhauster.is_work ? 'bg-[#6EA566]' : 'bg-[#E32112]'
						)}
					/>
					<span className="text-[15px] leading-[17px] font-medium text-white">
						Эксгаустер {exhauster.title}
					</span>
				</div>
				<Link
					href={`/${exhauster.index}`}
					className="bg-[#FAFAFA] h-[26px] w-[26px] flex shrink-0 items-center justify-center rounded-[4px] border-2 border-transparent group hover:border-[#FCBF57]"
				>
					<FiChevronRight className="h-4 w-4 text-[#B1B1B2] group-hover:text-[#FCBF57]" />
				</Link>
			</div>
			{/* Content */}
			<div className="flex flex-col min-h-[482px] p-3.5 border-b border-x border-[#E5E5E5] rounded-b-[4px] gap-2.5">
				{/* Header */}
				<div className="flex gap-2.5 items-center">
					<div className="font-medium text-[15px] leading-[17px] text-[#2B2B2A]">
						Ротор {exhauster.rotor_title}
					</div>
					<div className="py-1 px-2.5 bg-[#F4F4F4] rounded-[4px] flex items-center justify-center text-[13px] leading-[15px]">
						{formatDate(exhauster.date_last_change)}
					</div>
					{/* Link */}
					<div className="relative text-[13px] leading-[15px] text-[#8E4D9B] group hover:text-[#722082] cursor-pointer">
						Изменить
						<div className="absolute top-4 inset-x-0 h-[1px] border border-dashed border-[#8E4D9B] group-hover:border-[#722082]" />
					</div>
				</div>
				{/* Sep */}
				<div className="my-[5px] w-full h-[0px] border-b border-[#EFEFEF]" />

				{/* Info */}
				<div className="flex flex-col gap-2.5">
					<div className="pl-[20px] text-[#2B2B2A] text-[13px] leading-[15px] font-medium">
						Последняя замена ротора
					</div>
					<div className="flex items-center py-[5px] px-5 h-12 rounded-[4px] bg-[#FAFAFA]">
						<div className="py-1 px-2.5 text-[18px] leading-[21px] font-medium flex items-center justify-center bg-[#F4F4F4] rounded-[4px] h-[29px] w-fit">
							{exhauster.days_last_change} сут
						</div>
						<div className="flex flex-col py-[2px] px-[15px] gap-[1px] justify-center items-start">
							<div className="flex gap-[3px]">
								<span className="font-[375] text-[#6E6E6D] text-[12px] leading-[14px]">
									Прогноз
								</span>
								{exhauster.forecast_warning && (
									<FiAlertCircle className="text-white fill-[#FAB82E]" />
								)}
								{exhauster.forecast_alarm && (
									<FiAlertCircle className="text-white fill-[#EB5835]" />
								)}
							</div>
							<span className="font-medium text-[#565655] text-[16px] leading-[19px]">
								{exhauster.days_forecast} сут
							</span>
						</div>
					</div>
				</div>

				{/* Scheme */}
				<ExhausterScheme exhausterTitle={exhauster.title} />

				{/* Warning */}
				{warnings.length !== 0 && (
					<Disclosure defaultOpen={true}>
						{({ open }) => (
							<>
								<Disclosure.Button className="flex gap-1.5 items-center">
									<div className="bg-[#EFEFEF] h-5 w-5 flex justify-center items-center rounded-[3px]">
										{open ? (
											<FiChevronDown className="h-4 w-4 text-[#565655]" />
										) : (
											<FiChevronRight className="h-4 w-4 text-[#565655]" />
										)}
									</div>
									<span className="text-[#2B2B2A] text-sm font-medium">
										Предупреждение
									</span>
								</Disclosure.Button>
								{/* Table */}
								<Disclosure.Panel className="flex flex-col pl-[18px] gap-1">
									<Bearings
										exhausterTitle={exhauster.title}
										bearings={warnings}
										oil_type={oil_type === 'default' ? null : oil_type}
									/>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				)}

				{/* Bearings */}

				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex gap-1.5 items-center">
								<div className="bg-[#EFEFEF] h-5 w-5 flex justify-center items-center rounded-[3px]">
									{open ? (
										<FiChevronDown className="h-4 w-4 text-[#565655]" />
									) : (
										<FiChevronRight className="h-4 w-4 text-[#565655]" />
									)}
								</div>
								<span className="text-[#2B2B2A] text-sm font-medium">
									Все подшипники
								</span>
							</Disclosure.Button>
							{/* Table */}
							<Disclosure.Panel className="flex flex-col pl-[18px] gap-1">
								<Bearings
									exhausterTitle={exhauster.title}
									bearings={bearings}
									oil_type={oil_type}
								/>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
};

export default Exhauster;
