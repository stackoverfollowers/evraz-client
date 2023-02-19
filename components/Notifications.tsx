import { Fragment } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import {
	FiChevronDown,
	FiX,
	FiChevronRight,
	FiRotateCw,
	FiClock,
} from 'react-icons/fi';

const Bubble = () => {
	return (
		<div className="flex flex-col gap-[10px] last:pb-0 last:border-0 pb-2.5 border-b border-[#EFEFEF]">
			<div className="flex gap-[10px]">
				<div className="py-1 px-[5px] gap-[7px] text-[#565655] text-xs font-medium flex items-center justify-center bg-[#F4F4F4] rounded-[4px] w-fit">
					<FiRotateCw className="h-4 w-4 " />
					<span>17</span>
				</div>
				<div className="flex items-center gap-[5px] text-[#565655]">
					<FiClock className="h-4 w-4" />
					<span className="text-xs">31.01.2023, 12:27</span>
				</div>
			</div>
			{/* Bubble */}
			<div className="bg-[#fcdbcb] text-[14px] leading-[15px] px-[14px] py-2.5 border border-[#fbe7de] rounded-tr-3xl rounded-b-3xl">
				Подшипник вентилятора с приводной стороны - локальная проблема
				подшипника. Проведите ремонтные работы
			</div>
			{/* Date */}
			<span className="flex justify-end text-[#565655] text-xs">
				Дата добавления: 31.01.2023, 12:27
			</span>
		</div>
	);
};

const Notification = () => {
	return (
		<div className="relative mt-2 flex flex-col px-4 gap-[10px]">
			<div
				className="h-full p-3 bg-[#fafafa] border-2 border-[#edeff4] rounded-[4px]"
				aria-hidden="true"
			>
				<Disclosure defaultOpen={true}>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex gap-1.5 items-center">
								<div className="bg-[#EFEFEF] text-[#565655] h-5 w-5 flex justify-center items-center rounded-[3px]">
									{open ? (
										<FiChevronDown className="h-4 w-4" />
									) : (
										<FiChevronRight className="h-4 w-4" />
									)}
								</div>
								<span className="text-[#2B2B2A] text-sm font-medium">
									Эксгаустер Y-171
								</span>
							</Disclosure.Button>
							<Disclosure.Panel className="flex flex-col pl-3 mt-5 gap-[10px]">
								<Bubble />
								<Bubble />
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
};

interface NotificationsProps {
	open: boolean;
	onClose: (v: boolean) => void;
}

const Notifications = ({ open, onClose }: NotificationsProps) => {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-[#f4f4f4] py-6">
										<div className="flex justify-between items-center px-4">
											<Dialog.Title className="text-lg font-medium text-gray-900">
												Уведомления
											</Dialog.Title>
											<button type="button" onClick={() => onClose(false)}>
												<span className="sr-only">Close panel</span>
												<FiX
													className="h-6 w-6 text-[#B1B1B2] hover:text-[#868686]"
													aria-hidden="true"
												/>
											</button>
										</div>
										<Notification />
										<Notification />
										<Notification />
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Notifications;
