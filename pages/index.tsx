import Layout from '@/components/ui/Layout';
import AlgomachinesLegend from '@/components/AlgomachinesLegend';
import Algomachine from '@/components/Algomachine';
import { useGetDataQuery } from '@/features/api';
import { ReactElement } from 'react';

import { FiFileText } from 'react-icons/fi';

export default function Home() {
	const { data } = useGetDataQuery();

	return (
		<div className="flex flex-col grow bg-white rounded-[5px] border border-[#EAEAEA] ">
			{/* Header */}
			<div className="border-b border-[#EAEAEA] rounded-t-[4px] bg-[#FAFAFA] h-10 flex items-center px-3.5 py-[7px] gap-3.5">
				<div className="flex items-center justify-center h-[26px] w-[26px] rounded-[4px] bg-[#FAB82E]">
					<FiFileText className="h-4 w-4 text-[#FFE3B4]" />
				</div>
				<div className="font-medium text-[14px] leading-4">Главный экран</div>
			</div>
			{/* Content */}
			<div className="flex flex-col p-4 gap-4">
				{/* Legend */}
				<AlgomachinesLegend />

				<div className="flex 2xl:flex-row flex-col gap-10 w-full">
					{/* Section */}
					{data?.sinter_machines.map((sm, id) => (
						<Algomachine key={id} exhausters={sm.exhausters} id={id} />
					))}
				</div>
			</div>
		</div>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};
