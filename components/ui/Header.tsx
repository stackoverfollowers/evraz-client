import Image from 'next/image';
import logo from '../../public/logo.svg';
import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import Notifications from '../Notifications';
import Button from './Button';
import Breadcrumbs from './Breadcrumbs';

const Header = () => {
	const [openNotifications, setOpenNotificaitons] = useState(false);

	return (
		<>
			<nav className="bg-white">
				<div className="box-border flex items-center px-5 py-2 h-[54px]">
					{/* Group */}
					<div className="flex items-center gap-5 p-0 shrink-0">
						<button className="relative w-10 h-10 bg-[#FAB82E] hover:bg-[#F9A823] rounded-[5px]">
							<FiMenu className="absolute inset-[20%] w-6 h-6 text-white" />
						</button>
						{/* Sep */}
						<div className="w-[1px] h-[34px] border border-[#F4F4F4]" />
						<Image alt="Logo" src={logo} />
					</div>

					{/* Breadcrumbs */}
					<Breadcrumbs />

					{/* Frame 14508 */}
					<div className="flex items-center p-0 gap-5">
						<Button>Справочник</Button>
						<Notifications
							open={openNotifications}
							onClose={() => setOpenNotificaitons(false)}
						/>

						{/* Controls */}
						<button
							onClick={() => setOpenNotificaitons(true)}
							className="relative flex items-center w-[26px] h-[26px] p-[5px] group bg-[#FAFAFA] hover:bg-[#EFEFEF] rounded-[4px] border border-[#EAEAEA]"
						>
							<FiBell className="text-[#B1B1B2] group-hover:text-[#6E6E6D]" />
							<div className="absolute w-[6px] h-[6px] left-[20px] -top-[2px] bg-[#EB5835] rounded-full" />
						</button>
						{/* Sep */}
						<div className="w-[1px] h-[34px] border border-[#F4F4F4]" />
						{/* User */}
						<div className="flex items-center w-[61px] h-10 gap-[5px]">
							<div className="flex select-none cursor-pointer items-center justify-center p-0 w-10 h-10 bg-[#F4F4F4] hover:bg-[#EFEFEF] rounded-[5px] leading-[14px] text-[12px] font-medium text-center">
								DN
							</div>
							<FiChevronDown className="w-4 h-4" />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
