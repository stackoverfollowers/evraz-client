import { DiagramData } from '@/types';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { Disclosure } from '@headlessui/react';
import Checkbox from './ui/Checkbox';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
};

interface DiagramProps {
	data: DiagramData;
}

const Diagram = ({ data }: DiagramProps) => {
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		const month = date.getMonth() + 1; // getMonth() returns 0-indexed values, so add 1 to get the correct month
		const day = date.getDate();
		const hour = date.getHours();
		const minute = date.getMinutes();
		const formattedDate = `${day.toString().padStart(2, '0')}.${month
			.toString()
			.padStart(2, '0')}, ${hour.toString()}:${minute
			.toString()
			.padStart(2, '0')}`;
		return formattedDate;
	};

	const labels = data.map(i => formatDate(i.moment));

	const datasets = data.map((i, _) => {
		return {
			label: `Подшипник ${_}`,
			data: i.bearings_data.map(b => b.temp),
			backgroundColor: 'rgba(54, 162, 235, 0.5)',
			borderColor: 'rgb(54, 162, 235)',
			borderWidth: 1,
		};
	});

	const chartData = {
		labels,
		datasets,
	};

	return (
		<div className="flex gap-[40px] p-5">
			<div className="flex flex-col h-[750px] w-[300px] gap-[5px]">
				{/* Header */}
				<div className="flex h-[30px] w-[300px] gap-[3px]">
					<div className="flex w-5 h-[30px] box-border border-b-2 border-[#EAEAEA] pb-[6px] pt-[4px]">
						<div className="flex items-center justify-center bg-[#FAFAFA] rounded-[3px] h-5 w-5">
							<FiChevronDown className="text-[#565655] w-4 h-4" />
						</div>
					</div>
					<div className="flex w-full h-[30px] box-border border-b-2 border-[#EAEAEA] pl-2.5 px-[3px] text-[#9B9B9C]">
						Агрегат
					</div>

					<div className="flex w-fit h-[30px] box-border border-b-2 border-[#EAEAEA] pl-2.5 px-[3px] text-[#9B9B9C]">
						Значение
					</div>
				</div>

				<Disclosure defaultOpen>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex items-center gap-[3px]">
								<div className="flex  w-5 h-[30px] box-border py-[5px]">
									<div className="flex items-center justify-center bg-[#FAFAFA] rounded-[3px] h-5 w-5">
										{open ? (
											<FiChevronDown className="text-[#565655] w-4 h-4" />
										) : (
											<FiChevronRight className="text-[#565655] w-4 h-4" />
										)}
									</div>
								</div>
								<div className="w-full text-start leading-[15px] font-medium bg-[#FAFAFA] border border-[#EFEFEF] rounded-[3px] px-2.5 py-[6px]">
									Подшипники
								</div>
							</Disclosure.Button>
							<Disclosure.Panel className="flex flex-col gap-[5px]">
								{data.map((rec, i) => {
									return (
										<Disclosure key={i}>
											{({ open }) => (
												<>
													<Disclosure.Button className="flex items-center gap-[3px] pl-[25px]">
														<div className="flex  w-5 h-[30px] box-border py-[5px]">
															<div className="flex items-center justify-center bg-[#FAFAFA] rounded-[3px] h-5 w-5">
																{open ? (
																	<FiChevronDown className="text-[#565655] w-4 h-4" />
																) : (
																	<FiChevronRight className="text-[#565655] w-4 h-4" />
																)}
															</div>
														</div>
														<div className="w-full text-start leading-[15px] font-medium bg-[#FAFAFA] border border-[#EFEFEF] rounded-[3px] px-2.5 py-[6px]">
															{i + 1} ПС
														</div>
													</Disclosure.Button>
													<Disclosure.Panel className="flex flex-col gap-1 pl-[50px] tracking-tighter">
														<>
															<div className="w-full flex justify-between text-start leading-[15px] font-medium bg-[#FAFAFA] border border-[#EFEFEF] rounded-[3px] px-2.5 py-[6px]">
																<div className="flex gap-3">
																	<Checkbox checked />
																	<span>T, °С</span>
																</div>
																<span className="flex items-center justify-center py-[2px] px-[6px] rounded-[2px]">
																	0000
																</span>
															</div>
															<div className="w-full flex justify-between text-start leading-[15px] font-medium bg-[#FAFAFA] border border-[#EFEFEF] rounded-[3px] px-2.5 py-[6px]">
																<div className="flex gap-3">
																	<Checkbox />
																	<span>Верт, мм/с</span>
																</div>
																<span className="flex items-center justify-center py-[2px] px-[6px] rounded-[2px]">
																	0000
																</span>
															</div>
															<div className="w-full flex justify-between text-start leading-[15px] font-medium bg-[#FAFAFA] border border-[#EFEFEF] rounded-[3px] px-2.5 py-[6px]">
																<div className="flex gap-3">
																	<Checkbox />
																	<span>Гориз, мм/с</span>
																</div>
																<span className="flex items-center justify-center py-[2px] px-[6px] rounded-[2px] bg-[#FCDBCB] text-[#E32112]">
																	0000
																</span>
															</div>
															<div className="w-full flex justify-between text-start leading-[15px] font-medium bg-[#FAFAFA] border border-[#EFEFEF] rounded-[3px] px-2.5 py-[6px]">
																<div className="flex gap-3">
																	<Checkbox />
																	<span>Ось, мм/с</span>
																</div>
																<span className="flex items-center justify-center py-[2px] px-[6px] rounded-[2px]">
																	0000
																</span>
															</div>
														</>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									);
								})}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
			<div className="flex flex-col gap-4 h-full w-full">
				{/* Legend */}
				<div className="flex flex-col grow">
					<div className="w-auto h-[750px]">
						<Line options={options} data={chartData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Diagram;
