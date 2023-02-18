import { ExhausterType } from '@/types';
import Exhauster from './Exhauster';

interface AlgomachineProps {
	id: number;
	exhausters: ExhausterType[];
}

const Algomachine = ({ id, exhausters }: AlgomachineProps) => {
	return (
		<div className="flex flex-col w-full ">
			<div className="bg-[#F4F4F4] py-[10px] px-5 rounded-t-[4px] text-[#6E6E6D] font-[375] leading-5">
				Алгомашина №{id + 1}
			</div>
			<div className="flex py-[10px] gap-[10px] w-full">
				{exhausters.map(ex => (
					<Exhauster key={ex.title} exhauster={ex} />
				))}
			</div>
		</div>
	);
};

export default Algomachine;
