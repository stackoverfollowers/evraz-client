import Layout from '@/components/ui/Layout';
import { ReactElement, useState, useEffect } from 'react';
import { FiFileText } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Mnemonic from '@/components/Mnemonic';
import Diagram from '@/components/Diagram';
import { useGetDataByDateQuery, useGetSingleDataQuery } from '@/features/api';
import Head from 'next/head';
import cx from 'clsx';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { useDispatch, useSelector } from 'react-redux';
import { setExhauster } from '@/features/graphSlice';
import { RootState } from '@/store';
registerLocale('ru', ru);

const SectionPage = () => {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState(1);

	const dispatch = useDispatch();

	const [fromDate, setFromDate] = useState<Date>(new Date(2023, 0, 25, 6, 31));
	const [toDate, setToDate] = useState<Date>(new Date(2023, 0, 25, 6, 41));

	const { data } = useGetSingleDataQuery(
		{ index: parseInt(router.query.id as any) },
		{ skip: !router.query.id }
	);

	const { data: graphData } = useGetDataByDateQuery(
		{
			from: fromDate.toISOString(),
			to: toDate.toISOString(),
			exId: parseInt(router.query.id as any),
		},
		{ skip: activeTab === 1 && !router.query.id }
	);

	const renderActiveTab = () => {
		switch (activeTab) {
			case 1:
				return data ? <Mnemonic exhauster={data} /> : null;
			case 2:
				return <Diagram data={graphData} />;
		}
	};

	useEffect(() => {
		if (data) {
			dispatch(setExhauster(data));
		}
	}, [data]);

	return (
		<>
			<Head>Эксгаустер X</Head>
			<div className="flex flex-col w-full">
				{/* Tabs */}
				<div
					className={cx(
						'flex items-center pb-4 h-[48px]',
						1 === activeTab && 'flex-row-reverse'
					)}
				>
					{/* Date */}
					<div
						className={cx(
							'flex-1 items-start gap-2.5 h-9',
							1 === activeTab && 'hidden'
						)}
					>
						<div className="flex items-center gap-[2px] bg-white w-fit h-9 p-[6px]">
							<ReactDatePicker
								// locale="ru"
								selected={fromDate}
								//@ts-ignore
								onChange={setFromDate}
								showTimeInput
								dateFormat="d.MM.yyyy H:mm"
								className="w-[132px] text-sm font-medium px-[12px] py-[5px] bg-[#FAB82E] h-6 border rounded-[4px] outline-none"
							/>
							-
							<ReactDatePicker
								// locale="ru"
								selected={toDate}
								//@ts-ignore
								onChange={setToDate}
								showTimeInput
								dateFormat="d.MM.yyyy H:mm"
								className="w-[132px] text-sm font-medium px-[12px] py-[5px] bg-[#FAB82E] h-6 border rounded-[4px] outline-none"
							/>
						</div>
					</div>

					{/* Switch */}
					<div className="flex text-sm cursor-pointer font-medium items-center flex-re  p-[6px] h-9 bg-white rounded-[4px] gap-[2px]">
						<div
							onClick={() => setActiveTab(1)}
							className={cx(
								'flex items-center justify-center h-6 rounded-[4px] px-3 py-[5px]',
								1 === activeTab
									? 'bg-[#FAB82E]'
									: 'text-[#F9A823] hover:bg-[#F4F4F4] hover:text-[#1C2626] focus:bg-[#FAB82E] focus:text-[#1C2626]'
							)}
						>
							Мнемосхема
						</div>
						<div
							onClick={() => setActiveTab(2)}
							className={cx(
								'flex items-center justify-center h-6 rounded-[4px] px-3 py-[5px]',
								2 === activeTab
									? 'bg-[#FAB82E]'
									: 'text-[#F9A823] hover:bg-[#F4F4F4] hover:text-[#1C2626] focus:bg-[#FAB82E] focus:text-[#1C2626]'
							)}
						>
							График
						</div>
					</div>
				</div>

				<div className="flex flex-col grow bg-white rounded-[5px] border border-[#EAEAEA]">
					{/* Header */}
					<div className="border-b border-[#EAEAEA] rounded-t-[4px] bg-[#FAFAFA] h-10 flex items-center px-3.5 py-[7px] gap-3.5">
						<div className="flex items-center justify-center h-[26px] w-[26px] rounded-[4px] bg-[#FAB82E]">
							<FiFileText className="h-4 w-4 text-[#FFE3B4]" />
						</div>
						<div className="font-medium text-[14px] leading-4">
							Эксгаустер {data?.title}{' '}
							{data?.updated_at && (
								<span className="text-xs">(обновлено {data?.updated_at})</span>
							)}
						</div>
					</div>
					{renderActiveTab()}
				</div>
			</div>
		</>
	);
};

SectionPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default SectionPage;
